import React from "react";

class Student extends React.Component{
    render(){
        const Students = [
            {
                id: 1,
                name: "LNTN",
                age: 22,
                address: "Quảng Bình"
            },
            {
                id: 2,
                name: "TQK",
                age: 24,
                address: "Hà Tĩnh"
            },
            {
                id: 3,
                name: "TTT",
                age: 23,
                address: "Quảng Bình"
            }
        ]
        return(
            <>
            <h1>Danh sách học sinh</h1>
            <table class="table table-hover">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Tuổi</th>
                    <th>Địa chỉ</th>
                </tr>
                </thead>
                <tbody>
                    {Students.map((item,index) => 
                    <tr key={item.id}>
                           <td>{index+1}</td>     
                           <td>{item.name}</td>     
                           <td>{item.age}</td>     
                           <td>{item.address}</td>     
                    </tr>
                    )}
                </tbody>
            </table>
            </>
        )
    }
}

export default Student;