import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements AfterViewInit {
  @Output()
  emitToggleLeftBar: EventEmitter<string> = new EventEmitter()

  ngAfterViewInit(): void {
    this.toggleBtnAnimate()
  }

  toggleLeftBar(): void {
    this.emitToggleLeftBar.emit('toggleLeftBar')
  }

  toggleBtnAnimate(): void {
    const menuToggle = document.querySelector('.toggle') as HTMLElement

    menuToggle.onclick = () => {
      menuToggle.classList.toggle('active')
    }
  }
}
