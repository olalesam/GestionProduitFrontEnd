import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { CommonModule } from '@angular/common';
import { Categorie } from '../model/categorie.model';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../services/produit.service';

@Component({
  selector: 'app-recherche-par-categorie',
  imports: [FormsModule, CommonModule],
  templateUrl: './recherche-par-categorie.component.html',
  styles: ``,
})
export class RechercheParCategorieComponent {
  categories: Categorie[] = []; // Tableau de catégories
  produits: Produit[] = []; // Changer de 'produit' à 'produits' pour un tableau
  IdCategorie!: number;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    // Appel au service qui retourne directement un tableau de Categorie[]
    this.produitService.listeCategories().subscribe(
      (cats: Categorie[]) => {
        this.categories = cats; // Assigner directement le tableau de catégories
        console.log(this.categories); // Vérifier la liste des catégories
      },
      (error) => {
        console.error('Erreur lors de la récupération des catégories :', error);
      }
    );
  }

  onChange() {
    this.produitService
      .rechercherParCategorie(this.IdCategorie)
      .subscribe((prods) => {
        this.produits = prods;
      });
  }
}
