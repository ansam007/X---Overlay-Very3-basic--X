import FormStructure from "./components/FormStructure/FormStructure";
import {useState} from 'react';

function App() {

  const[userData, setUserData] = useState([]);

  const addUserDetailHandler = (name, age, college) => {
    setUserData((prevData)=>{
      return [...prevData, {Name: name, Age: age, College: college, id: Math.random().toString()}]
    }) 
  }

  return (
    <div>
    <FormStructure addUserDetails={addUserDetailHandler}></FormStructure>
    <ul>
      {userData.map((user) => (
        <li key={user.id}>
          {user.Name} ,({user.Age} years old, {user.College})
        </li>
      ))}
    </ul>
    </div>
  );
}

export default App;
