// 
// 

// const redux = require("redux");
// const createStore = redux.createStore;

// const buycake = "Buy_Cake";

// function buyccake() {
//   return {
//     type: "buycake",
//     info: "first redux action",
//   };
// }

// // (peviousState , action)=> newstate

// const initialState = {
//   numCake: 10,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case buyccake:
//       return {
//         ...state,
//         numCake: state.initialState - 1,
//       };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// console.log("initial state", store.getState());

// store.subscribe(() => {
//   console.log("store is update", store.getState());
// });

// store.dispatch(buyccake());
// store.dispatch(buyccake());
// store.dispatch(buyccake());
// unsubscribe()

const increment ='increment';
const decrement ='decrement';
const add_user ='add_user';


// state 
const initialConut ={
  count:0,
  user:[
    {name:'rabiul'}
  ]
}


const initialUserConut ={
 
  user:[
    {name:'rabiul'}
  ]
}


// action   action object hisebe take.2ta part take=type,payload


// increment count 
const counterAction =()=>{
  return {
    type:increment,
  }
}


// decrement count
const decrementCount =() =>{
  return {
    type:decrement,
  }
}


// add user 
const addUser =() => {
  return {
    type:add_user,
    payload: {name:'rabiul'}
  }
}

// 1.state
// 2. dispatch action
// 3.reducer [action er upor depend kore kaj kore]
// 4.update