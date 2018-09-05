import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-gallery-more-info',
  templateUrl: './gallery-more-info.component.html',
  styleUrls: ['./gallery-more-info.component.scss']
})
export class GalleryMoreInfoComponent implements OnInit {

  constructor() { }

  galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];
 
    ngOnInit(): void {
 
        this.galleryOptions = [
            {
                "image": false,
            	width: '100%',
                height: '400px',
                thumbnailsMoveSize: 100,
                thumbnailsArrows: false,
                thumbnailsColumns: 2
            }
        ];
 
        this.galleryImages = [
            {
                small: 'assets/img/gallery1.jpg',
                medium: 'assets/img/gallery1.jpg',
                big: 'assets/img/gallery1.jpg'
            },
            {
                small: 'assets/img/gallery2.jpg',
                medium: 'assets/img/gallery2.jpg',
                big: 'assets/img/gallery2.jpg'
            },
            {
                small: 'assets/img/gallery3.jpg',
                medium: 'assets/img/gallery3.jpg',
                big: 'assets/img/gallery3.jpg'
            }
            ,
            {
                small: 'assets/img/gallery3.jpg',
                medium: 'assets/img/gallery3.jpg',
                big: 'assets/img/gallery3.jpg'
            }
            ,
            {
                small: 'assets/img/gallery1.jpg',
                medium: 'assets/img/gallery1.jpg',
                big: 'assets/img/gallery1.jpg'
            }
            ,
            {
                small: 'assets/img/gallery3.jpg',
                medium: 'assets/img/gallery3.jpg',
                big: 'assets/img/gallery3.jpg'
            }
        ];
    }

}
