import React, {Component, useState} from 'react'
import Textfield from '@atlaskit/textfield'
import { Button } from 'react-bootstrap'

export default function GetGuestName() {
    const [name,setName] = useState('');
    const handleChange = (e) => {
        setName(e.target.value)
    }
  return (
    <div className='login'>
                <h3>Nhap ten</h3>
                <form>
                <div className="mb-3">
                        <Textfield 
                            className="form-control"
                            name='' 
                            placeholder="Nhap ten cua ban"   
                            onChange={handleChange}
                            value={name}
                        ></Textfield>
                </div>
                </form>
                
                <button disabled={!name} >Xac nhan</button>
                <img src='logo192.png' />
        </div>
  )
}
