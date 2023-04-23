import './App.css';
import axios from "axios";
import {useEffect} from "react";

function App() {

useEffect(() => {
  axios.get("http://localhost:3001/key").then((response) => {
    console.log(response);
  })
}, [])



  return (
    <div className="App">
      <form>
        <div>
          <label>Clé de sécurité</label>
          <input type="text" id="securityKey" name="security_Key"></input>
        </div>
      </form>
    </div>
  );
}

export default App;
