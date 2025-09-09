import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Produit } from '../model/produit.model';

@Component({
  selector: 'app-add-produit',
  imports: [FormsModule],
  templateUrl: './add-produit.component.html',
  styleUrl: './add-produit.component.css',
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();

  ngOnInit(): void {}

  constructor() {}

  addProduit() {
    console.log(this.newProduit);
  }
}
