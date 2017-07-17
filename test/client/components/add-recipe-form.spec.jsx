import React from 'react';
import {shallow} from 'enzyme';

import AddRecipeForm from 'client/components/add-recipe-form';

const _addRecipe = (title, ingredients) => {
  return `${title} ${ingredients}`;
};

describe('AddRecipeForm', () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <AddRecipeForm _addRecipe={_addRecipe}/>
    );
  });

  it('Test render', () => {
    expect(component).to.not.be.false;

  });

  it('Test setters', () => {
    component.instance().updateTitle({
      target: {
        value: 'hello!'
      }
    });
    expect(component.instance().state.title).to.equal('hello!');
    component.instance().updateIngredients({
      target: {
        value: 'hello,world'
      }
    });
    expect(component.instance().state.ingredients).to.equal('hello,world');


    component.instance().componentWillReceiveProps();
    expect(component.instance().state.title).to.equal('');
    expect(component.instance().state.ingredients).to.equal('');
  });

  it('Test adding', () => {

    component.instance().updateTitle({
      target: {
        value: 'hello!'
      }
    });

    expect(component.instance().state.title).to.equal('hello!');
    component.instance().addRecipe(); // shouldn't work
    expect(component.instance().state.title).to.equal('hello!');

    component.instance().updateIngredients({
      target: {
        value: 'hello,world'
      }
    });
    component.instance().addRecipe(); // should work
    expect(component.instance().state.title).to.equal('hello!');

  });
});

