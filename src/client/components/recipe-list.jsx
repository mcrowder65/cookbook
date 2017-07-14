import React, {Component} from 'react';
import RecipeDetail from './recipe-detail';
import {Accordion, AccordionItem} from 'react-sanfona';
import PropTypes from 'prop-types';
class RecipeList extends Component {

  deleteRecipe(id) {
    this.props._removeRecipe(id);
  }

  editRecipe(title, ingredients) {
    this.props._modifyRecipe(title, ingredients);
  }

  render() {
    return (
      <div>
        <h3>Recipe List</h3>
        <Accordion>
          {(this.props.recipes || []).map((item) => {
            return (
              <AccordionItem title={item.title} key={item}>
                <RecipeDetail id={item.title} title={item.title}
                              ingredients={item.ingredients}
                              _deleteRecipe={this.deleteRecipe.bind(this)}
                              _editRecipe={this.editRecipe.bind(this)}/>
              </AccordionItem>
            )
              ;
          })}
        </Accordion>
      </div>
    );
  }
}


RecipeList.propTypes = {
  recipes: PropTypes.array,
  _removeRecipe: PropTypes.func,
  _modifyRecipe: PropTypes.func
};
export default RecipeList;
