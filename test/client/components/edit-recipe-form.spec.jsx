import React from 'react';
import {shallow} from 'enzyme';

import EditRecipeForm from 'client/components/edit-recipe-form';

const _updateRecipe = (title, newTitle, ingredients) => {
  return `${title} ${newTitle} ${ingredients}`;
};
describe('EditRecipeForm', () => {
  let component;
  beforeEach(() => {
    component = shallow(
      <EditRecipeForm updateRecipe={_updateRecipe}/>
    );
  });


  it('Test render', () => {
    expect(component).to.not.be.false;
  });

  it('Test setters', () => {
    const newTitle = 'chicken sandwich';
    component.instance().updateTitle({
      target: {
        value: newTitle
      }
    });
    expect(component.instance().state.title).to.equal(newTitle);

    const newIngredients = 'chicken,bread';
    component.instance().updateIngredients({
      target: {
        value: newIngredients
      }
    });
    expect(component.instance().state.ingredients).to.equal(newIngredients);
  });
});

