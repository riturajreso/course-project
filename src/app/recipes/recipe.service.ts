import { Recipe } from './recipe.modal';

export class RecipeService {
	
private	recipes: Recipe[] = [
	new Recipe('Chiken 65','Description about recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nJw9Bp8CeukwrnplKwtPEmg8G9xcIKfLc_YZSyf9XDO1Kp4M2A'),
	new Recipe('Mutton Haleem','Description about recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2nJw9Bp8CeukwrnplKwtPEmg8G9xcIKfLc_YZSyf9XDO1Kp4M2A')
];

getRecipe()
{
	return this.recipes.slice();
}


}