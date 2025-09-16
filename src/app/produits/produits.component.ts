import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit.service';
import { RouterLink } from '@angular/router';
import { Categorie } from '../model/categorie.model';

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
  constructor(private produitService: ProduitService) {
    this.categories = [
      { idCat: 2, nomCat: 'Imprimante', descriptionCat: 'non description' }, // id et name respectent l'interface
      { idCat: 3, nomCat: 'Ordinateur', descriptionCat: 'non description' },
    ];
    /* this.produits = [
      {idProduit : 1,  nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
      {idProduit : 2,  nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
      {idProduit : 3,  nomProduit :"Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
            ];  */
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
