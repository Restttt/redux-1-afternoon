import {createStore} from 'redux';

const initialState = {
    name: '',
    category: '',
    firstName: '',
    lastName: '',
    ingredients: [],
    instructions: [],
    recipes: []
};

export const UPDATE_NAME = "UPDATE_NAME";
export const UPDATE_CATEGORY = "UPDATE_CATEGORY";
export const UPDATE_FIRST_NAME = "UPDATE_FIRST_NAME";
export const UPDATE_LAST_NAME = "UPDATE_LAST_NAME";
export const UPDATE_INGREDIENTS = "UPDATE_INGREDIENTS";
export const UPDATE_INSTRUCTIONS = "UPDATE_INSTRUCTIONS";
export const ADD_RECIPE = "ADD_RECIPE";
export const CLEAR_FIELDS = "CLEAR_FIELDS";
export const DELETE_CARD = "DELETE_CARD";

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_NAME:
            return { ...state, name: action.payload};
        case UPDATE_CATEGORY:
            return { ...state, category: action.payload};
        case UPDATE_FIRST_NAME:
            return { ...state, firstName: action.payload};
        case UPDATE_LAST_NAME:
            return { ...state, lastName: action.payload};
        case UPDATE_INGREDIENTS:
            const addIngredients = [...state.ingredients, action.payload];
            return { ...state, ingredients: addIngredients};
        case UPDATE_INSTRUCTIONS:
            const addInstructions = [...state.instructions, action.payload];
            return { ...state, instructions: addInstructions};
        case ADD_RECIPE:
            const createRecipe = {
                name: state.name,
                category: state.category,
                firstName: state.firstName,
                lastName: state.lastName,
                ingredients: state.ingredients,
                instructions: state.instructions,
            };
            const newRecipe = [...state.recipes, createRecipe];
            return {...state, recipes: newRecipe};
        case CLEAR_FIELDS: 
            return {...state, name: '', category: '', firstName: '', lastName: '', ingredients: [], instructions: [] };
        case DELETE_CARD: 
            const indexDelete = state.recipes.findIndex(index => +index === action.payload)
            const { recipes } = state;
            recipes.splice(indexDelete, 1);
            console.log("Deleted");
            return {...state, recipes};
        default: 
            return state;
    };
};


export default createStore(reducer);
