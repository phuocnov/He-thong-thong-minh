import React, {Component, useState} from 'react'
import Textfield from '@atlaskit/textfield'
export default function LoginPage() {
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

    return (
    <>  
       
        <div className='login'>
                <h3>Dang nhap</h3>
                <form>
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
                
                <button type="button" disabled={!email}>Dang nhap</button>
                <img src='logo192.png' />
        </div>
        
    </>
  )
}
