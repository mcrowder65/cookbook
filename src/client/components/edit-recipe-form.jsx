import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
export default class EditRecipeForm extends Component {
  updateTitle(event) {
    this.setState({
      title: event.target.value
    }, () => {
      this.props.updateRecipe(this.props.title, this.state.title, this.props.ingredients);
    });
  }

  updateIngredients(event) {
    this.setState({
      ingredients: event.target.value
    }, () => {
      this.props.updateRecipe(this.props.title,
        this.state.title, this.state.ingredients.split(','));
    });
  }

  constructor() {
    super();
    this.state = {
      title: '',
      ingredients: ''
    };

    this.updateTitle = this.updateTitle.bind(this);
    this.updateIngredients = this.updateIngredients.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      title: nextProps.title,
      ingredients: nextProps.ingredients.join(',')
    });
  }

  render() {
    return (
      <div>
        <Modal contentLabel="Modal"
               isOpen={this.props.isOpen}>
          <div>
            Title <input id="title-input"
                         value={this.state.title}
                         onChange={this.updateTitle}/>
          </div>
          <div>
            Ingredients
            <textarea value={this.state.ingredients}
                      onChange={this.updateIngredients}/>
          </div>
          <button id="done-button" onClick={this.props.stopEditing}>Done</button>
        </Modal>
      </div>
    );
  }
}

EditRecipeForm.propTypes = {
  title: PropTypes.string,
  ingredients: PropTypes.array,
  isOpen: PropTypes.bool,
  updateRecipe: PropTypes.func,
  stopEditing: PropTypes.func
};

