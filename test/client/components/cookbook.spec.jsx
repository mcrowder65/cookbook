import React from 'react';
import {createStore} from 'redux';
import rootReducer from 'client/reducers';
import {mount, ReactWrapper} from 'enzyme';
import {Provider} from 'react-redux';

import Cookbook from 'client/components/cookbook';

describe('Cookbook', () => {
  let container;
  let store;

  const initialState = {
    recipes: [{
      title: 'Tonkotsu Ramen',
      ingredients: ['Onions', 'Soy Sauce', 'Eggs', 'Pork', 'Sake', 'Mirin', 'Rice']
    }, {
      title: 'Saag Paneer',
      ingredients: ['Spinach', 'Onion', 'Ginger',
        'Garlic', 'Vegetable Oil', 'Milk', 'Lemon Juice', 'Garam Masala']
    }],
    editingRecipe: {
      title: null,
      ingredients: []
    },
    addingNewRecipe: false
  };

  beforeEach(() => {
    store = createStore(rootReducer, initialState);
    container = mount(
      <Provider store={store}>
        <Cookbook/>
      </Provider>
    );
  });

  it('Test mapStateToProps', () => {
    expect(container).to.be.truthy;
    expect(container.find('Cookbook').prop('recipes')).eql(initialState.recipes);
    expect(container.find('Cookbook').prop('addingNewRecipe')).eql(
      initialState.addingNewRecipe);
    expect(container.find('Cookbook').prop('editingRecipe'))
      .to.equal(initialState.editingRecipe);
  });

  it('Test action creators', () => {
    container.find('Cookbook').prop('setAddingNewRecipe')(true);
    expect(container.find('Cookbook').prop('addingNewRecipe')).to.equal(true);
    container.find('Cookbook').prop('setAddingNewRecipe')(false);
    expect(container.find('Cookbook').prop('addingNewRecipe')).to.equal(false);


  });

  it('Test removing recipe', () => {
    container.find('Cookbook').prop('removeRecipe')(initialState.recipes[0].title);
    expect(container.find('Cookbook').prop('recipes')[0].title)
      .to.not.equal(initialState.recipes[0].title);
    expect(container.find('Cookbook').prop('recipes')[0].title)
      .to.equal(initialState.recipes[1].title);

    container.find('Cookbook').prop('removeRecipe')(initialState.recipes[1].title);
    expect(container.find('Cookbook').prop('recipes').length).to.equal(0);
  });

  it('Test editing', () => {
    const newTitle = 'chicken sandwich';
    const newIngredients = ['chicken', 'bread'];
    container.find('Cookbook').prop('setEditingRecipe')(
      initialState.recipes[0].title, initialState.recipes[0].ingredients);
    container.find('Cookbook').prop('updateRecipe')(
      initialState.recipes[0].title, newTitle, newIngredients);
    /* eslint no-console:"warn"*/
    expect(container.find('Cookbook').prop('recipes')[0].title).to.equal(newTitle);
    expect(container.find('Cookbook').prop('recipes')[0].ingredients).to.equal(newIngredients);

    container.find('Cookbook').prop('stopEditing')();
    expect(container.find('Cookbook').prop('editingRecipe').title).to.equal(null);
    expect(container.find('Cookbook').prop('editingRecipe').ingredients.length).to.equal(0);


  });

  it('Test adding', () => {
    const newTitle = 'chicken sandwich';
    const newIngredients = ['chicken', 'bread'];
    container.find('Cookbook').prop('setAddingNewRecipe')(true);
    expect(container.find('Cookbook').prop('addingNewRecipe')).to.be.true;

    container.find('Cookbook').prop('addRecipe')(newTitle, newIngredients);

    expect(container.find('Cookbook').prop('addingNewRecipe')).to.be.false;
    const cookbookRecipes = container.find('Cookbook').prop('recipes');
    expect(cookbookRecipes[cookbookRecipes.length - 1].title).to.equal(newTitle);
    expect(cookbookRecipes[cookbookRecipes.length - 1].ingredients).to.equal(newIngredients);
  });

  it('Testing toggling adding', () => {
    container.find('Cookbook').find('#add-recipe-button').simulate('click');
    expect(container.find('Cookbook').prop('addingNewRecipe')).to.be.true;
    const modal = container.find('Cookbook')
      .find('AddRecipeForm').find('Modal');
    const wrappedPortalNode = new ReactWrapper(
      modal.node.portal, true
    );
    wrappedPortalNode.find('#cancel-add').simulate('click');
    expect(container.find('Cookbook').prop('addingNewRecipe')).to.be.false;
  });

  it('Test delete recipe', () => {
    expect(container.find('Cookbook').find('RecipeList')).to.be.truthy;
    expect(container.find('Cookbook').find('RecipeList')
      .find('RecipeDetail').length).to.equal(initialState.recipes.length);
    container.find('Cookbook').find('RecipeList')
      .find('RecipeDetail').at(0).find('#delete-recipe').simulate('click');
    expect(container.find('Cookbook').prop('recipes').length).to.equal(1);

    container.find('Cookbook').find('RecipeList')
      .find('RecipeDetail').at(0).find('#delete-recipe').simulate('click');
    expect(container.find('Cookbook').prop('recipes').length).to.equal(0);

  });

  it('Test edit recipe', () => {
    expect(container.find('Cookbook').find('RecipeList')).to.be.truthy;
    container.find('Cookbook').find('RecipeList')
      .find('RecipeDetail').at(0).find('#edit-recipe').simulate('click');
    expect(container.find('Cookbook').prop('editingRecipe').title).to.be.truthy;
    expect(container.find('Cookbook').prop('editingRecipe').ingredients.length > 0).to.be.true;
    const modal = container.find('Cookbook')
      .find('EditRecipeForm').find('Modal');
    const wrappedPortalNode = new ReactWrapper(
      modal.node.portal, true
    );
    wrappedPortalNode.find('#done-button').simulate('click');
    expect(container.find('Cookbook').prop('editingRecipe').title).to.be.null;
    expect(container.find('Cookbook').prop('editingRecipe').ingredients.length === 0).to.be.true;

  });
});

