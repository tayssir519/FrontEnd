import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaiementComponent } from './paiement/paiement.component';
import { SupprimerInvoiceComponent } from './supprimer-invoice/supprimer-invoice.component';

const routes: Routes = [
  { path: '', component: PaiementComponent },
  { path: 'supprimer-facture', component: SupprimerInvoiceComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
