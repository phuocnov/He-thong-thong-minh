import React, {Component, useState} from 'react'
import Textfield from '@atlaskit/textfield'
import TextArea from '@atlaskit/textarea'
import Select from '@atlaskit/select'
import Button from '@atlaskit/button'
import Icon from '@atlaskit/icon'
import styled from 'styled-components'
import CheckIcon from '@atlaskit/icon/glyph/check'
import TasetList from './TasteList'
import TasteList from './TasteList'
import RatedStar from './RatedStar'
import RatingStar from './RatingStar'
export default function DetailMeal() {
    const tasteList =['chua','cay'];
    const materialList =['thit','ca'];
    const date ='xx/yy/mm';
    const author ='nobita';
    const ratedStar = '2.5';
    const ratedNumber = '15k';
    var recipe = '';
    if (recipe =='') {
        recipe = 'Hien chua co cong thuc nao ';
    }
  return (
    <>
        <div className='DetailMeal'>
            <div className='inforMeal'>
                <div className='left-infor'>
                    <img src='logo192.png' />
                    <p>Danh gia cua ban <span><RatingStar /></span></p>
                </div>
                <div className='right-infor'>
                    <h3>AHIHI</h3>
                    <p>Huong vi <TasteList tasteList={tasteList}/> </p>
                    <p>Nguyen Lieu {materialList.toString()}</p>
                    <p>Ngay them {date}</p>
                    <p>Duoc them boi {author}</p>
                    <RatedStar ratedStar ={ratedStar} ratedNumber ={ratedNumber}/>
                    
                </div>
            </div>
            <div className='recipeMeal'>
                <h3>Cong thuc</h3>
                <p>{recipe}</p>
            </div>
            
        </div>
        
        
    </>
  )
}
