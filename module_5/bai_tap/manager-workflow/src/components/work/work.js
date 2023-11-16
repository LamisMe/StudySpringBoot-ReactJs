import React from "react";

class Work extends React.Component{
    constructor(props){
        super(props)
        this.state = {
         list : [
            {
                id : 1,
                name: "Ngủ dậy"
            },
            {
                id : 2,
                name: "Ăn sáng"
            }
        ],
        item : {}
        }    
        
    }
    handleChange = (event) =>{
        const {value} = event.target;
        this.setState({...this.state, item: {id: Math.floor(Math.random() * 100), name: value}})
    }
    handleAddItem = () => {
        console.log(this.state);
        this.setState({...this.state, list: [...this.state.list, this.state.item]})
    }
    render(){
        return(
            <>
            <h1>Thêm công việc</h1>
            <input onChange={(event) =>this.handleChange(event)} ></input>
            <button onClick={this.handleAddItem}>Add</button>
            <h1>Danh sách công việc hôm nay</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Công việc</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.list.map((job,index) =>
                     <tr key={job.id}>
                        <td>{index+1}</td>
                        <td>{job.name}</td>
                    </tr>)}
                </tbody>
            </table>
            </>
        )
    }
    
}
export default Work;