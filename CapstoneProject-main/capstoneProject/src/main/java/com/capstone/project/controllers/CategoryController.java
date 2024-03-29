package com.capstone.project.controllers;


import com.capstone.project.exception.ResourceNotFoundException;
import com.capstone.project.model.Category;
import com.capstone.project.services.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@RestController
@RequestMapping("api/category")
public class CategoryController {
    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    //get all users api
    @GetMapping("allCategories")
    public Set<Category> allCategories(){
        return this.categoryService.findAll();
    }

    // get user by id rest api
    @GetMapping("/findCategories/{name}")
    public Category getCategoryByName(@PathVariable String name) {
        Category category = categoryService.findByName(name);
        if(category == null){
            throw new ResourceNotFoundException("There is no category with name" + name);
        }
        return category;
    }

    // create user rest api
    @PostMapping("/createCategory")
    public Category createCategory(@RequestBody Category category) {
        return categoryService.save(category);
    }

    // update employee rest api
    @PutMapping("/updateCategory/{name}")
    public Category updateCategory(@PathVariable String name, @RequestBody Category categoryDetails) {

        Category category = categoryService.findByName(name);
        if(category == null){
            throw new ResourceNotFoundException("There is no category with name" + name);
        }
        category.setName(categoryDetails.getName());
        return categoryService.save(category);
    }

    // delete employee rest api
    @DeleteMapping("/deleteCategory/{name}")
    public Map< String, Boolean > deleteCategory(@PathVariable String name) {
        Category category = categoryService.findByName(name);
        if(category == null){
            throw new ResourceNotFoundException("There is no category with name" + name);
        }
        categoryService.delete(category);
        Map < String, Boolean > response = new HashMap< >();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
