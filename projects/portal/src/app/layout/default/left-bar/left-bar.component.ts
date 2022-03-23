import {
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Output,
} from '@angular/core'
import { FormControl } from '@angular/forms'
import { OverlayContainer } from '@angular/cdk/overlay'

@Component({
  selector: 'app-left-bar',
  templateUrl: './left-bar.component.html',
  styleUrls: ['./left-bar.component.scss'],
})
export class LeftBarComponent implements OnInit {
  @Output()
  emitCloseLeftBar: EventEmitter<string> = new EventEmitter()

  @HostBinding('class') className = ''

  toggleControl = new FormControl(false)

  constructor(private overlay: OverlayContainer) {}

  ngOnInit(): void {
    this.toggleThemes()
  }

  toggleThemes(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'dark-theme'
      const lightClassName = 'light-theme'

      this.className = darkMode ? darkClassName : lightClassName

      if (darkMode) {
        this.switchClass(darkClassName, lightClassName)
      } else {
        this.switchClass(lightClassName, darkClassName)
      }
    })
  }

  switchClass(add: string, remove: string): void {
    this.overlay.getContainerElement().classList.add(add)
    this.overlay.getContainerElement().classList.remove(remove)
    document.body.classList.add(add)
    document.body.classList.remove(remove)
  }

  closeLeftBar(): void {
    this.emitCloseLeftBar.emit('closeLeftBar')
  }
}
