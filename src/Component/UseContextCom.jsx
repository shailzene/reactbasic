import { useState, useEffect, useContext, createContext } from "react"
import UseStateCom from "./UseStateCom";
const UserContext = createContext()
export default function UseContextCom() {

  const [user, setUser] = useState('shail');


  // second example 

  return (
    <>
      <h1 style={{ color: "red" }}>Use Context Page</h1>
      <h2>{`Hello ${user}!`}</h2>
      <Component2 user={user} />
      <UseStateCom user={user} />

      <UserContext.Provider value={user}>
        <h2>{`Hello Second Way ${user}!`}</h2>
        <Component2 user={user} />
      </UserContext.Provider>
    </>
  )
}
function Component2({ user }) {
  
  return (
    <>
      <h2>Component 2</h2>
      <Component3 user={user} />
    </>
  );
}
function Component3({ user }) {
  return (
    <>
      <h2>Component 3{user}</h2>
      <Component4 user={user} />
    </>
  );
}

function Component4({ user }) {
  return (
    <>
      <h2>Component 4</h2>
      <Component5 user={user} />
    </>
  );
}

function Component5({ user }) {
  return (
    <>
      <h2>Component 5</h2>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}

/// second way

function Component12() {
  return (
    <>
      <h2>Component 12</h2>
      <Component3 />
    </>
  );
}

function Component13() {
  return (
    <>
      <h2>Component 13</h2>
      <Component4 />
    </>
  );
}

function Component14() {
  return (
    <>
      <h2>Component 14</h2>
      <Component5 />
    </>
  );
}

function Component15() {
  const users = useContext(UserContext);

  return (
    <>
      <h2>Component 15</h2>
      <h3>{`Hello ${users} again!`}</h3>
    </>
  );
}