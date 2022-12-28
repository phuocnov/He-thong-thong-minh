import React, { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Tab, Tabs } from 'react-bootstrap';
import ModalFindBy from '../components/ModalFindBy';
import CardRecipe from '../components/CardRecipe';
import { useLocation, useNavigate } from "react-router-dom";
import getApi from '../api/getApi';

function Home() {
    const { state } = useLocation()
    const navigate = useNavigate()
    // Data
    const [flavors, setFlavor] = useState({})
    const [ingredients, setIngredients] = useState({})

    const [dish, setDish] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const [maybeYouLike, setMaybeYouLike] = useState([])
    useEffect(() => {
        async function getFlavors() {
            try {
                const rawData = await getApi.getTasteType()
                var newData = []
                rawData.data.data.map((flavor) => {
                    newData.push({ value: flavor, label: flavor })
                })
                setFlavor(newData)
                console.log(newData)
            }
            catch (err) {
                throw err;
            }
        }
        async function getIngredients() {
            try {
                const rawData = await getApi.getSavour()
                var newData = []
                rawData.data.data.map((ingredients) => {
                    newData.push({ value: ingredients.name, label: ingredients.name })
                })
                setIngredients(newData)
                console.log(newData)
            }
            catch (err) {
                throw err;
            }
        }

        async function getFood() {
            try {
                const { data } = await getApi.getFood(10)
                setDish(data.data)
            } catch (error) {
                throw error
            }
        }
        
        async function getSuggestFood() {
            try {
                const { data } = await getApi.maybeYouLike(state.userdata.id, 10)
                setMaybeYouLike(data.data)
                console.log(maybeYouLike)
            } catch (error) {
                throw error
            }
        }
        console.log(state.userdata)
        getFood();
        getFlavors();
        getIngredients();
        getSuggestFood();
    }, [])
    // State
    const [selectedFlavors, setSelectedFlavors] = useState([])
    const [selectedIngredient, setSelectedIngredient] = useState([])

    const [tab, setTab] = useState("suggest")
    function selectedListString(list) {
        var result = ""
        list.map((item) => {
            result += item.value + ", "
        })
        return result
    }

    async function find(taste_type, savours_name, limit) {
        try {
            const result = await getApi.findFood(taste_type, savours_name, limit)
            setSearchResult(result)
        } catch (err) {
            throw err
        }
    }
    const findDish = () => {
        var flavorsStr = []
        var savoursStr = []

        selectedFlavors.map((flavor) => {
            flavorsStr.push(flavor.value)
        })
        selectedIngredient.map((ingredient) => {
            savoursStr.push(ingredient.value)
        })

        find(flavorsStr, savoursStr, 10).then(() => {
            if (searchResult.data.data != undefined)
                navigate('/search-result', { state: { flavors: selectedFlavors, ingredients: selectedIngredient, dishes: searchResult.data.data, userdata: state.userdata } })
        });
    }

    const UserData = {
        img: "https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.2x.rsocial.w600.jpg",
        name: ""
    }

    return (
        <div className="main">
            <body>
                
                <div className="find-section">
                    <h2 className="find-section__title">Cùng tìm ra món ăn yêu thích của bạn</h2>
                    <div className="find-section__flavor">
                        <h3>Chọn hương vị</h3>
                        <ModalFindBy optionsData={flavors} setDataState={setSelectedFlavors} dataState={selectedFlavors}></ModalFindBy>
                        <div className='find-section__flavor__selected'>
                            <p>{selectedListString(selectedFlavors)}</p>
                        </div>
                    </div>
                    <div className="find-section__ingredients">
                        <h3>Chọn nguyên liệu</h3>
                        <ModalFindBy optionsData={ingredients} setDataState={setSelectedIngredient} dataState={selectedIngredient}></ModalFindBy>
                        <div className='find-section__ingredient__selected'>
                            <p>{selectedListString(selectedIngredient)}</p>
                        </div>
                    </div>

                    <Button color='#DD7E26' className="find-button" onClick={() => {
                        findDish()
                    }}>Tìm Kiếm</Button>
                </div>
                <div className="person-section">
                    <ul className='person-section__container'>
                        <li className='person-section__item'><img src={UserData.img} className="person-avatar" /></li>
                        <li className='person-section__item'><p className="person-name">{UserData.name}</p></li>
                        <li className='person-section__item'><button className="person-button" onClick={()=>{
                            navigate('/')
                        }}>Đổi E-mail</button></li>
                        <li className='person-section__item'><button className="person-button" onClick={()=> {navigate('/add-meal', {state: {
                            userdata: state.userdata,
                            flavors: flavors,
                            ingredients: ingredients
                        }})}}>Đăng món ăn</button></li>
                        <li className='person-section__item'><button className="person-button">Các món đã đăng</button></li>
                    </ul>
                </div>
                
                
                
                <div className="recomend-section">
                    <Tabs 
                        id='recomend-section__header__tabs'
                        activeKey={tab}
                        onSelect={(k) => { setTab(k) }}
                    >
                        <Tab eventKey="suggest" title="Được nhiều người thích">
                            <div className='cover_item'>
                                {dish.map((food, index) => {
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
                        <Tab eventKey="trend" title="Có thể bạn thích">
                        <div className='cover_item'>
                                {maybeYouLike.map((food, index) => {
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
            </body>
        </div>
    );
}

export default Home;