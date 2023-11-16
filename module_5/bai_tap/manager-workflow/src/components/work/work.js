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
    handleRemoveItem = (
        id) =>{
        console.log(id);
        const listNew = [...this.state.list];
        for (let i =0; i< listNew.length;i++) {
            if (id === listNew[i].id) {
               listNew.splice(i,1);
               break;
            }
        }
        this.setState({...this.state,list :[...listNew]})
    }
    render(){
        return(
            <>
            <h1>Thêm công việc</h1>
            <input onChange={(event) =>this.handleChange(event)} ></input>
            <button onClick={this.handleAddItem}>Thêm</button>
            <h1>Danh sách công việc hôm nay</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Công việc</th>
                        <th>Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.list.map((job,index) =>
                     <tr key={job.id}>
                        <td>{index+1}</td>
                        <td>{job.name}</td>
                        <td><button onClick={()=>this.handleRemoveItem(job.id)}>Xóa
                            </button></td>
                    </tr>)}
                </tbody>
            </table>
            </>
        )
    }
    
}
export default Work;