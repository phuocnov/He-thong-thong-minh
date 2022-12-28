import React, { Component, useEffect, useState } from 'react'
import TasteList from '../components/TasteList'
import RatedStar from '../components/RatedStar'
import ReactStars from "react-rating-stars-component"
import CardRecipe from '../components/CardRecipe'
import { Button, Tab, Tabs } from 'react-bootstrap';
import { useLocation } from 'react-router'
import api from '../api/api'
import getApi from '../api/getApi'

export default function DetailMeal() {
    const { state } = useLocation()
    const tasteList = state.taste_type;
    const materialList = state.savours_name;
    const date = state.created_at;
    const author = 'admin';
    const ratedStar = state.rating;
    const ratedNumber = state.voting;
    const [similarDish, setSimilarDish] = useState([])
    const [tab, setTab] = useState("suggest")
    
    useEffect(()=>{
        async function getSimilarFood() {
            try {
                const {data} = await getApi.getSimilarFood(state.id, 5);
                setSimilarDish(data.data)
                console.log(similarDish)
            } catch (err) {
                throw err
            }
        }
        
        getSimilarFood()
    },[state])
    
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
                                onChange={(newRating) => { getApi.upsertUserRating(state.userdata.email, newRating, state.id) }}
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
                <Tabs 
                        id='recomend-section__header__tabs'
                        activeKey={tab}
                        onSelect={(k) => { setTab(k) }}
                    >
                        <Tab eventKey="suggest" title="Món ăn tương tự">
                            <div className='cover_item'>
                                {similarDish.map((food, index) => {
                                    return <CardRecipe
                                        dishId={food.id}
                                        img={food.img}
                                        name={food.name}
                                        savours_name={food.savours_name}
                                        taste_type={food.taste_type}
                                        rating={food.rating.avg_rating}
                                        voting={food.rating.total_rating}
                                        created_at={food.created_at}
                                        key={index}
                                        userdata={state.userdata}
                                    />
                                })}

                            </div>
                        </Tab>
                    </Tabs>
            </div>


        </>
    )
}
