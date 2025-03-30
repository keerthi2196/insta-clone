import { Link } from "react-router-dom"
function Navbar(){
    return(
        <>
        <div className="border-b border-neutral-200 py-3 px-10 flex mx-auto justify-between items-center">
           <Link to="/"> <h1 className="text-xl font-bold">Instagram</h1></Link>
         <div className="flex gap-2 cursor-pointer">
            <Link to='/requests'>Requests</Link>
            <Link to="/about">About us</Link>
            <Link to="/random">Random page</Link>
         </div>
        </div>
        </>
    )
}

export default Navbar