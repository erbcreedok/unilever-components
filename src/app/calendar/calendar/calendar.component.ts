import { registerLocaleData, CommonModule } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);

import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  AfterContentInit,
  Renderer2,
  OnInit,
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
const colors: any = {
  red: {
    primary: '#02a785'
    // secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#02a785',
    secondary: '#02a785'
  }
};
@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['calendar.component.scss'],
  templateUrl: 'calendar.component.html'
})
export class CalendarComponent implements AfterContentInit {
  @ViewChild('modalContent')
  modalContent: TemplateRef<any>;


  view: CalendarView = CalendarView.Week;

  CalendarView = CalendarView;

  viewDate: Date = new Date();


  modalData: {
    action: string;
    event: CalendarEvent;
  };


  // actions: CalendarEventAction[] = [
  //   {
  //     label: '<div class="avatar"></div>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.handleEvent('Edited', event);
  //     }
  //   },
  //   {
  //     label: '<i class="fa fa-fw fa-times"></i>',
  //     onClick: ({ event }: { event: CalendarEvent }): void => {
  //       this.events = this.events.filter(iEvent => iEvent !== event);
  //       this.handleEvent('Deleted', event);
  //     }
  //   }
  // ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    {
      start: subDays(startOfDay(new Date()), 1),
      end: addDays(new Date(), 1),
      title: '',
      color: colors.yellow,
      actions: [],
      allDay: true,
      resizable: {
        beforeStart: false,
        afterEnd: true
      },
      draggable: true
    },
    {
      start: subDays(endOfMonth(new Date()), 3),
      end: addDays(endOfMonth(new Date()), 3),
      title: 'A long event that spans 2 months',
      color: colors.blue,
      allDay: true
    }
  ];

  locale: string = "ru";

  activeDayIsOpen: boolean = true;
  numbers = [
    'https://lh3.googleusercontent.com/5kJhw-TsCe1VvExwEvbWapWd4GncVFelhryHFlei3wlNZsqw4GyIGekaSzIUaRGMW7S6WuwINQrwByczQrs0MJPiyWVYbMw=s688',
   'http://minsvyaz.ru/preview/c/11199a2ec992acb3400926f4a846eeb8/256/x/256/uploaded/photos/konstantin-noskov.jpg', '../7.jpg', '../8.jpg', '../8.jpg'];
  left = '';
  limit = false;
  constructor(private modal: NgbModal, private renderer: Renderer2) {}

  ngAfterContentInit () {
    setTimeout(()=>{
      this.collectionToArray(window.document.getElementsByClassName('cal-event')).forEach(calEventRef => {
        const div = this.renderer.createElement('div');
        let avatars = ``;
        this.numbers.forEach(numRef =>{
          if(this.numbers.indexOf(numRef)==2){
            this.left = this.numbers.indexOf(this.numbers[this.numbers.length-2]) + '+';
            avatars += `<div class="more-avatar">${this.left}</div>`;
            this.limit=!this.limit;
          }
          if(!this.limit){
            console.log(this.numbers.indexOf(numRef));
            avatars += `<img class="avatar"  src="${numRef}"/>`;
          }

        })
        div.innerHTML = `
        <div class="d-flex flex-row-reverse avatar-container">
          ${avatars}
        </div>`;
        this.renderer.appendChild(calEventRef, div);
      });
    }, 1000)
  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  public collectionToArray(HTMLCol) {
    return Array.prototype.slice.call(HTMLCol);
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  addEvent(): void {
    this.events.push({
      title: 'New event',
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();
  }
}
