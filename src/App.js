import React,{useState, useEffect, Suspense} from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import ClipLoader from "react-spinners/ClipLoader";

import './App.css'


const Home = React.lazy(()=> import('./Home'))
const Game1 = React.lazy(()=> import('./Game1'))


 
export default function App() {

  return(
    <BrowserRouter>
      <Suspense fallback={<LoaderScreen/>} >
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/game1' component={Game1} />
          </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

const LoaderScreen = ()=>{

  return(
    <div  style={{textAlign:'center',position:'fixed',top:'50%', left:'calc(50% - 10px)'}}>
      <ClipLoader/>
    </div>
  )
}
