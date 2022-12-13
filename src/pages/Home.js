import React, { useState } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Tab, Tabs } from 'react-bootstrap';
import ModalFindBy from '../components/ModalFindBy';
import CardRecipe from '../components/CardRecipe';
function Home() {
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

    // Test Data
    const FlavorsData = [
        { value: 'Mặn', label: 'Mặn' },
        { value: 'Ngọt', label: 'Ngọt' },
        { value: 'Đắng', label: 'Đắng' },
        { value: 'Chua', label: 'Chua' },
        { value: 'Cay', label: 'Cay' },
        { value: 'Đậm', label: 'Đậm' },
        { value: 'Thanh', label: 'Thanh' },
    ]

    const IngredientsData = [
        { value: 'Thịt Heo', label: 'Thịt heo' },
        { value: 'Thịt Bò', label: 'Thịt bò' },
        { value: 'Xà lách', label: 'Xà lách' },
        { value: 'Chanh', label: 'Chanh' },
        { value: 'Cà chua', label: 'Cà chua' },
        { value: 'Khoai tây', label: 'Khoai tây' },
        { value: 'Hành lá', label: 'Hành lá' },
        { value: 'Hành tây', label: 'Hành tây' },
    ]

    const UserData = {
        img: "",
        name: "Minh Quang"
    }

    const DishCardData = {
        img: "",
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
                        <ModalFindBy optionsData={FlavorsData} setDataState={setSelectedFlavors} dataState={selectedFlavors}></ModalFindBy>
                        <div className='find-section__flavor__selected'>
                            <p>{selectedListString(selectedFlavors)}</p>
                        </div>
                    </div>
                    <div className="find-section__ingredients">
                        <h3>Chọn nguyên liệu</h3>
                        <ModalFindBy optionsData={IngredientsData} setDataState={setSelectedIngredient} dataState={selectedIngredient}></ModalFindBy>
                        <div className='find-section__ingredient__selected'>
                            <p>{selectedListString(selectedIngredient)}</p>
                        </div>
                    </div>

                    <Button color='#DD7E26' className="find-button" onClick={() => {
                        setSelectedFlavors([]);
                        setSelectedIngredient([]);
                    }}>Tìm Kiếm</Button>
                </div>
                <div className="person-section">
                    <ul className='person-section__container'>
                        <li className='person-section__item'><img srd={UserData.img} /></li>
                        <li className='person-section__item'><p>{UserData.name}</p></li>
                        <li className='person-section__item'><Button>Đổi E-mail</Button></li>
                        <li className='person-section__item'><Button>Đăng món ăn</Button></li>
                        <li className='person-section__item'><Button>Các món đã đăng</Button></li>
                    </ul>
                </div>
                <div className="recomend-section">
                    <Tabs
                        id='recomend-section__header__tabs'
                        activeKey={tab}
                        onSelect={(k) => { setTab(k) }}
                    >
                        <Tab eventKey="suggest" title="Có thể bạn thích">
                            <CardRecipe
                                imgSrc={DishCardData.img}
                                name={DishCardData.name}
                                tags={DishCardData.tags}
                                rating={DishCardData.rating}
                                voting={DishCardData.voting}
                            />
                        </Tab>
                        <Tab eventKey="trend" title="Được nhiều người thích"></Tab>
                    </Tabs>
                </div>
            </body>
        </div>
    );
}

export default Home;