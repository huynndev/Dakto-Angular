import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  };
  customOptions2: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2
      },
      400: {
        items: 2
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    }
  };
  slidesStore: any[] = [
    {
      id: 1,
      src: '/assets/images/banner-1.jpg',
      alt: '',
      title: ''
    },
    {
      id: 2,
      src: '/assets/images/banner-2.jpg',
      alt: '',
      title: ''
    },
    {
      id: 3,
      src: '/assets/images/banner-3.jpg',
      alt: '',
      title: ''
    }
  ];
  slidesStore2: any[] = [
    {
      id: 1,
      src: '/assets/images/slide-2-1.jpg',
      alt: '',
      title: 'Thai sản',
      content: 'HFH là một trong những bệnh viện uy tín bậc nhất về cung cấp dịch vụ chăm sóc thai sản và sinh…'
    },
    {
      id: 2,
      src: '/assets/images/slide-2-2.jpg',
      alt: '',
      title: 'Khoa gây mê hồi sức',
      content: 'Gây mê là chuyên khoa giúp cho người bệnh mất đi cảm giác đau trước khi tiến hành phẫu thuật,…'
    },
    {
      id: 3,
      src: '/assets/images/slide-2-3.jpg',
      alt: '',
      title: 'Khoa tim mạch & tim mạch can thiệp',
      content: 'Khoa Tim mạch của Bệnh viện Việt Pháp Hà Nội bao gồm đội ngũ bác sỹ tim mạch nội khoa và bác sĩ…'
    }
  ];
  lat: number = 14.635819;
  lng: number = 107.847747;
  constructor() { }

  ngOnInit() {
  }

}
