import { Link } from "react-router-dom"

function Feed({img,id}){
    return(
        <>
        <Link to={`/post/${id}`}>
        <img src={img} alt="" className="w-[250px] h-[250px] rounded-lg object-cover"/>
        </Link>
        </>
    )
}

export default Feed