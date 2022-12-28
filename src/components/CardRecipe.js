import React from "react"
import { Card } from "react-bootstrap"
import ReactStars from "react-rating-stars-component"
import { useNavigate } from "react-router"
import './CardRecipe.css'

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

function CardRecipe(props) {
    const navigate = useNavigate()
    return (
        <Card className="card" onClick={() => navigate('/detail-meal', {
            state: {
                id: props.dishId,
                name: props.name,
                savours_name: props.savours_name,
                taste_type: props.taste_type,
                rating: props.rating,
                voting: props.voting,
                img: props.img,
                created_at: props.created_at,
                userdata: props.userdata
            }
        })}>
            <Card.Img className="image" src={props.img} />
            <Card.Title className="title">{props.name}</Card.Title>
            <Card.Body>
                {props.savours_name.map((tag, index) => {
                    return <div key={"tag-" + index} className="tag">{tag}</div>
                    // return <div key = {"tag-"+index} className="tag"></div>
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