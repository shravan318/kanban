import React from "react"
import styled from "styled-components"
import Tasks from "./Tasks"

const Container = styled.div`
margin: 8px;
border: 1px solid gray;
border-radius: 5px`
const Title = styled.h3`
padding: 8px`
const Tasklist = styled.div`
padding: 8px`
export default class StageColumn extends React.Component {
    render (){
        console.log(this.props.tasks)
        return (
            <Container>
                <Title>
                {this.props.stage.title}
                </Title>
                <Tasklist>{this.props.tasks.map(eachTask => <Tasks key={eachTask.id} eachTask={eachTask}/>)}</Tasklist>
            </Container>
        )
    }
}