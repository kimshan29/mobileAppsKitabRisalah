import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.page.html',
  styleUrls: ['./cover.page.scss'],
})
export class CoverPage implements OnInit {

  constructor(private document: DocumentViewer) { }

  ngOnInit() {
  }


  OpenPdf() {
    console.log("Test");

    const options: DocumentViewerOptions = {
      title: 'Cover'
    }
    this.document.viewDocument('assets/Cover-Pengantar.pdf', 'application/pdf', options)
  }
}
