import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaiementComponent } from './paiement/paiement.component';
import { FormsModule } from '@angular/forms';
import { SupprimerInvoiceComponent } from './supprimer-invoice/supprimer-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    PaiementComponent,
    SupprimerInvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
