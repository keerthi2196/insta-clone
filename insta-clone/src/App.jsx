import Navbar from "./Components/Navbar"
import { Route, Routes } from "react-router-dom"
import Requests from "./pages/Requests"
import Random from "./pages/Random"
import Details from "./pages/Details"
import Posts from "./pages/Posts"

function App(){
  return(
    <>
     <Navbar/>
    <div>
      {/* <h1 className="text-center font-bold">This is the Instagram app</h1> */}
    </div>
   
   <Routes>
    <Route path="/" element={<> </>}/>
   <Route path="/requests" element={<Requests />} />  
   <Route path="*" element={<Random />}/>
   <Route path="/:username" element={<Details />}/>
   <Route path="/post/:id" element={<Posts />}/>
   </Routes>
    </>
  )
}

export default App