import React from "react"
import styled from "styled-components"

const Container = styled.div`
border: 1px solid gray;
border-radius: 5px;
padding:8px;
margin-bottom:8px
`

export default class Tasks extends React.Component {
    render(){
        return (
            <Container>
                {this.props.eachTask.content}
            </Container>
        )

    }
}