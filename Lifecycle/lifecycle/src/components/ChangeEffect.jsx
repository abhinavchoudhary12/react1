import React, { Component } from 'react';
import ComponentHOC from './ComponentHOC';
import { Name } from './contextname.js';
class ChangeEffect extends Component {
    
    render() { 
        return (

            <>
            
            <div className='text-center'>
            <button className='btn btn-warning' onClick={()=>this.props.onChange()}>Clickme</button>
            <h1 style={{color:this.props.Color}}><Name.Consumer>{(value)=>value}</Name.Consumer></h1>
            
            </div>
            </>
        );
    }
}
 
export default ComponentHOC(ChangeEffect);