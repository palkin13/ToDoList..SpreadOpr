import React , {useState} from "react";

function App() {
const [ inputText, setInputText] = useState("");
const [ items , setItems] = useState([]);

function handleChange(event) {
const text = event.target.value
setInputText(text);
// console.log(text);
}
function addingItems(){
setItems( (prevValue) => {
  return [...prevValue , inputText];
});
setInputText("");
}


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange = {handleChange} type="text" value={inputText} />
         <button onClick = {addingItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {/* <li>Add</li> */}
         {items.map(todoItem =>  <li>{todoItem}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
