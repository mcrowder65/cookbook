import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import RecipeList from './recipe-list';
import AddRecipeForm from './add-recipe-form';
import EditRecipeForm from './edit-recipe-form';
import {removeRecipe, updateRecipe, setEditingRecipe, setAddingNewRecipe, addRecipe} from '../actions';

class Cookbook extends Component {
  constructor() {
    super();
    this.setAddingNewRecipeFalse = this.setAddingNewRecipeFalse.bind(this);
    this.setAddingNewRecipeTrue = this.setAddingNewRecipeTrue.bind(this);
  }

  setAddingNewRecipeTrue() {
    this.props.setAddingNewRecipe(true);
  }

  setAddingNewRecipeFalse() {
    this.props.setAddingNewRecipe(false);
  }

  render() {
    return (
      <div>
        <RecipeList recipes={this.props.recipes}
                    _removeRecipe={this.props.removeRecipe}
                    _modifyRecipe={this.props.setEditingRecipe}/>
        <EditRecipeForm title={this.props.editingRecipe.title}
                        ingredients={this.props.editingRecipe.ingredients}
                        updateRecipe={this.props.updateRecipe}
                        stopEditing={this.props.stopEditing}
                        isOpen={!!(this.props.editingRecipe && this.props.editingRecipe.title)}/>
        <AddRecipeForm isOpen={this.props.addingNewRecipe}
                       handleCancelAdd={this.setAddingNewRecipeFalse}
                       _addRecipe={this.props.addRecipe}/>
        <button id="add-recipe-button"
                onClick={this.setAddingNewRecipeTrue}>
          Add Recipe
        </button>
      </div>
    );
  }
}

Cookbook.propTypes = {
  removeRecipe: PropTypes.func,
  updateRecipe: PropTypes.func,
  recipes: PropTypes.array || PropTypes.object,
  editingRecipe: PropTypes.object,
  setEditingRecipe: PropTypes.func,
  stopEditing: PropTypes.func,
  addingNewRecipe: PropTypes.bool,
  setAddingNewRecipe: PropTypes.func,
  cancelAddingRecipe: PropTypes.func,
  addRecipe: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    editingRecipe: state.editingRecipe,
    addingNewRecipe: state.addingNewRecipe
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeRecipe: (id) => {
      dispatch(removeRecipe(id));
    },
    updateRecipe: (oldTitle, title, ingredients) => {
      dispatch(updateRecipe(oldTitle, title, ingredients));
      dispatch(setEditingRecipe(title, ingredients));
    },
    setEditingRecipe: (title, ingredients) => {
      dispatch(setEditingRecipe(title, ingredients));
    },
    stopEditing: () => {
      dispatch(setEditingRecipe(null, []));
    },
    setAddingNewRecipe: (val) => {
      dispatch(setAddingNewRecipe(val));
    },
    addRecipe: (title, ingredients) => {
      dispatch(addRecipe(title, ingredients));
      dispatch(setAddingNewRecipe(false));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cookbook);
