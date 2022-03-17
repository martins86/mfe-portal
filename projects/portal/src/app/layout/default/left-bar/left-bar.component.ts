import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
})
export class LeftBarComponent {
  @Output()
  emitCloseLeftBar: EventEmitter<string> = new EventEmitter()

  closeLeftBar(): void {
    this.emitCloseLeftBar.emit('closeLeftBar')
  }
}
