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
                {busName:"55M", time:"17:15", linia:12, stancia: "Lorem Ipsum", concova: "Lorem Ipsum", maxMest: 39, nowMest:17,  id: "fsfdsfsd"},

            ]
        }
    }


    render() {

        const {data} = this.state
        return (
            <>
                <Block>
                    <AppHeader/>
                    <AppBlock>
                        <PostList
                           posts={data}/>
                    </AppBlock>
                </Block>
                <AppFooter/>
            </>
        );
    }
}


