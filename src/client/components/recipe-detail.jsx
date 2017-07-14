import React, {Component} from 'react';
import PropTypes from 'prop-types';
class RecipeDetail extends Component {
  constructor(props) {
    super(props);
  }

  deleteRecipe() {
    this.props._deleteRecipe(this.props.id);
  }

  editRecipe() {
    this.props._editRecipe(this.props.title, this.props.ingredients);
  }

  render() {
    return (
      <div>
        {this.props.ingredients.map((item) => {
          return (
            <div key={item}>
              {item}
            </div>
          );
        })}
        <div>
          <button id="delete-recipe"
                  type="submit"
                  onClick={this.deleteRecipe.bind(this)}>
            DELETE
          </button>
          <button id="edit-recipe"
                  type="submit"
                  onClick={this.editRecipe.bind(this)}>
            EDIT
          </button>
        </div>
      </div>
    );
  }
}

RecipeDetail.propTypes = {
  ingredients: PropTypes.array,
  id: PropTypes.string,
  title: PropTypes.string,
  _deleteRecipe: PropTypes.func,
  _editRecipe: PropTypes.func
};

export default RecipeDetail;
