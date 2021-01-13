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