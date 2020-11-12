import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductRetrieveComponent } from './product-retrieve/product-retrieve.component';
import { ProductRetrieveByIdComponent } from './product-retrieve-by-id/product-retrieve-by-id.component';
import { ProductStoreComponent } from './product-store/product-store.component';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductRetrieveComponent,
    ProductRetrieveByIdComponent,
    ProductStoreComponent,
    ProductDeleteComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
