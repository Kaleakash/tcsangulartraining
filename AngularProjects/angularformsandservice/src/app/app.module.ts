import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplaterefComponent } from './templateref/templateref.component';
import { TdformComponent } from './tdform/tdform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdformComponent } from './mdform/mdform.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplaterefComponent,
    TdformComponent,
    MdformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
