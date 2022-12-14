import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useLocation, useNavigate } from "react-router"
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
            <div className="selected-result">
                {results.map((result, index) => {
                    return <div className="result-container" key={'result' + index}>
                        <img className="result-image"></img>
                        <p className="result-title">{result.dishName}</p>
                        
                    </div>
                })}
            </div>
        </div>
    )
}

export default SearchResult