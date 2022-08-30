import React, { Component } from 'react';

function ComponentHOC(NormalComponent) {
    class EnhencedComponent extends Component {
        state = {color:'red'  }
        
        
        change=()=>{
          const  changeColor="#"+Math.floor(Math.random()*7000100).toString(16)
            console.log(changeColor);
        this.setState({color:changeColor})
        }
        

        render() { 
            return (<>

            <NormalComponent 
            Color={this.state.color}
            onChange={this.change}
            />
            </>);
        }
    }
     
    
    return EnhencedComponent;
}

export default ComponentHOC;