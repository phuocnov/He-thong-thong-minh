import React, { Component, useState } from 'react'
import TasteList from '../components/TasteList'
import RatedStar from '../components/RatedStar'
import ReactStars from "react-rating-stars-component"
import { useLocation } from 'react-router'
import api from '../api/api'
import getApi from '../api/getApi'

export default function DetailMeal() {
    const {state} = useLocation()
    console.log(state)
    const tasteList = state.taste_type;
    const materialList = state.savours_name;
    const date = state.created_at;
    const author = 'admin';
    const ratedStar = state.rating;
    const ratedNumber = state.voting;
    var recipe = '';
    if (recipe == '') {
        recipe = 'Hien chua co cong thuc nao ';
    }
    return (
        <>
            <div className='DetailMeal'>
                
                <div className='inforMeal'>
                    <div className='left-infor'>
                        <img src={state.img} />
                        <p>Danh gia cua ban <span>
                            <ReactStars
                                count={5}
                                value={ratedStar}
                                activeColor="#FFC403"
                                size={20}
                                onChange={(newRating)=>{getApi.upsertUserRating(state.userdata.email, newRating, state.id)}}
                            />
                        </span></p>
                    </div>
                    <div className='right-infor'>
                        <h3>{state.name}</h3>
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
