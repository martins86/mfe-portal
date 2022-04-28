import { Component } from '@angular/core'

@Component({
  selector: 'app-not-found',
  template: `<div
    class="container mt-4 mb-4 d-flex align-items-end flex-column justify-content-end"
    style="height: calc(100% - 48px)"
  >
    <div class="row">
      <div class="col d-flex align-items-end">
        <p class="text-end" style="color: var(--text-accent-color)">
          {{ 'pages.not_found.text_error_404' | translate }}
        </p>
      </div>
    </div>
  </div>`,
})
export class NotFoundComponent {}
