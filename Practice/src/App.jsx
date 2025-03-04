import { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    number: "",
  });

    const [error,setError]=useState({
      name:false,
      email:false,
      number:false
    })
 

  let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
    setError({
      name:false,
      email:false,
      number:false
    })
   
  };

  const handleSubmit = (e) => {

    let isValid=true
    e.preventDefault();
    Validation();
    if(isValid){
      console.log(inputValue)
    }
  };

  const Validation = () => {
    if (inputValue.name === "") {
      setError((prev)=>({
        ...prev, name:true
      }));
      isValid=false
    }
    if (!emailRegex.test(inputValue.email)) {
      setError((prev)=>({
        ...prev, email:true
      }));
      isValid=false

    }
    if (inputValue.number.length !== 10) {
      setError((prev)=>({
        ...prev, number:true
      }));
      isValid=false

    }
  };

  return (
    <>
      <section>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexFlow: "column",
            width: "30%",
            justifySelf: "center",
            marginTop: "10%",
            justifyContent: "space-between",
            rowGap: "10px",
          }}
        >
          <input
            type="text"
            onChange={(e) => {
              handleInput(e);
            }}
            name="name"
            placeholder="enter your name"
          />
          <span style={{ color: "red" }}>
            
            {error.name && "enter a valid name"}
          </span>
          <input
            type="text"
            onChange={(e) => {
              handleInput(e);
            }}
            name="email"
            placeholder="enter your email"
          />
          <span style={{ color: "red" }}>
            
            {error.email && "enter a valid email"}
          </span>
          <input
            type="text"
            onChange={(e) => {
              handleInput(e);
            }}
            name="number"
            placeholder="enter your phone number"
          />
          <span style={{ color: "red" }}>
            {error.number && "enter a valid number"}
          </span>

          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}

export default App;
