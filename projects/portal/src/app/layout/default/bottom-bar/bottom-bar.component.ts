import { Component } from '@angular/core'

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
})
export class BottomBarComponent {
  currentYear: string
  constructor() {
    this.currentYear = new Date().getFullYear().toString()
  }
}
