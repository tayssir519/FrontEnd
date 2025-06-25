import { Component } from '@angular/core';
import { PaiementService } from '../services/paiement.service';

@Component({
  selector: 'app-supprimer-invoice',
  templateUrl: './supprimer-invoice.component.html',
  styleUrls: ['./supprimer-invoice.component.css']
})
export class SupprimerInvoiceComponent {
  invoiceId!: number;
  message = '';

  constructor(private paiementService: PaiementService) {}

  supprimerFacture() {
    if (!this.invoiceId) {
      this.message = '❌ Veuillez entrer un ID de facture valide.';
      return;
    }

    this.paiementService.deleteInvoice(this.invoiceId).subscribe({
      next: () => this.message = '✅ Facture supprimée avec succès.',
      error: () => this.message = '❌ Erreur lors de la suppression.'
    });
  }
}
