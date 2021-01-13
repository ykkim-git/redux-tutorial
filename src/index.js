import { createStore } from "redux";

const form = document.querySelector("form"),
  input = document.querySelector("input"),
  ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO",
  DELETE_TODO = "DELETE_TODO";

  // action에 필요한 데이터를 object형태로 return
const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      /** mutation(ex: array.push을 하지않고 새로운 state를 만들고 새로운 state를 return해야함
      array의 content로 새로운 object가 추가된 array를 만들어준다. */
      // 3. 새로운 state를 만들어서 return
      // return [...state, { text: action.text, id: Date.now() }];

      // 새로운 todo가 array의 첫부분에 있도록 하기
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

// 2. to reducer
const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text))
  input.focus();
};

const dispatchDeleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(deleteToDo(id));
};

// 5. 화면을 만드는 기능 수행
const paintToDos = () => {
  const toDos = store.getState();
  ul.innerHTML = "";

  toDos.forEach((toDo) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");

    btn.innerText = "DEL";
    btn.addEventListener("click", dispatchDeleteToDo);
    li.id = toDo.id;
    li.innerText = toDo.text + " ";

    li.appendChild(btn);
    ul.appendChild(li);
  });
};
// 4. store가 바뀔때마다 paintToDos 호출
store.subscribe(paintToDos);

// 1. 폼 submit
const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

// store.subscribe(() => console.log(store.getState()));

form.addEventListener("submit", onSubmit);
