// import React, { Component } from 'react';
// import ChangeEffect from './ChangeEffect';
// import OnHover from './OnHover';
// class Lifecycle extends Component {
    
//     constructor(props) {
//         super(props);
//         this.state = { name:"abhinav" }
//     }
//     static getDerievedStateFromProps(props,state)
//     {
//         console.log("i am getState from props")
//     }
//     shouldComponentUpdate(Prevprops,PrevState)
//     {
//        const a=PrevState.name===this.state.name?false:true;
      
//        return a;
       
//     }
//         //count=0
//     // change=()=>{
//     //     this.setState({name:"Abhinav Choudhary"})
//     //     this.count++;
//     //     this.count>5?this.setState({name:"stop"}):this.setState({name:"Abhinav choudhary"});

//     //    }
//     change=()=>{
//         this.setState({name:"abhinav Choudhary"})
//     }
//     col="green";
    
//     changeColor=()=>{
//         this.col="red";
//     }
//     render() {
//         console.log("Lifecycle render")
        
//         return (<>
//         <ChangeEffect 
//          State={this.state.name}
//          onChange={this.change}/>
//         <OnHover/>
//         </>); 
//     }
// }
 
// export default Lifecycle;