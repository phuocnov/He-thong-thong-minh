import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import ReactStars from "react-rating-stars-component"
import { useLocation, useNavigate } from "react-router"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './SearchResult.css'
function SearchResult() {
    const navigate = useNavigate()

    const results = [
        {
            img: "https://img-global.cpcdn.com/recipes/d6e7e5be63e9b58b/680x482cq70/th%E1%BB%8Bt-kho-tieu-recipe-main-photo.jpg",
            dishName: "Thịt kho củ cải",
            ingredients: [
                "Thịt heo ba chỉ",
                "Củ cải",
                "Tiêu đen",
                "Nước mắm"
            ],
            recipe: "",
            rating: 4.3,
            voting: 1200
        },
        {
            img: "https://img-global.cpcdn.com/recipes/d6e7e5be63e9b58b/680x482cq70/th%E1%BB%8Bt-kho-tieu-recipe-main-photo.jpg",
            dishName: "Thịt kho củ cải",
            ingredients: [
                "Thịt heo ba chỉ",
                "Củ cải",
                "Tiêu đen",
                "Nước mắm"
            ],
            recipe: "",
            rating: 4.3,
            voting: 1200
        },
        {
            img: "https://img-global.cpcdn.com/recipes/d6e7e5be63e9b58b/680x482cq70/th%E1%BB%8Bt-kho-tieu-recipe-main-photo.jpg",
            dishName: "Thịt kho củ cải",
            ingredients: [
                "Thịt heo ba chỉ",
                "Củ cải",
                "Tiêu đen",
                "Nước mắm"
            ],
            recipe: "",
            rating: 4.3,
            voting: 1200
        },
    ]

    const { state } = useLocation()
    const [data, setData] = useState({
        flavors: [],
        ingredients: []
    })
    useEffect(() => {
        setData(state)
        console.log(data)
    },)

    return (
        <div className="search">
            <div className="selected-options">
                <p className="selected-category">Hương vị</p>
                {data.flavors.map((flavor, index) => {
                    return <div className="options-tags" key={'flavor-' + index}>{flavor.value}</div>
                })}
                <p className="selected-category">Nguyên liệu</p>
                {data.ingredients.map((ingredient, index) => {
                    return <div className="options-tags" key={'ingredient-' + index}>{ingredient.value}</div>
                })}
                <Button onClick={() => { navigate('/') }}>Trở về trang trước</Button>
            </div>
            <Container className="selected-result">
                {results.map((result, index) => {
                    return <Row className="result-container" key={'result' + index} onClick={() => {
                        navigate('/detail-meal', {
                            state: {}
                        })
                    }}>
                        <Col>
                            <img className="result-image" src={result.img}></img>
                        </Col>
                        <Col xs={9}>
                            <p className="result-title">{result.dishName}</p>
                            <p>{"Nguyên liệu: " + result.ingredients.map((ingredient) => { return ingredient + ', ' })}</p>
                            <p>{"Công thức: " + result.recipe}</p>
                            <p>
                                {"Đánh giá: " + result.voting}
                                <ReactStars
                                    count={5}
                                    value={result.rating}
                                    activeColor="#FFC403"
                                    size={20}
                                    edit={false}
                                />
                            </p>
                        </Col>
                    </Row>
                })}
            </Container>
        </div>
    )
}

export default SearchResult