import React, { Component } from 'react'
import LaptopAdd from '../LaptopAdd/LaptopAdd'
import Total from '../Total/Total'


class AddAndSum extends Component {
    render () {
        const summary = Object.keys(this.props.selected).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
      
            return (
            <LaptopAdd 
            key={featureHash}
            feature={feature}
            selectedOption={this.props.selected[feature]}
            />
            );
          });

        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                {summary}
                <Total 
                selected={this.props.selected}
                />
                
            </section>
        );
    }
}

export default AddAndSum