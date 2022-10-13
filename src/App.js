import { useState } from "react";
import "./App.css";
import { lisusers } from "./Data";
import UserList from "./Components/UserList";
import NavigationBar from "./Components/NavigationBar";
import { Route, Routes, Navigate} from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/Login";
import SignUp from "./Components/SignUp";
import UserDetails from "./Components/UserDetails";

function App() {
  const [users, setUsers] = useState(lisusers);

  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/users" element={<UserList users={users} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={ <Navigate to="/"/> }/>
        <Route path="/details/:iduser" element={<UserDetails users={users}/>} />
      </Routes>
    </div>
  );
}

export default App;
