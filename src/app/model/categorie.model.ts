export class Categorie {
  idCat!: number; // ou idCat? : number;
  nomCat!: string;
}

export interface Categorie {
  idCat: number;
  nomCat: string;
  descriptionCat?: string; // descriptionCat est ajouté si nécessaire
}

// export interface CategoriesResponse {
//   _embedded: {
//     categories: Categorie[];
//   };
// }
