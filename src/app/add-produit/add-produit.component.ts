import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css',
})
export class AddProduitComponent {
  newProduit: Produit = {
    idProduit: 0,
    nomProduit: '',
    prixProduit: 0,
    dateCreation: new Date(),
  };

  message!: string;

  constructor(private produitService: ProduitService, private router: Router) {}

  addProduit() {
    // console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    this.message =
      'Produit ' + this.newProduit.nomProduit + ' ajouté avec succès !';

    // Redirection automatique vers la liste
    this.router.navigate(['/produits']);
  }
}
