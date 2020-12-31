import React from 'react';

import './post-list.css'
import styled from "styled-components";


const TitleBus = styled.div `
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 21px;
  color: #003521;
  
  margin-top: 110px;
  margin-left: 20px;
  margin-bottom: 15px;
`

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
                    <TitleBus color="secondary title">Autobus: {busName}</TitleBus>
                    <div  className='list-group-item'>
                        <Item>Czas:<br/>{time}</Item>
                        <Item>Linia:<br/>{linia}</Item>
                        <Item>Przystanek końcowy:<br/>{stancia}</Item>
                        <Item>Przystanek aktualny:<br/>{concova}</Item>
                        <Item>Miejsca:<br/>{nowMest}/{maxMest}</Item>
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