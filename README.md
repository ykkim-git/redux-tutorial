# Redux-tutorial

## Redux 설치: yarn add redux

```js
import { createStore } from "redux"


/** store에서 정보를 수정하는데 필요한 함수 reducer 생성 */
const reducer = (state = 0) => { // default 설정(state =0) initalize;
// ... modifiy state
  return state; 
}

/** data를 저장하는 store 생성 */
const store = createStore(reducer);

console.log(store.getState()) // print 0
```

___

## Actions
1. dispatch call reducer
2. reducer modifying data of store
```js

const add = document.querySelector("#add"),
  minus = document.querySelector("#minus"),
  number = document.querySelector("span");

const countModifier = (count = 0, action) => {
  console.log(count, action)
  if (action.type === "ADD") {
    return (count += 1);
  } else if (action.type === "MINUS") {
    return (count -= 1);
  } else {
    return count;
  }
};

const countStore = createStore(countModifier);

countStore.dispatch({ type: "ADD" }); // redux call modifier
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "ADD" });
countStore.dispatch({ type: "MINUS" });

console.log(countStore.getState()); // print 2(3 - 1);

```

___

## Subscribe: store안에서 일어나는 변화를 감지한다.
```js
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

```

___

## Redux-toolkit

> yarn add @reduxjs/toolkit

### createAction

```js
import { createAction } from "@reduxjs/toolkit";

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case deleteToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return state;
  }
};
```