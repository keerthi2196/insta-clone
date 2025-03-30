import Users from "../pages/Users"
import { Link } from "react-router-dom"

function Usercard({name,proff,img,username}){
    console.log(username);
    return(
        <>
     <Link to={`/${username}`}>
     <div className="mx-auto w-[260px] bg-neutral-200 flex  gap-5  mb-3 py-1">
            <img className="w-[40px] h-[40px] rounded-full object-cover ml-5" src={img} alt="" />
           <div className="justify-center">
           <p className="text-md">{name}</p>
           <p className="text-sm">{proff}</p>
           </div>
        </div>
     </Link>
        </>
    )
}

export default Usercard