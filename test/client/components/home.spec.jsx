// import React from 'react';
// import {createStore} from 'redux';
// import rootReducer from 'client/reducers';
// import {mount} from 'enzyme';
// import {Provider} from 'react-redux';
//
// import Home from 'client/components/home';
//
// describe('Home', () => {
//   let container;
//   let store;
//   // const mockStore = configureStore();
//   const initialState = {
//     checkBox: {checked: false},
//     number: {value: 999}
//   };
//
//   beforeEach(() => {
//     store = createStore(rootReducer, initialState);
//     container = mount(
//       <Provider store={store}>
//         <Home/>
//       </Provider>
//     );
//   });
//
//   it('Test mapStateToProps', () => {
//     expect(!!container).to.be.true;
//     expect(container.find('Home').prop('value')).to.equal(initialState.number.value);
//     expect(container.find('Home').prop('checked')).to.equal(initialState.checkBox.checked);
//   });
//
//   it('Test increment', () => {
//     container.find('Home').prop('onIncrease')();
//     expect(container.find('Home').prop('value')).to.equal(initialState.number.value + 1);
//     container.find('Home').prop('onIncrease')();
//     expect(container.find('Home').prop('value')).to.equal(initialState.number.value + 1 + 1);
//
//   });
//
//   it('test decrement', () => {
//     container.find('Home').prop('onDecrease')();
//     expect(container.find('Home').prop('value')).to.equal(initialState.number.value - 1);
//     container.find('Home').prop('onDecrease')();
//     expect(container.find('Home').prop('value')).to.equal(initialState.number.value - 1 - 1);
//
//   });
//   it('test increment/decrement', () => {
//     let currentValue = 0;
//     container.find('Home').prop('onIncrease')();
//     ++currentValue;
//     expect(container.find('Home').prop('value')).
// to.equal(initialState.number.value + currentValue);
//
//     container.find('Home').prop('onIncrease')();
//     ++currentValue;
//     expect(container.find('Home').prop('value'))
// .to.equal(initialState.number.value + currentValue);
//
//     container.find('Home').prop('onDecrease')();
//     --currentValue;
//     expect(container.find('Home').prop('value'))
// .to.equal(initialState.number.value + currentValue);
//
//     container.find('Home').prop('onDecrease')();
//     --currentValue;
//     expect(container.find('Home').prop('value'))
// .to.equal(initialState.number.value + currentValue);
//
//     container.find('Home').prop('onDecrease')();
//     --currentValue;
//     expect(container.find('Home').prop('value')).
// to.equal(initialState.number.value + currentValue);
//   });
//
//   it('test checkbox', () => {
//     container.find('Home').prop('onChangeCheck')();
//     expect(container.find('Home').prop('checked')).to.equal(!initialState.checkBox.checked);
//
//     container.find('Home').prop('onChangeCheck')();
//     expect(container.find('Home').prop('checked')).to.equal(initialState.checkBox.checked);
//
//     container.find('Home').prop('onChangeCheck')();
//     expect(container.find('Home').prop('checked')).to.equal(!initialState.checkBox.checked);
//   });
//
// });
