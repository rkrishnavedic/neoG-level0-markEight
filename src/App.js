import React, { useState } from 'react';
import './App.css';

const Dict = {
  '😍':"Loved It!",
  '😂':"Laughing!",
  '😭':"Crying!",
  '😩':"Oh no!",
  '😔':"Sadness!",
  '😳':"Oh really!(surprised)",
  '✌️':"Victory",
}

const emojiWeHave = Object.keys(Dict);

function App() {
  
  const [meaning, setMeaning] = useState("");

  
  function inputChangeHandler(event){

    //console.log(event.target.value);
    if(event.target.value === "") {setMeaning("");return;}
    if(event.target.value in Dict){
      //console.log('match');
      setMeaning(Dict[event.target.value]);
    }else{
      setMeaning("Sorry! no match found!")
    }

  }

  function manualClickHandler(event){
    setMeaning(Dict[event.target.id]);
  }

  return (

    <>
    <div>

      <h3>
      Input Emoji or Click Emoji!
      </h3>

      <input id="text-input" onChange={inputChangeHandler} placeholder="type emoji"></input>
      
      <h3>
      [{meaning}]
      </h3>

      <h3>
        Emoji's we know!
      </h3>
      <nav style={{padding:"auto",margin:"auto"}}>
        
          {
            emojiWeHave.map((value)=>{
              return (
              <span
              style={{cursor:"pointer",fontSize:"300%", padding:"1.2%"}}
              onClick={manualClickHandler}
            id = {value}
              >
                {value}
                </span>)
            })
          }
        
      </nav>
      <div>
        
      </div>
    </div>
    </>
  );
}

export default App;
