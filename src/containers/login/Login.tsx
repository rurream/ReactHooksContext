import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import LoginContext from "../../contexts/LoginContext";

const Login = () => {
  const { login } = useContext(LoginContext);
  const history = useHistory()
  const [name, setName] = useState("")

  const handleOnSubmit = (e:any)=>{
      e.preventDefault()
      login(name)
      history.push('/list')
  }

  return (
    <form onSubmit={e=>handleOnSubmit(e)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Email address
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          value= {name}
          onChange = {e=>setName(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Login;
