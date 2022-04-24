import {
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Output,
} from '@angular/core'
import { FormControl } from '@angular/forms'
import { OverlayContainer } from '@angular/cdk/overlay'

import { ThemeService } from './../../../shared/services/service-theme/theme.service'
import { ConstantsThemes } from './../../../utils/constants'

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

  constructor(
    private overlay: OverlayContainer,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    this.toggleThemes()
  }

  toggleThemes(): void {
    this.themeService.toggleThemes(
      this.toggleControl,
      this.overlay.getContainerElement()
    )

    const currentTheme = this.themeService.getThemeSession()
    const isDark = currentTheme === ConstantsThemes.darkClassName
    this.className = currentTheme
    this.toggleControl.setValue(isDark)
  }

  closeLeftBar(): void {
    this.emitCloseLeftBar.emit('closeLeftBar')
  }
}
