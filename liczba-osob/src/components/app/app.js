import React, {Component} from 'react'
import AppHeader from "../app-header/app-header";
import PostList from "../post-list";
import AppFooter from "../app-footer";


import styled from "styled-components";
import axios from "axios";


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
            data : [],
            lineNum: 101,
            bus : {
                "555-1423432" :["first", "second", "third", "fourth", "fifth"]
            },
            maxSeats: 39,
        }
    }

    async componentDidMount() {
        try{
            const response = await axios.get('https://arduino-2fa8c-default-rtdb.europe-west1.firebasedatabase.app/.json')
            const data = []
                data.push({
                    people:response.data["People"],
                    date: response.data["Time"]
                })
            this.setState({
                data
            })
            console.log(data)
        }catch (e) {
            console.log(e)
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
        console.log(elements)
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