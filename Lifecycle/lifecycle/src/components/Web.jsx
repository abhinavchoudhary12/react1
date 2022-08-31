// import React, { Component } from "react";

// class Web extends Component {
//   state = {
//     username:"",
//     password:"",
//   };
//   submit = () => {
    
//     alert("form submited");
//   };
//   prevent = (event) => {
//     event.preventDefault();
  
    

    
  
//   handle = (event) => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]:value
//     });
//   };

//   render() {
//     return (
//       <>
//         <div className="text-center my-4 ">
//           <form onSubmit={this.prevent}>
//             <label>Username:</label>
//             <input
//               type="text"
//               name="username"
              
//               value={this.state.username}
//               onChange={this.handle}
//             ></input>
//             <br />
//             <label>Password:</label>

//             <input
//               type="password"
//               name="password"
              
//                value={this.state.password}
//                onChange={this.handle}
//             ></input>
//             <br />

//             <button type="submit" className="btn btn-primary" onSubmit={this.submit}>submit</button>
//           </form>
//           {/* {JSON.stringify(this.state.data)} */}
//         </div>
//       </>
//     );
//   }
// }

// export default Web;
