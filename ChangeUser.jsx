import { useContext } from "react"
import UserContext from "../context/UserContext"


const ChangeUser = () => {

  const {user, setUser} = useContext(UserContext);

  return (

    <button onClick={() => setUser(user === 'Name' ? 'Dima' : 'Name')}> Change User</button>
  )
}

export default ChangeUser