import { Injectable } from '@angular/core';
import { Recipe } from '../models/library.mode';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipeList: Recipe[] = [
    {
      name: 'Pancakes',
      price: '250',
      star: '★★★☆☆',
      image:'https://www.inspiredtaste.net/wp-content/uploads/2024/03/Easy-Fluffy-Pancakes-Recipe-Video.jpg',

    },
    {
      name: 'Lemon Eton Mess',
      price: '300',
      star: '★★★★☆',
      image: 'https://img.taste.com.au/UOkNsfUb/w720-h480-cfill-q80/taste/2020/08/5-ingredient-lemon-eton-mess-164715-2.jpg',
    },
    {
      name: 'Choc-Crackle Peanut \n' +
        'Butter Cups',
      price: '150',
      star: '★☆☆☆☆',
      image:
        'https://img.taste.com.au/0kUoWD6m/taste/2017/08/tca0917_cover_crackle_1980x1320-129299-1.jpg',
    },
    {
      name: 'Pancakes',
      price: '250',
      star: '★★☆☆☆',
      image:'https://www.inspiredtaste.net/wp-content/uploads/2024/03/Easy-Fluffy-Pancakes-Recipe-Video.jpg',

    },
    {
      name: 'Lemon Eton Mess',
      price: '',
      star: '★★★☆☆',
      image: 'https://img.taste.com.au/UOkNsfUb/w720-h480-cfill-q80/taste/2020/08/5-ingredient-lemon-eton-mess-164715-2.jpg',
    },


  ];

  getRecipe() {
    return this.recipeList;
  }
}
