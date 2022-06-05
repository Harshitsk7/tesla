import React from 'react'
import styled from 'styled-components'

function Section4({title,backgroundImage,buttontext}){
    return(
        <Wrap bgImage={backgroundImage}>

        <ItemText>
            <h1>
                {title}
            </h1>
        </ItemText>

        <Button>
            {buttontext}
        </Button>

        </Wrap>
    )
}


export default Section4
const Wrap=styled.div`
width:75%;
height:50vh;
float:right;
background-size:cover;
background-position:center;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
background-image: ${props => `url("/images/${props.bgImage}")`}
`
const ItemText=styled.div``
const Button=styled.div` background-color:rgb(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`