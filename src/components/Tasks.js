import React from "react"
import styled from "styled-components"
import {Draggable} from "react-beautiful-dnd"

const Container = styled.div`
border: 1px solid gray;
border-radius: 5px;
padding:8px;
margin-bottom:8px;
background-color: #ebeeee
`

export default class Tasks extends React.Component {
    render(){
        console.log(this.props,"this.props.eachTask")
        return (
            <Draggable draggableId={ this.props.eachTask.id} index={this.props.index}>
                {(provided)=> (
            <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
           ref={provided.innerRef} 
            >
                {this.props.eachTask.content}
            </Container>

                )}
            </Draggable>
        )

    }
}