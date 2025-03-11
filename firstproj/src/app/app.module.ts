import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreuiModule } from '@coreui/angular'; // Import CoreUI module

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreuiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
