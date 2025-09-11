import { Component } from '@angular/core';
import { Produit } from '../model/produit.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  imports: [FormsModule, CommonModule],
  templateUrl: './update-produit.component.html',
  styles: ``,
})
export class UpdateProduitComponent {
  currentProduit = new Produit();
  categories!: Categorie[];
  updatedCatId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit() {
    // this.categories = this.produitService.listeCategories();
    this.currentProduit = this.produitService.consulterProduit(
      this.activatedRoute.snapshot.params['id']
    );
    this.updatedCatId = this.currentProduit.categorie.idCat;
    //console.log(this.currentProduit);
  }

  updateProduit() {
    // this.currentProduit.categorie = this.produitService.consulterCategorie(
    //   this.updatedCatId
    // );
    this.produitService.updateProduit(this.currentProduit);
    this.router.navigate(['produits']);
  }
}
