import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

export default class AddRecipeForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      ingredients: ''
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
    this.addRecipe = this.addRecipe.bind(this);
  }


  updateTitle(event) {
    this.setState({
      title: event.target.value
    });
  }

  updateIngredients(event) {
    this.setState({
      ingredients: event.target.value
    });
  }

  componentWillReceiveProps() {
    this.setState({
      title: '',
      ingredients: ''
    });
  }

  addRecipe() {
    if (this.state.title && this.state.ingredients) {
      this.props._addRecipe(this.state.title, this.state.ingredients.split(','));
    }
  }


  render() {
    return (
      <div>
        <Modal contentLabel="Modal" isOpen={this.props.isOpen}>
          Title <input value={this.state.title} onChange={this.updateTitle}/>
          Ingredients (comma separated)
          <textarea value={this.state.ingredients}
                    onChange={this.updateIngredients.bind(this)}/>
          <button id="cancel-add" onClick={this.props.handleCancelAdd}>Cancel</button>
          <button onClick={this.addRecipe}>Add</button>
        </Modal>

      </div>
    );
  }
}

AddRecipeForm.propTypes = {
  isOpen: PropTypes.bool,
  handleCancelAdd: PropTypes.func,
  _addRecipe: PropTypes.func
};

