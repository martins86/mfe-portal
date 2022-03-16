import { AfterViewInit, Component } from '@angular/core'

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.toggleBtnAnimate()
  }

  toggleBtnAnimate(): void {
    const menuToggle = document.querySelector('.toggle') as HTMLElement

    menuToggle.onclick = () => {
      menuToggle.classList.toggle('active')
    }
  }
}
