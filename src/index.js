import {createStore} from 'redux'
const button = document.querySelector(".btn");
const minus = document.querySelector(".minus");
const number = document.getElementById("number");

const reducer = (state = 0,action) => {
  switch(action.type){
    case "ADD":
      return state + 1;
    case "MINUS":
      return state - 1;
      default:
        return state;
      }
    }
const store = createStore(reducer);

const count = () => {
  console.log('i`m the first subscriber!')
  number.innerText = store.getState();
}

const count2 = () => {
  console.log("i`m also subscribe")
}

store.subscribe(count);
store.subscribe(count2);
const actionAdd = () => {
  return {type : "ADD"};
}
const actionMinus = () => {
  return {type:"MINUS"};
}

const handlePlusClick = () => {
  store.dispatch(actionAdd());
}
const handleMinusClick = () => {
  store.dispatch(actionMinus());
}

button.addEventListener('click',handlePlusClick);
minus.addEventListener('click', handleMinusClick);