import {createStore} from 'redux';

import rootReducer from '../../../src/client/reducers';
import * as actions from '../../../src/client/actions';

describe('reducer test', () => {
  const initialState = {
    checkBox: {checked: false},
    number: {value: 999},
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

  let store;
  beforeEach(() => {
    store = createStore(rootReducer, initialState);
  });

  /*eslint max-statements: "off" */
  it('test numbers', () => {
    let number = 0;
    store.dispatch(actions.incNumber());
    number++;
    expect(store.getState().number.value).equals(initialState.number.value + number);

    store.dispatch(actions.decNumber());
    number--;
    expect(store.getState().number.value).equals(initialState.number.value + number);

    store.dispatch(actions.decNumber());
    number--;
    expect(store.getState().number.value).equals(initialState.number.value + number);

    store.dispatch(actions.decNumber());
    number--;
    expect(store.getState().number.value).equals(initialState.number.value + number);

    store.dispatch(actions.decNumber());
    number--;
    expect(store.getState().number.value).equals(initialState.number.value + number);

    store.dispatch(actions.decNumber());
    number--;
    expect(store.getState().number.value).equals(initialState.number.value + number);

    store.dispatch(actions.incNumber());
    number++;
    expect(store.getState().number.value).equals(initialState.number.value + number);

    store.dispatch(actions.decNumber());
    number--;
    expect(store.getState().number.value).equals(initialState.number.value + number);
  });

  it('test recipes', () => {
    store.dispatch(actions.removeRecipe(initialState.recipes[0].title));
    expect(store.getState().recipes[0]).not.eql(initialState.recipes[0]);

    store.dispatch(actions.removeRecipe(initialState.recipes[1].title));
    expect(store.getState().recipes).eql([]);
    const newRecipe = {
      title: 'chicken sandwich',
      ingredients: ['chicken', 'bread']
    };
    store.dispatch(actions.addRecipe(newRecipe.title, newRecipe.ingredients));
    expect(store.getState().recipes.length).equals(1);
    expect(store.getState().recipes[store.getState().recipes.length - 1]).eql(newRecipe);

    const updatedRecipe = {
      ...newRecipe,
      title: 'chicken burger'
    };
    store.dispatch(actions.updateRecipe(newRecipe.title,
      updatedRecipe.title, updatedRecipe.ingredients));
    expect(store.getState().recipes[0]).eql(updatedRecipe);
  });

  it('test editing recipe', () => {
    store.dispatch(actions.setEditingRecipe(initialState.recipes[0].title,
      initialState.recipes[0].ingredients));
    expect(store.getState().editingRecipe).eql(initialState.recipes[0]);
  });

  it('test adding recipe', () => {
    expect(store.getState().addingNewRecipe).equals(initialState.addingNewRecipe);

    store.dispatch(actions.setAddingNewRecipe(!initialState.addingNewRecipe));

    expect(store.getState().addingNewRecipe).equals(!initialState.addingNewRecipe);

    store.dispatch(actions.setAddingNewRecipe(!!initialState.addingNewRecipe));

    expect(store.getState().addingNewRecipe).equals(!!initialState.addingNewRecipe);
  });

  it('test checkbox', () => {
    expect(store.getState().checkBox.checked).equals(initialState.checkBox.checked);

    store.dispatch(actions.toggleCheck());
    expect(store.getState().checkBox.checked).equals(!initialState.checkBox.checked);

    store.dispatch(actions.toggleCheck());
    expect(store.getState().checkBox.checked).equals(!!initialState.checkBox.checked);
  });
});
