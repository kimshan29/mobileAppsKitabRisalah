import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  public dataDaftarIsi = [
    {
      "no": 0,
      "nama": "COVER & PENGANTAR PENERBIT",
      "url": "cover"
    },
    {
      "no": 1,
      "nama": "MUKADDIMAH",
      "url": "home"
    },
    {
      "no": 2,
      "nama": "BAB I AQIDAH",
      "url": "",
      "sub": [
        {
          "no": 2.1,
          "nama": "Rukun Islam",
          "url": "info"
        },
        {
          "no": 2.2,
          "nama": "Rukun Iman ",
          "url": "home"
        }
      ]
    },
    {
      "no": 3,
      "nama": "BAB II IBADAH",
      "sub": [
        {
          "no": 3.1,
          "nama": "Wudhu",
        },
        {
          "no": 3.2,
          "nama": "Shalat"
        },
        {
          "no": 3.3,
          "nama": "Shalat Jum'at"
        },
        {
          "no": 3.4,
          "nama": "Puasa"
        },
        {
          "no": 3.5,
          "nama": "Zakat"
        },
        {
          "no": 3.6,
          "nama": "Zakat Fitrah"
        },
        {
          "no": 3.7,
          "nama": "Haji"
        }
      ]
    },
    {
      "no": 4,
      "nama": "BAB III AKHLAK",
      "sub": [
        {
          "no": 4.1,
          "nama": "Termasuk Adab adalah Ketaatan Hati",
        },
        {
          "no": 4.2,
          "nama": "Termasuk Adab adalah menghindarkan Anggota Tubuh dari Maksiat"
        },
        {
          "no": 4.3,
          "nama": "Anggota Tubuh dari Maksiat"
        }
      ]
    },
    {
      "no": 5,
      "nama": "DO'A QUNUT SYAFI'IYYAH",
    },
    {
      "no": 6,
      "nama": "CATATAN AKHIR/END NOTES",
    }
  ]

  ngOnInit() {
  }

}
