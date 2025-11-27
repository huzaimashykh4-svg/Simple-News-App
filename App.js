import React, { useState } from 'react'
import './App.css';
import Nav from './component/nav';
import News from './component/news'; 
import LoadingBar from "react-top-loading-bar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {

  const [progress , setProgress] = useState(0);

  const [inputValue , setInputvalue] = useState("");
 
  const [view , setView] = useState("column")

  const onchanges = (event) =>{

setInputvalue(event.target.value)


  }

  const buttontoggle = (sets)=>{


     setView(sets)


  }


  const sProgress = (progresss) => {
    setProgress(progresss); 
  }
  
  return (
    <div>
      <Router>
        <Nav  changes={onchanges} valueinput={inputValue} />
        <LoadingBar
          color="#f11946"
          progress={progress}
        /> 
        
        <Routes>
          <Route exact path='/business' element={<News      view={view} toggle={buttontoggle} valuesinput={inputValue} Progress={sProgress} key="business" pageSize={6} category="business"/>} />
          <Route exact path='/entertainment' element={<News view={view} toggle={buttontoggle} valuesinput={inputValue}  Progress={sProgress} key="entertainment" pageSize={6} category="entertainment"/>} />
          <Route exact path='/general' element={<News       view={view} toggle={buttontoggle} valuesinput={inputValue}  Progress={sProgress} key="general" pageSize={6} category="general"/>} />
          <Route exact path='/health' element={<News        view={view} toggle={buttontoggle} valuesinput={inputValue} Progress={sProgress} key="health" pageSize={6} category="health"/>} />
          <Route exact path='/science' element={<News       view={view} toggle={buttontoggle} valuesinput={inputValue} Progress={sProgress} key="science" pageSize={6} category="science"/>} />
          <Route exact path='/sports' element={<News        view={view} toggle={buttontoggle} valuesinput={inputValue} Progress={sProgress} key="sports" pageSize={6} category="sports"/>} />
          <Route exact path='/technology' element={<News    view={view} toggle={buttontoggle} valuesinput={inputValue}  Progress={sProgress} key="technology" pageSize={6} category="technology"/>} />
        </Routes>
      </Router>
      
    </div>
  )
}
export default App;