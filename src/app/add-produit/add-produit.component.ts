import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-add-produit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css',
})
export class AddProduitComponent implements OnInit {
  newProduit: Produit = {
    idProduit: 0,
    nomProduit: '',
    prixProduit: 0,
    dateCreation: new Date(),
    categorie: { idCat: 0, nomCat: '' }, // valeur par défaut
  };

  categories!: Categorie[];
  newCategorie!: Categorie; // ajout
  newIdCat!: number;
  message!: string;

  constructor(private produitService: ProduitService, private router: Router) {}

  ngOnInit(): void {
    // this.categories = this.produitService.listeCategories();
  }

  addProduit() {
    // console.log(this.newProduit);
    // this.newCategorie = this.produitService.consulterCategorie(this.newIdCat);
    this.newProduit.categorie = this.newCategorie;
    this.produitService.ajouterProduit(this.newProduit);
    this.message =
      'Produit ' + this.newProduit.nomProduit + ' ajouté avec succès !';

    // Redirection automatique vers la liste
    this.router.navigate(['/produits']);
  }
}
