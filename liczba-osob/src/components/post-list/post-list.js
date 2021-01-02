import React from 'react';

import './post-list.css'
import styled from "styled-components";


const TitleBus = styled.div `
  
  margin-top: 110px;
  margin-left: 20px;
  margin-bottom: 15px;
  
 

  h1 {

    color: #000000;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;

    transition: 0.5s;
    
    :hover {
      color: darkcyan;
    }
`

const Item = styled.div`
  color: #000000;
  font-size: 18px;
  font-weight: 500;
  font-family: Roboto, sans-serif;
`

const PostList = ({peopleInfo, bus, line}) => {
    const elements = peopleInfo.map( (item) => {
        if ( typeof item === 'object' && isEmpty(item) ){
            const {id, maxSeats, nowSeats, time} = item;
            const lines = Object.keys(line),
                  lineNumber = 0, // choose line
                  lineInfo = line[lines[lineNumber]];
            return (
                <div key={id}>
                    <TitleBus color="secondary title"><h1>Autobus: {bus}</h1></TitleBus>
                    <div  className='list'>
                        <Item>Czas:<br/>{`${time}`}</Item>
                        <Item>Linia:<br/>{lines[lineNumber]}</Item>
                        <Item>Przystanek aktualny:<br/>{lineInfo[peopleInfo.length-1]}</Item>
                        <Item>Przystanek końcowy:<br/>{lineInfo[lineInfo.length-1]}</Item>
                        <Item>Miejsca:<br/>{nowSeats}/{maxSeats}</Item>
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
            {elements[elements.length-1]}
        </div>
    )
}

export default PostList;