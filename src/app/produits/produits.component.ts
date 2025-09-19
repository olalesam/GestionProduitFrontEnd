import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { RouterLink } from '@angular/router';
import { Categorie } from '../model/categorie.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-produits',
  standalone: true,

  imports: [CommonModule, RouterLink],
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.css',
})
export class ProduitsComponent implements OnInit {
  categories: Categorie[];
  produits: Produit[] = []; //un tableau de Produit
  constructor(
    private produitService: ProduitService,
    public authService: AuthService
  ) {
    this.categories = [
      { idCat: 2, nomCat: 'Imprimante', descriptionCat: 'non description' }, // id et name respectent l'interface
      { idCat: 3, nomCat: 'Ordinateur', descriptionCat: 'non description' },
    ];
  }

  ngOnInit(): void {
    //this.produits = this.produitService.listeProduits();
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.listeProduits().subscribe((prods) => {
      this.produits = prods;
    });
  }
  supprimerProduit(p: Produit) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf)
      this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
        console.log('produit supprimé');
        this.chargerProduits();
      });
  }

  listeCategories(): Categorie[] {
    return this.categories;
  }

  consulterCategorie(id: number): Categorie {
    return this.categories.find((cat) => cat.idCat == id)!;
  }
}
