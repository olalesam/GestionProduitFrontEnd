import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-categorie',
  imports: [FormsModule],
  templateUrl: './update-categorie.component.html',
  styles: ``,
})
export class UpdateCategorieComponent {
  @Input()
  categorie!: Categorie;

  @Output()
  categorieUpdated = new EventEmitter<Categorie>();

  @Input()
  ajout!: boolean;

  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateCategorie ', this.categorie);
  }

  saveCategorie() {
    if (this.ajout) {
      this.categorieUpdated.emit(this.categorie);
    } else {
      this.categorieUpdated.emit(this.categorie); // même chose ici
    }
  }
}
