import axios from 'axios';

const RECIPE_API_BASE_URL = "http://10.0.2.2:8087/api/recipe";

class RecipeService {

    getRecipes(){
        return axios.get(RECIPE_API_BASE_URL + '/' + "allRecipes");
    }

    createRecipe(user){
        return axios.post(RECIPE_API_BASE_URL + '/' + "createRecipe", recipe);
    }

    getRecipeById(recipeId){
        return axios.get(RECIPE_API_BASE_URL + '/' + 'getRecipe' + '/' + recipeId);
    }

    updateRecipe(recipe, recipeId){
        return axios.put(RECIPE_API_BASE_URL + '/' + 'updateRecipe' + '/' + recipeId, recipe);
    }

    deleteRecipe(recipeId){
        return axios.delete(RECIPE_API_BASE_URL + '/' + 'deleteRecipe' + '/' + recipeId);
    }
}

export default new RecipeService()