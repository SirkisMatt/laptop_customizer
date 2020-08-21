import React, { Component } from 'react'

class Total extends Component {
    render () {
        return (
            <div className="main__summary">
               <h2>Your cart</h2>
               <div className="summary__total">
                <LaptopAdd />
                <Total />
               </div>
            </div>
        );
    }
}