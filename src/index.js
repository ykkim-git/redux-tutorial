import { createStore } from "redux";

const add = document.querySelector("#add"),
  minus = document.querySelector("#minus"),
  number = document.querySelector("span");

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

/** subscribe: store안에서 일어나는 변화를 감지한다. */
const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

// dispatch argument should be object
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);
