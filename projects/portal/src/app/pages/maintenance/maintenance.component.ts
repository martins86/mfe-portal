import { Component } from '@angular/core'

@Component({
  selector: 'app-maintenance',
  template: `<div
    class="container mt-4 mb-4 d-flex align-items-end flex-column justify-content-end"
    style="height: calc(100% - 48px)"
  >
    <div class="row">
      <div class="col d-flex align-items-end">
        <p class="text-end" style="color: var(--text-accent-color)">
          o site está em modo manutenção e retornara em breve!
        </p>
      </div>
    </div>
  </div>`,
})
export class MaintenanceComponent {}
