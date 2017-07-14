import {combineReducers} from 'redux';
import * as actionTypes from '../actions/action-types';


const recipes = (store, action) => {
  if (action.type === actionTypes.REMOVE_RECIPE) {
    return store.filter((recipe) => {
      return recipe.title !== action.id;
    });
  }
  if (action.type === actionTypes.UPDATE_RECIPE) {
    return store.map((recipe) => {
      return recipe.title === action.oldTitle ? {
        title: action.title,
        ingredients: action.ingredients
      } : recipe;
    });
  }

  if (action.type === actionTypes.ADD_RECIPE) {
    return [
      ...store, {
        title: action.title,
        ingredients: action.ingredients
      }
    ];
  }
  return store || {recipes: null};
};

const editingRecipe = (store, action) => {
  if (action.type === actionTypes.SET_EDITING_RECIPE) {
    return {
      title: action.title,
      ingredients: action.ingredients
    };
  }
  return store || {
      title: null,
      ingredients: []
    };
};

const addingNewRecipe = (store, action) => {
  if (action.type === actionTypes.SET_ADDING_NEW_RECIPE) {
    return action.addingNewRecipe;
  }
  return store || false;
};

const checkBox = (store, action) => {
  if (action.type === actionTypes.TOGGLE_CHECK) {
    return {
      checked: !store.checked
    };
  }

  return store || {checked: false};
};

const number = (store, action) => {
  if (action.type === actionTypes.INC_NUMBER) {
    return {
      value: store.value + 1
    };
  } else if (action.type === actionTypes.DEC_NUMBER) {
    return {
      value: store.value - 1
    };
  }
  return store || {value: 0};
};


export default combineReducers({
  checkBox,
  number,
  recipes,
  editingRecipe,
  addingNewRecipe
});
