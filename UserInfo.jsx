import UserContext from "../context/UserContext";

function UserInfo() {
  return (
    <UserContext.Consumer>
      {(value) => value}
    </UserContext.Consumer>
  )
}

export default UserInfo;