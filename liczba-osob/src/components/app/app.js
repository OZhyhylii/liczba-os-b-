import React, {Component} from 'react'
import AppHeader from "../app-header/app-header";
import PostList from "../post-list";
import AppFooter from "../app-footer";
import './app.css';

import styled from "styled-components";


const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`
const Block = styled.div `
height: 85vh;
`

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {   time: `${12}:${12}`,
                    nowSeats:17,
                    id: "fsfdsfsd"}

            ],
            lineNum: 101,
            bus : {
                    "55M" :["first", "second", "third", "fourth", "fifth"]
            },
            maxSeats: 39,
         }
    }
    isEmpty = (obj) => {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    render() {
        const {data, bus, lineNum, maxSeats} = this.state

        const elements = data.map( (item) => {
            if ( typeof item === 'object' && this.isEmpty(item) ) {
                return item;
                }
            }
        )

        return (
            <>
                <Block>
                    <AppHeader/>
                    <AppBlock>
                        <PostList
                           peopleInfo={elements}
                           bus={bus}
                            line={lineNum}
                            max={maxSeats}/>
                    </AppBlock>
                </Block>
                <AppFooter/>
            </>
        );
    }
}


