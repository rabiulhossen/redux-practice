


/* 
const {createStore} = require('redux');

const increment = "increment";
const decrement = "decrement";
const add_user = "add_user";

// state
const initialCount = {
  count: 0,
  user: [{ name: "rabiul" }],
};

const initialUserConut = {
  user: [{ name: "rabiul" }],
};

// action   action object hisebe take.2ta part take=type,payload

// action

// increment count
const counterAction = () => {
  return {
    type: increment,
  };
};

// decrement count
const decrementCount = () => {
  return {
    type: decrement,
  };
};

// add user
const addUser = () => {
  return {
    type: add_user,
    payload: { name: "rabiul" },
  };
};

// 1.state
// 2. dispatch action
// 3.reducer [action er upor depend kore kaj kore]
// 4.update
// 5.store.it has 3 part ----getState() ,dispatch(), subcribe()

// create reducer which is pure function
const countReducer = (state = initialCount, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrement:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state;
  }
};


// create store 
const store =  createStore(countReducer)
store.subscribe(()=>{
  console.log(store.getState());
 
})

// dispatch action 

store.dispatch(counterAction())
store.dispatch(decrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount())
store.dispatch(decrementCount())
 */


// again practice 

const {createStore} = require('redux');
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const RESET ="RESET"


const initialValue ={
  value:100
}


const incrementAction =()=>{
  return{

  type: INCREMENT,
}
}

const decremetntAction =()=>{
  return{
    type:DECREMENT,
  }

}

const resetAction =()=>{
  return{
    type: RESET,
  }
}

const actionReducer =(state=initialValue,action) =>{

  switch (action.type) {
    case INCREMENT:
      return{
        ...state,
        value :state.value +1
      }
     case DECREMENT:
      return{
        ...state,
        value:state.value -1
      }

      case RESET:
        return{
          ...state,
          value : 0
        }
  
    default:
      state;
  }
}


const store = createStore(actionReducer)

store.subscribe(()=>{
  console.log(store.getState());
})
store.dispatch(incrementAction());
store.dispatch(decremetntAction());
store.dispatch(resetAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());
store.dispatch(incrementAction());

const GET_PRODUCT="GET_PRODUCT"
const ADD_PRODUCT ="ADD_PRODUCT"

// Product Reducer 
const initialProductState ={
  products:['sugar','salt'],
  numberProducts:2
};
const getProducts =()=>{
  return{
    type: GET_PRODUCT
  }
}
const addProduct =(user)=>{
  return{
    type:ADD_PRODUCT,
    payload:user
  }
}


const ProductReducer =(state=initialProductState,action)=>{
  switch (action.type) {
    case GET_PRODUCT:
      return{
        ...state,
      }
   case ADD_PRODUCT:
    return{
      products :[...state.products,action.payload],
      numberProducts : state.numberProducts +1,
    }
  
    default:
     state;
  }
}
// cartReducer 

// store 

const storee = createStore(ProductReducer)

storee.subscribe(()=>{
  console.log(storee.getState());
})
storee.dispatch(getProducts())

storee.dispatch(addProduct("oil"))
storee.dispatch(addProduct("ONION"))
storee.dispatch(addProduct("tea"))
storee.dispatch(addProduct("red chili"))
storee.dispatch(addProduct("ginger"))
