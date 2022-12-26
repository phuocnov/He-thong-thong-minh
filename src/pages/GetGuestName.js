import React, { Component, useState } from 'react'
import Textfield from '@atlaskit/textfield'
import { Button } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import getApi from '../api/getApi'

export default function GetGuestName() {
    const { state } = useLocation()
    const navigate = useNavigate()

    async function submit() {
        try {
            const {data} = await getApi.updateUserName(state.email, name)
            navigate("/home", {state: {email: state.email, name: name}})
        } catch (error) {
            throw error
        }
    }

    const styleButton = {
        style1: {
            opacity: 0.6
        },
        style2: {
            opacity: 1
        }
    }
    const [name, setName] = useState('');
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

            <button disabled={!name} style={name ? styleButton.style2 : styleButton.style1} onClick={() => {submit()}}>Xac nhan</button>
            <img src='logo192.png' />
        </div>
    )
}
