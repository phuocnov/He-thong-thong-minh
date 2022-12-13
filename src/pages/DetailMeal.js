import React, { Component, useState } from 'react'
import TasteList from '../components/TasteList'
import RatedStar from '../components/RatedStar'
import ReactStars from "react-rating-stars-component"

export default function DetailMeal() {
    const detailMealData = {

    }

    const tasteList = ['chua', 'cay'];
    const materialList = ['thit', 'ca'];
    const date = 'xx/yy/mm';
    const author = 'nobita';
    const ratedStar = 2.5;
    const ratedNumber = '15k';
    var recipe = '';
    if (recipe == '') {
        recipe = 'Hien chua co cong thuc nao ';
    }
    return (
        <>
            <div className='DetailMeal'>
                <div className='inforMeal'>
                    <div className='left-infor'>
                        <img src='logo192.png' />
                        <p>Danh gia cua ban <span>
                            <ReactStars
                                count={5}
                                value={ratedStar}
                                activeColor="#FFC403"
                                size={20}
                                onChange={(newRating)=>{console.log(newRating)}}
                            />
                        </span></p>
                    </div>
                    <div className='right-infor'>
                        <h3>AHIHI</h3>
                        <p>Huong vi <TasteList tasteList={tasteList} /> </p>
                        <p>Nguyen Lieu {materialList.toString()}</p>
                        <p>Ngay them {date}</p>
                        <p>Duoc them boi {author}</p>
                        <RatedStar ratedStar={ratedStar} ratedNumber={ratedNumber} />

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
