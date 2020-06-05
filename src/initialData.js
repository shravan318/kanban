const initialData ={
    task: {
        "task1": {
            id:"task1",
            content: "Task-1"
        },
        "task2": {
            id:"task2",
            content: "Task-2"
        },
        "task3": {
            id:"task3",
            content: "Task-3"
        },
    },
    Stage: {
        "stage1":{
            id: "stage1",
            title: "Backlog",
            taskID: ["task1","task2","task3"]
        },
    },
    stageOrder : ["stage1"]
}
export default initialData