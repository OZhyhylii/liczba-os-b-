import React from 'react';

import './post-list.css'
import {Badge} from "reactstrap";
import styled from "styled-components";

const Item = styled.div`
  
  color: #003521;
  font-size: 18px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
`

const PostList = ({posts}) => {

    const elements = posts.map( (item) => {
        // Простой способ проверки на объект + содержится ли в нем информация
        if ( typeof item === 'object' && isEmpty(item) ){
            const {id, busName, time, linia, stancia, concova, maxMest, nowMest} = item;
            return (
                <div key={id}>
                    <h4><Badge color="secondary title">Autobus: {busName}</Badge></h4>
                    <div  className='list-group-item'>
                        <Item>Czas:<br/>{time}</Item>
                        <Item>Linia:<br/>{linia}</Item>
                        <Item>Przystanek końcowy:<br/>{stancia}</Item>
                        <Item>Przystanek aktualny:<br/>{concova}</Item>
                        <Item>Miejsca:<br/>{maxMest}/{nowMest}</Item>
                    </div>
                </div>
            )
        }
    })

    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    return (
        <div className="app-list list-group">
            {elements}
        </div>
    )
}

export default PostList;