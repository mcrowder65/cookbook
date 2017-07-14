export const toggleCheck = () => {
  return {
    type: 'TOGGLE_CHECK'
  };
};

export const incNumber = () => {
  return {
    type: 'INC_NUMBER'
  };
};

export const decNumber = () => {
  return {
    type: 'DEC_NUMBER'
  };
};

export const removeRecipe = (id) => {
  return {
    type: 'REMOVE_RECIPE',
    id
  };
};

export const updateRecipe = (oldTitle, title, ingredients) => {
  return {
    type: 'UPDATE_RECIPE',
    oldTitle,
    title,
    ingredients
  };
};

export const setEditingRecipe = (title, ingredients) => {
  return {
    type: 'SET_EDITING_RECIPE',
    title,
    ingredients
  };
};

export const setAddingNewRecipe = (addingNewRecipe) => {
  return {
    type: 'SET_ADDING_NEW_RECIPE',
    addingNewRecipe
  };
};

export const addRecipe = (title, ingredients) => {
  return {
    type: 'ADD_RECIPE',
    title,
    ingredients
  };
};

