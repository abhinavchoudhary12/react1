import React, { Component } from 'react';
import ComponentHOC from './ComponentHOC';
import { Name } from './contextname';
class OnHover extends Component {
    state = {  } 
    render() { 
        return (<>
        <div className='text-center'>
            <h1 style={{color:this.props.Color}} onMouseOver={()=>this.props.onChange()}><Name.Consumer>{(value)=>value}</Name.Consumer></h1>
            </div>
            </>);
    }
}
 
export default ComponentHOC(OnHover);