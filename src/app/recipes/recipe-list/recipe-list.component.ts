import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('A Test Recipe','This is simply a test','https://thefoodfairy.files.wordpress.com/2012/09/dsc_0410.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://thefoodfairy.files.wordpress.com/2012/09/dsc_0410.jpg'),
    new Recipe('A Test Recipe','This is simply a test','https://thefoodfairy.files.wordpress.com/2012/09/dsc_0410.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
