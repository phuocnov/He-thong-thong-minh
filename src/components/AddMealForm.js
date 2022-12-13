import React, {Component, useState} from 'react'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Select from '@atlaskit/select'
import Button from '@atlaskit/button'
import Icon from '@atlaskit/icon'
import styled from 'styled-components'
import CheckIcon from '@atlaskit/icon/glyph/check'


export default function AddMealForm() {
    
    const [mealname, setMealname] = useState('')
    const [mealtaste, setMealtaste] = useState([])
    const [mealmaterial, setMealmaterial] = useState([])
    const [mealpic, setMealpic] = useState([])
    const [mealrecipe, setMealrecipe] = useState('')
    
    const onHandleSubmit =(e)=> {
        e.preventDefault();
        const newMeal ={
            mealName: mealname,
            mealPic: mealpic,
            mealRecipe: mealrecipe,
            mealTaste: mealtaste,
            mealMaterial: mealmaterial
        }

        console.log(newMeal)
        setMealname('')
        setMealpic('')
        setMealrecipe('')
        setMealmaterial([])
        setMealtaste([])
    }
    const tasteSelected = (e) => {
        setMealtaste(Array.isArray(e) ? e.map(x=>x.label):[]);
    }
    const materialSelected = (e) => {
        setMealmaterial(Array.isArray(e) ? e.map(x=>x.label):[]);
    }
    return (
    <>  
        <div className='MealForm'>
            <h3 >Hãy thêm món ăn mà bạn yêu thích</h3>
            <form onSubmit={onHandleSubmit} >
            <div className="mb-3">
                <label  className="form-label">Tên món ăn</label>
                <Textfield 
                    className="form-control"
                    name='' 
                    placeholder="Nhập tên món ăn"   
                value = {mealname}
                onChange ={(e) => setMealname(e.target.value)}
                ></Textfield>
                
            </div>
            <label  className="form-label">Chọn hương vị</label>
            <Select
                inputId="single-select-example"
                className="single-select"
                classNamePrefix="react-select"
                options={[
                    { label: 'Chua', value: '1' },
                    { label: 'Cay', value: '2' },
                    { label: 'Mặn', value: '3' },
                    { label: 'Ngọt', value: '4' },
                ]}
                isMulti
                isSearchable={false}
                placeholder="Chọn hương vị"
                onChange={tasteSelected}
                // onChange = {onHandleChange}
            />
            
            <label  className="form-label">Chọn nguyên liệu</label>
            <Select
                inputId="multi-select-example"
                className="multi-select"
                classNamePrefix="react-select"
                options={[
                    { label: 'Rau', value: 'a' },
                    { label: 'Củ', value: 'b' },
                    { label: 'Quả', value: 'c' },
                    { label: 'Thịt', value: 'd' },
                    { label: 'Cá', value: 'e' },
                ]}
                isMulti
                isSearchable={false}
                placeholder="Chọn nguyên liệu món ăn"
                onChange={materialSelected}
            />        
            
            <div className="mb-3">
                <label  className="form-label">Hình ảnh</label>
                <Textfield 
                    className="form-control"
                    name='' 
                    placeholder="Tải hình ảnh lên"       
                    value = {mealpic}
                    onChange ={(e) => setMealpic(e.target.value)}
                ></Textfield>
            </div>
            <div className="mb-3">
                <label  className="form-label">Công thức </label>
                <TextArea
                    // resize="auto"
                    rows={3}
                    maxHeight="20vh"
                    name="area"
                    value={mealrecipe}
                    onChange ={(e) => setMealrecipe(e.target.value)}
                />
            </div>
            <div className='confirm-meal-btn'>
                <button className='cancel-btn' >Huỷ</button>
                <button className='acpt-btn'type='submit' >Xác nhận</button>
            </div>
            
            </form>
        </div>        
    </>
  )
}
