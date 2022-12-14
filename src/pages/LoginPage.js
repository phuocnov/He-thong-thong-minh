import React, {Component, useState} from 'react'
import Textfield from '@atlaskit/textfield'
import { useNavigate, useParams } from 'react-router-dom';
export default function LoginPage() {
    const navigate = useNavigate()
    const styleButton = {
        style1: {
            opacity: 0.6
        },
        style2: {
            opacity:1
        }
    }
    const savedEmail = ['abc@gmail.com']
    const  isFirstTime =(email) => {
      if(savedEmail.includes(email)) return true;
      return false;
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
      // const handleSubmit = event => {
      //   navigate("/home")
      // }
    return (
    <>  
       
        <div className='login'>
                <h3>Dang nhap</h3>
                {/*  onSubmit={handleSubmit} */}
                <form > 
                <div className="mb-3">
                        <label  className="form-label">Nhap email</label>
                        <Textfield 
                            className="form-control"
                            name='' 
                            placeholder="Nhap email cua ban"   
                            onChange={handleChange}
                        ></Textfield>
                        {error && <p style={{color: 'red'}}>{error}</p>}
                </div>
                </form>
                
                <button 
                  type="button" 
                  disabled={!email || !isValidEmail(email)} 
                  style= {(email && isValidEmail(email)) ? styleButton.style2:styleButton.style1}
                  onClick = {()=> {
                    if(isFirstTime(email)) navigate("/home")
                    else navigate("/get-guestname")
                  }}
                >Dang nhap</button>
                <img src='logo192.png' />
        </div>
        
    </>
  )
}
