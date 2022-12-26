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
    const [userData, setUserData] = useState({})
    const [flavors, setFlavor] = useState({})
    const [ingredients, setIngredients] = useState({})

    const [dish, setDish] = useState([])
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
        getFlavors();
        getIngredients();
        getFood();
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

    const findDish = () => {
        navigate('/search-result', { state: { flavors: selectedFlavors, ingredients: selectedIngredient } })
    }

    const UserData = {
        img: "https://pyxis.nymag.com/v1/imgs/e6c/02c/cbe672af6609198720b69efd475ab5f641-avatar-last-airbender.2x.rsocial.w600.jpg",
        name: state.name
    }

    const DishCardData = {
        id: 1,
        img: "https://trivietphat.net/wp-content/uploads/2022/01/Tri-Viet-Phat-Top-10-loai-xot-an-kem-beefsteak-dang-cap-5-sao-1.jpg",
        name: "BÒ BEEF STEAK CỦA ĐỨC PHÚC",
        tags: ["Bò", "Đậm", "Mặn", "Ngọt"],
        rating: 3.2,
        voting: 3000,
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

                    <Button color='#DD7E26' className="find-button" onClick={findDish}>Tìm Kiếm</Button>
                </div>
                <div className="person-section">
                    <ul className='person-section__container'>
                        <li className='person-section__item'><img src={UserData.img} className="person-avatar" /></li>
                        <li className='person-section__item'><p className="person-name">{UserData.name}</p></li>
                        <li className='person-section__item'><button className="person-button">Đổi E-mail</button></li>
                        <li className='person-section__item'><button className="person-button">Đăng món ăn</button></li>
                        <li className='person-section__item'><button className="person-button">Các món đã đăng</button></li>
                    </ul>
                </div>
                <div className="recomend-section">
                    <Tabs
                        id='recomend-section__header__tabs'
                        activeKey={tab}
                        onSelect={(k) => { setTab(k) }}
                    >
                        <Tab eventKey="suggest" title="Có thể bạn thích">
                            <div>
                                {dish.map((food, index) => {
                                    return <CardRecipe
                                        dishId={food.id}
                                        imgSrc={food.img}
                                        name={food.name}
                                        tags={food.savours_name}
                                        rating={food.rating.avg_rating}
                                        voting={food.rating.total_rating}
                                        key={index}
                                    />
                                })}

                            </div>
                        </Tab>
                        <Tab eventKey="trend" title="Được nhiều người thích"></Tab>
                    </Tabs>
                </div>
            </body>
        </div>
    );
}

export default Home;