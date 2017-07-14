import * as actionTypes from './action-types';
export const toggleCheck = () => {
  return {
    type: actionTypes.TOGGLE_CHECK
  };
};

export const incNumber = () => {
  return {
    type: actionTypes.INC_NUMBER
  };
};

export const decNumber = () => {
  return {
    type: actionTypes.DEC_NUMBER
  };
};

export const removeRecipe = (id) => {
  return {
    type: actionTypes.REMOVE_RECIPE,
    id
  };
};

export const updateRecipe = (oldTitle, title, ingredients) => {
  return {
    type: actionTypes.UPDATE_RECIPE,
    oldTitle,
    title,
    ingredients
  };
};

export const setEditingRecipe = (title, ingredients) => {
  return {
    type: actionTypes.SET_EDITING_RECIPE,
    title,
    ingredients
  };
};

export const setAddingNewRecipe = (addingNewRecipe) => {
  return {
    type: actionTypes.SET_ADDING_NEW_RECIPE,
    addingNewRecipe
  };
};

export const addRecipe = (title, ingredients) => {
  return {
    type: actionTypes.ADD_RECIPE,
    title,
    ingredients
  };
};

