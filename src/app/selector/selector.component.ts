import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-selector',
  standalone: true,
  imports: [],
  templateUrl: './selector.component.html',
  styleUrl: './selector.component.css'
})
export class SelectorComponent {

  @ViewChild('contentByClass') contentByClass: ElementRef | undefined;
  @ViewChild('contentByTag') contentByTag: ElementRef | undefined;

  loadContent() {
    // Directly include the JSON data in the TypeScript code
    const jsonData = {
      content: 'Checking all selectors in js'
    };

    this.displayData(jsonData);
  }

  displayData(data: any) {

    document.getElementById('content')!.innerHTML = '<p>' + data.content + '</p>';

    if (this.contentByClass) {
      this.contentByClass.nativeElement.innerHTML = '<p>' + data.content + '</p>';
    }

    if (this.contentByTag) {
      const elements = this.contentByTag.nativeElement.getElementsByTagName('p');
      if (elements.length > 0) {
        elements[0].innerHTML = data.content;
      }
    }
  }

}