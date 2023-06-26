import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App(props) {
  const [mode, setmode] = useState("light");
  const [btn1, btn2] = useState("Enable Dark mode");
  const [alert, setalert] = useState(null);

  const showAlert = (msg, type) => {
    setalert({
      message: msg,
      type: type,
    });

    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const click = () => {
    showAlert("About is clicked", "success");
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "gray";
      btn2("Disable Dark mode");
      showAlert("Dark mode is on...", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      btn2("Enable Dark mode");
      showAlert("Dark mode is off...", "success");
    }
  };
  return (
    <>
    <Router>
         
        <Navbar mode={mode} togglemode={togglemode} btn={btn1} />
        <Alert alert={alert} />
        <Switch>
          <Route path="/about">
            <div className="">

            <About set="hello ji" mode={mode} cli={click} />
            </div>
          </Route>
            <Form showAlert={showAlert} />
          <Route path="/">
          </Route>
        </Switch>
    </Router>
      </>
  );
}

export default App;


 

 

 