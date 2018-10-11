import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
registerLocaleData(localeRu);
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit, Input, OnChanges, OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarView
} from 'angular-calendar';
import {subDays} from 'date-fns';
import { Task } from '../../../models/task.model';

interface EventTask {
  start: Date;
  end: Date;
  tasks: Task[];
}

const colors: any = {
  green: {
    primary: 'rgba(2, 167, 133, 0.1)',
    secondary: 'rgba(2, 167, 133, 0.1)'
  },
  blue: {
    primary: 'rgba(0, 100, 255, 0.1)',
    secondary: 'rgba(0, 100, 255, 0.1)'
  },
  red: {
    primary: 'rgba(213, 87, 66, 0.1)',
    secondary: 'rgba(213, 87, 66, 0.1)'
  },
  yellow: {
    primary: 'rgba(213, 197, 66, 0.1)',
    secondary: 'rgba(213, 197, 66, 0.1)'
  },
};

const colorList = [
  colors.green, colors.blue, colors.red, colors.yellow
];

@Component({
  selector: 'app-mwl-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './mwl-calendar.component.html',
  styleUrls: ['./mwl-calendar.component.scss'],
})
export class MwlCalendarComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  locale = 'ru';
  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [];
  modalEventTask: EventTask;
  modalRef: NgbModalRef;
  @Input() eventTasks: EventTask[];
  viewDate: Date = subDays(new Date(), 0);

  left = '';

  constructor(private modal: NgbModal) {}

  eventImages(event: CalendarEvent): {url: string, title: string}[] {
    const index = this.events.findIndex(e => e === event);
    console.log(index, this.eventTasks);
    return this.eventTasks[index].tasks.map(eventTask => {
      const isEmployeeExists = eventTask.checking && eventTask.checking.firstName && eventTask.checking.lastName;
      const isAvatarExist = eventTask.checking && eventTask.checking.avatar && eventTask.checking.avatar !== '';
      return {
        url: isAvatarExist ?
          eventTask.checking.avatar :
          isEmployeeExists ?
            null :
            'https://d2x5ku95bkycr3.cloudfront.net/App_Themes/Common/images/profile/0_200.png',
        title: (!isAvatarExist && isEmployeeExists) ?
          eventTask.checking.firstName.charAt(0) + eventTask.checking.lastName.charAt(0) :
          null
      };
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.modalRef.close();
  }

  ngOnChanges() {
    this.eventTasks.forEach((eventTask: EventTask, index) => {
      this.events.push(
        {
          start: new Date(eventTask.start),
          end: new Date(eventTask.end),
          title: 'Задача ' + index,
          color: colorList[index % colorList.length],
          actions: [],
          allDay: true
        }
      );
    });
    this.refresh.next();
  }

  openEvent(event: CalendarEvent) {
    const index = this.events.findIndex(e => e === event);
    this.modalEventTask = this.eventTasks[index];
    this.modalRef = this.modal.open(this.modalContent, {windowClass: 'popup-tasks-width'});
  }
}
