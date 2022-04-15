import { APP_BASE_HREF } from '@angular/common'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppTranslateModule } from './app-translate.module'
import { AppComponent } from './app.component'
import { DefaultModule } from './layout/default/default.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    AppTranslateModule,
    BrowserModule,
    BrowserAnimationsModule,
    DefaultModule,
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
