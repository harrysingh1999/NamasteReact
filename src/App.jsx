import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import { Suspense } from 'react'
import userContext from "./Context/userContext.js";

function App() {
 
  return (
    <>
    <userContext.Provider value={{data: 'New Data'}}>
     <Header/>
     <Suspense fallback= {<p>Loading....</p> }> 
       <Outlet/>
     </Suspense>
     </userContext.Provider>
    </>
  )
}

export default App