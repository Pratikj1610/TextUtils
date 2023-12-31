import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
//import About from "./components/About";



function App() {

  
  const[alert, setAlert]=useState(null);
  const showAlert=(message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }
  const[mode, setMode]=useState('light');
 const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled","success");
    }
  }

  return (
    <>
   
      *<Navbar title="TextUtils" aboutinfo="about TextUtils" mode={mode} toggleMode={toggleMode} />
      {/*<Navbar/>*/}
      <Alert alert={alert}/>
      <div className="container my-3">
             <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          </div>
        
        


        
     
       {/*<About />*/} 
    </>
  );
}

export default App;
