import React, { Component } from 'react'
import LaptopAdd from '../LaptopAdd/LaptopAdd'
import Total from '../Total/Total'

class AddAndSum extends Component {
    render () {
        return (
            <div className="main__summary">
               <h2>Your cart</h2>
               <div className="summary__total">
                <LaptopAdd 
                selected={this.props.selected}
                />
                <Total selected={this.props.selected}/>
               </div>
            </div>
        );
    }
}

export default AddAndSum