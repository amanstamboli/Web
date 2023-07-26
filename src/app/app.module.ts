import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlpacaComponent } from './ImageGenerator/alpaca/alpaca.component';
import { CustomizetabComponent } from './ImageGenerator/customizetab/customizetab.component';
import { GeneratorComponent } from './ImageGenerator/generator/generator.component';
import { NavigationBarComponent } from './utils/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlpacaComponent,
    CustomizetabComponent,
    GeneratorComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
