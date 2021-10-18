import React,{useState} from "react";

function App() {

  const [heading,setHeading] = useState("Hello");
  const [mousedOver,setMousedOver] = useState(false);
  // const [mousedOut, setMousedOut] = useState(false);


  const handleClick = () => {
    console.log("Clicked");
    setHeading("Submitted");
  };

  const handleMouseOver = () =>
  {
    console.log("Moused over ");
    setMousedOver(true);
  }

  const handleMouseOut = () =>
  {
    console.log("Moused  Out");
    setMousedOver(false);

  }

  return (
    <div className="container">
      <h1>{heading}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick}
      onMouseOver= {handleMouseOver}
      onMouseOut= {handleMouseOut}
      style = {{backgroundColor:
         mousedOver? "black" : "white"
         
      }}
      
      >Submit</button>
    </div>
  );
}

export default App;
