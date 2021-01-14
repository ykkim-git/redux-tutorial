import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store.js";

function Home({ toDos, addToDo }) {
  const [text, setText] = useState("");

  function onChange(e) {
    setText(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}

/** mapStateToProps */
function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch /** ownProps */) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}

/** connect: Home으로 보내는 props에 추가될 수 있도록 해준다. */
export default connect(mapStateToProps, mapDispatchToProps)(Home);
