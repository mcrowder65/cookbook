import React from 'react';
import ReactDOM from 'react-dom';
import AddRecipeForm from 'client/components/add-recipe-form';
const _addRecipe = (title, ingredients) => {
  return `${title} ${ingredients}`;
};
describe('AddRecipeForm', () => {
  let component;
  let container;

  beforeEach(() => {
    container = document.createElement('div');
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(container);
  });

  it('Test render', () => {

    component = ReactDOM.render(
      <AddRecipeForm />,
      container
    );

    expect(component).to.not.be.false;

  });

  it('Test setters', () => {
    component = ReactDOM.render(
      <AddRecipeForm/>,
      container
    );

    component.updateTitle({
      target: {
        value: 'hello!'
      }
    });
    expect(component.state.title).to.equal('hello!');
    component.updateIngredients({
      target: {
        value: 'hello,world'
      }
    });
    expect(component.state.ingredients).to.equal('hello,world');


    component.componentWillReceiveProps();
    expect(component.state.title).to.equal('');
    expect(component.state.ingredients).to.equal('');
  });

  it('Test adding', () => {

    component = ReactDOM.render(
      <AddRecipeForm _addRecipe={_addRecipe}/>,
      container
    );

    component.updateTitle({
      target: {
        value: 'hello!'
      }
    });

    expect(component.state.title).to.equal('hello!');
    component.addRecipe(); // shouldn't work
    expect(component.state.title).to.equal('hello!');

    component.updateIngredients({
      target: {
        value: 'hello,world'
      }
    });
    component.addRecipe(); // should work
    expect(component.state.title).to.equal('hello!');

  });
});

