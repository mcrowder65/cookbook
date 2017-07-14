import React from 'react';
import ReactDOM from 'react-dom';
import EditRecipeForm from 'client/components/edit-recipe-form';
const _updateRecipe = (title, newTitle, ingredients) => {
  return `${title} ${newTitle} ${ingredients}`;
};
describe('EditRecipeForm', () => {
  let component;
  let container;
  //TODO add initial here
  beforeEach(() => {
    container = document.createElement('div');
    //TODO set updateRecipe
    component = ReactDOM.render(
      <EditRecipeForm updateRecipe={_updateRecipe}/>,
      container
    );
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it('Test render', () => {
    expect(component).to.not.be.false;
  });

  it('Test setters', () => {
    const newTitle = 'chicken sandwich';
    component.updateTitle({
      target: {
        value: newTitle
      }
    });
    expect(component.state.title).to.equal(newTitle);

    const newIngredients = 'chicken,bread';
    component.updateIngredients({
      target: {
        value: newIngredients
      }
    });
    expect(component.state.ingredients).to.equal(newIngredients);
  });
});

