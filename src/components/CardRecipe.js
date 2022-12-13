import React from "react"
import {Card, Button} from "react-bootstrap"
import ReactStars from "react-rating-stars-component"

function CardRecipe(props){
    return (
        <Card style={{width:"15vw"}}>
            <Card.Img className="image" src={props.imgSrc}/>
            <Card.Title className="title">{props.name}</Card.Title>
            {props.tags.map((tag, index)=>{
                return <Button key={"tag-"+index} className="tag" disabled={true}>{tag}</Button>
            })}
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