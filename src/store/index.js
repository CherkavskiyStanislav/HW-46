import { legacy_createStore } from 'redux'

const couterReducer = (state = {
    coffee: 0, 
    sugar: 0,
    isLoggedIn: false
}, action) => {
    
    switch (action.type){
        case 'incrementCoffee':
            return{
                ...state,
                coffee: state.coffee + 1
            };
        case 'decrementCoffee':
            return{
                ...state,
                coffee: state.coffee - 1
            };
        case 'increaseCoffee':
            return{
                ...state,
                coffee: state.coffee + action.number
            };

        case 'incrementSugar':
            return{
                ...state,
                sugar: state.sugar + 1
            };
        case 'decrementSugar':
            return{
                ...state,
                sugar: state.sugar - 1
            };
        case 'increaseSugar':
            return{
                ...state,
                sugar: state.sugar + action.number
            };

        case 'logIn':
            return {
                ...state,
                isLoggedIn: true
            };
        
        default:
            return state;
    }
}

const store = legacy_createStore(couterReducer); 

export default store;