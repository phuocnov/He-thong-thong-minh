import React from "react"
import { Card } from "react-bootstrap"
import ReactStars from "react-rating-stars-component"
import { useNavigate } from "react-router"
import './CardRecipe.css'

function CardRecipe(props) {
    const navigate = useNavigate()
    return (
        <Card className="card" onClick={()=>navigate('/detail-meal', {state: {
            id: props.dishId
        }})}>
            <Card.Img className="image" src={props.imgSrc} />
            <Card.Title className="title">{props.name}</Card.Title>
            <Card.Body>
                {props.tags.map((tag, index) => {
                    return <div key={"tag-" + index} className="tag">{tag}</div>
                })}
            </Card.Body>
            <p className="rating">{"Đánh giá " + props.voting + " lượt"}</p>
            <ReactStars
                count={5}
                value={props.rating}
                activeColor="#FFC403"
                size={20}
                edit={false}
            />
        </Card>
    )
}

export default CardRecipe