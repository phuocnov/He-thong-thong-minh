import React, { Component, useState } from 'react'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Select from '@atlaskit/select'
import { useLocation, useNavigate } from 'react-router-dom'
import getApi from '../api/getApi'


export default function AddMealForm() {
    const navigate = useNavigate();
    
    const { state } = useLocation()
    const [mealname, setMealname] = useState('')
    const [mealtaste, setMealtaste] = useState([])
    const [mealmaterial, setMealmaterial] = useState([])
    const [mealpic, setMealpic] = useState({})
    const [mealrecipe, setMealrecipe] = useState('')



    const onHandleSubmit = (e) => {
        var selected_flavors = []
        var selected_ingredients = []

        mealtaste.map((flavor) => {
            selected_flavors.push(flavor.value)
        })
        mealmaterial.map((ingre) => {
            selected_ingredients.push(ingre.value)
        })

        e.preventDefault();
        const newMeal = {
            name: mealname,
            img: mealpic,
            des: mealrecipe,
            taste_type: selected_flavors,
            savours: selected_ingredients,
            email: state.userdata.email
        }

        console.log(newMeal)
        getApi.postNewMeal(newMeal).then(()=>{
            navigate('/home', {state:{userdata: state.userdata}})
        });
        // setMealname('')
        // setMealpic('')
        // setMealrecipe('')
        // setMealmaterial([])
        // setMealtaste([])
    }
    // const tasteSelected = (e) => {
    //     setMealtaste(Array.isArray(e) ? e.map(x=>x.label):[]);
    // }
    // const materialSelected = (e) => {
    //     setMealmaterial(Array.isArray(e) ? e.map(x=>x.label):[]);
    // }
    return (
        <>
            <div className='MealForm'>
                <h3 >Hãy thêm món ăn mà bạn yêu thích</h3>
                <form onSubmit={onHandleSubmit} >
                    <div className="mb-3">
                        <label className="form-label">Tên món ăn</label>
                        <Textfield
                            className="form-control"
                            name=''
                            placeholder="Nhập tên món ăn"
                            value={mealname}
                            onChange={(e) => setMealname(e.target.value)}
                        ></Textfield>

                    </div>
                    <label className="form-label">Chọn hương vị</label>
                    <Select
                        inputId="single-select-example"
                        className="single-select"
                        classNamePrefix="react-select"
                        options={state.flavors}
                        isMulti
                        isSearchable={false}
                        placeholder="Chọn hương vị"
                        onChange={setMealtaste}
                    />

                    <label className="form-label">Chọn nguyên liệu</label>
                    <Select
                        inputId="multi-select-example"
                        className="multi-select"
                        classNamePrefix="react-select"
                        options={state.ingredients}
                        isMulti
                        isSearchable={false}
                        placeholder="Chọn nguyên liệu món ăn"
                        onChange={setMealmaterial}
                    />

                    <div className="mb-3">
                        <label className="form-label">Hình ảnh</label>
                        <Textfield
                            className="form-control"
                            name=''
                            placeholder="Tải hình ảnh lên"
                            value={mealpic}
                            onChange={(e) => setMealpic(e.target.value)}
                        ></Textfield>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Công thức </label>
                        <TextArea
                            // resize="auto"
                            rows={3}
                            maxHeight="20vh"
                            name="area"
                            value={mealrecipe}
                            onChange={(e) => setMealrecipe(e.target.value)}
                        />
                    </div>
                    <div className='confirm-meal-btn'>
                        <button className='cancel-btn' >Huỷ</button>
                        <button className='acpt-btn' type='submit'>Xác nhận</button>
                    </div>

                </form>
            </div>
        </>
    )
}
