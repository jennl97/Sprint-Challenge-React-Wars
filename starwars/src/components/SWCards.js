import React from 'react';
import styled from 'styled-components';


//styled components

let Name = styled.h1`
    color: red;
`

let Wrapper = styled.div`
background-color: white;
padding: 15px;
width: 50%;
margin-left: 25%;
`;

function SWCards (props) {

    console.log('propsData: ', props.data2);

   
    return(
        <div>
            <Wrapper>
           <Name>{props.name}</Name>
            <p>height: {props.height} cm </p>
            <p>weight: {props.mass} kilos</p>
            <p>hair color: {props.hairColor}</p>
            <p>eye color: {props.eyeColor}</p>
            </Wrapper>
        </div>
    )
}

export default SWCards;