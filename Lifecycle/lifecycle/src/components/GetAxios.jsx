import React, { Component } from 'react';
import axios from 'axios';
class GetAxios extends Component {
   
    state = { data:[]   }
    componentDidMount(){ 
        axios
        .get("https://dummy.restapiexample.com/api/v1/employees/")
        .then((response) => {
          this.setState({
            data:response.data,
          });
        })
        .catch((error) => {
          alert(error);
        });
    }
    render() { 
        return ( <>
       <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">course</th>
      <th scope="col">Section</th>
    </tr>
  </thead>
  <tbody>
    {this.state.data.map((student)=>(
 <tr key={student.id}>
 <th scope="row">{student.id}</th>
 <td>{student.employee_name}</td>
 <td>{student.employee_salary}</td>
 <td>{student.empliyee_age}</td>
</tr>
    ))}
   
    
  </tbody>
</table>
        </> );
    }
}
 
export default GetAxios;