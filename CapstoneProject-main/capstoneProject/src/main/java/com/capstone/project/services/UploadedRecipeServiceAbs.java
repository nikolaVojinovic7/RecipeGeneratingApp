package com.capstone.project.services;

import com.capstone.project.model.Ingredient;
import com.capstone.project.model.UploadedRecipe;

public interface UploadedRecipeServiceAbs extends CrudService<UploadedRecipe, Long>{
    UploadedRecipe save(UploadedRecipe uploadedRecipe);

    UploadedRecipe addIngredientToRecipe(Ingredient ingredient, UploadedRecipe uploadedRecipe);
}
