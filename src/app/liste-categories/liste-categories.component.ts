import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { ProduitService } from '../services/produit.service';
import { CommonModule } from '@angular/common';
import { UpdateCategorieComponent } from '../update-categorie/update-categorie.component';

@Component({
  selector: 'app-liste-categories',
  imports: [CommonModule, UpdateCategorieComponent],
  templateUrl: './liste-categories.component.html',
  styles: ``,
})
export class ListeCategoriesComponent implements OnInit {
  categories!: Categorie[];
  updatedCat: Categorie = { idCat: 0, nomCat: '' };
  ajout: boolean = true;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats;
      console.log(cats);
    });
  }

  categorieUpdated(cat: Categorie) {
    console.log('Cat updated event', cat);
    if (this.ajout) {
      this.produitService
        .ajouterCategorie(cat)
        .subscribe(() => this.chargerCategories());
    } else {
      this.produitService.updateCategorie(cat).subscribe(() => {
        this.chargerCategories();
        this.ajout = true; // reset le mode formulaire
        this.updatedCat = { idCat: 0, nomCat: '' };
      });
    }
  }

  chargerCategories() {
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats;
      console.log(cats);
    });
  }

  updateCat(cat: Categorie) {
    this.updatedCat = { ...cat }; // fait une copie pour éviter les effets de bord
    this.ajout = false;
  }
}
