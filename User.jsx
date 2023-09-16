import UserInfo from "./UserInfo"
import UserContext from "../context/UserContext";


function User() {
  return (
    <UserContext.Provider value="Name2">
      <UserInfo />
    </UserContext.Provider>
  )
}

export default User;