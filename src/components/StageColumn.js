import React from "react"
import styled from "styled-components"
import Tasks from "./Tasks"
import {Droppable } from "react-beautiful-dnd"

const Container = styled.div`
margin: 8px;
border: 1px solid gray;
border-radius: 5px;
min-width: 200px`
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
                <Droppable droppableId={this.props.stage.id}> 
                {(provided)=>(

                <Tasklist
                ref = {provided.innerRef}
                {...provided.droppableProps}
                >{this.props.tasks.map((eachTask,index) => <Tasks key={eachTask.id} eachTask={eachTask} index={index}/>)}
                {provided.placeholder}
                </Tasklist>
                )}
                </Droppable>
            </Container>
        )
    }
}