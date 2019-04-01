import React, { Component } from "react";
import { Link } from "react-router-dom";
import RecipeCard from "./../RecipeCard/RecipeCard";
import store, { DELETE_CARD } from "../../store";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);

    const info = store.getState();

    this.state = {
      recipes: info.recipes
    };
  }

  deleteCard = (index) => {
    store.dispatch({
      type: DELETE_CARD,
      payload: index
    });
  };

  componentDidMount() {
    store.subscribe(() => {
      const info = store.getState();
      this.setState({
        recipes: info.recipes
      });
    });
  };
  
  render() {
    const recipes = this.state.recipes.map((recipe, i) => {
      return (
        <RecipeCard
          key={i}
          name={recipe.name}
          category={recipe.category}
          authorFirst={recipe.authorFirst}
          authorLast={recipe.authorLast}
          ingredients={recipe.ingredients}
          instructions={recipe.instructions}
          index={i}
          deleteCardFn={this.deleteCard}
        />
      );
    });
    return (
      <div className="Home">
        <Link to="/add/name">
          <button>Create New Recipe</button>
        </Link>
        <div className="card_container">{recipes}</div>
      </div>
    );
  }
}

export default Home;
