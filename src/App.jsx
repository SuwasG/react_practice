import React,{Suspense} from 'react'
import './App.css'
import MyRoutes from './MyRoutes'


const App=()=> {
 

  return (
  <>
  <Suspense fallback="loading">
  <MyRoutes/>
  </Suspense>
  
    </>
  )
}

export default App
