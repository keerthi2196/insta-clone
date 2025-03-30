import Usercard from "../Components/Usercard"
import Users from "./Users"

function Requests(){
    return(
        <>
    <div className="mt-24">
    {
            Users.map(user => <Usercard name={user.name} proff={user.profession} img={user.image} username={user.username}/>)
        }
    </div>
      
        </>
    )
}

export default Requests