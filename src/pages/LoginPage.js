import React, { Component, useState } from 'react'
import Textfield from '@atlaskit/textfield'
import getApi from '../api/getApi';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate()
  const styleButton = {
    style1: {
      opacity: 0.6
    },
    style2: {
      opacity: 1
    }
  }
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }
  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }
    setEmail(event.target.value);
  };

  async function handleLogin(input) {
    try {
      const {data} = await getApi.getUser(input)
      console.log(data)
      if(data.data[0] == undefined) {
        navigate("/get-guestname", {state: {email: input}})
      }
      else {
        navigate("/home", {state: data})
      }
    } catch (error) {
      throw error
    }
  }

  return (
    <>

      <div className='login'>
        <h3>Dang nhap</h3>
        <form>
          <div className="mb-3">
            <label className="form-label">Nhap email</label>
            <Textfield
              className="form-control"
              name=''
              placeholder="Nhap email cua ban"
              onChange={handleChange}
            ></Textfield>
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
        </form>

        <button type="button" disabled={!email} style={email ? styleButton.style2 : styleButton.style1} onClick={()=>{
          handleLogin(email)
        }}>Dang nhap</button>
        <img src='logo192.png' />
      </div>

    </>
  )
}
