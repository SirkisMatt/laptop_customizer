import React, { Component } from 'react';
import STORE from '../store'
import LaptopFeatures from '../LaptopFeatures/LaptopFeatures'

class LaptopBuild extends Component {
    render () {
        let features = STORE.features
       
        const laptopBuild = Object.keys(features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
          
            return (
                <fieldset className="feature" key={featureHash}>
                  <legend className="feature__name">
                    <h3>{feature}</h3>
                  </legend>
                  <LaptopFeatures
                  updateFeature={this.props.updateFeature}
                  selected={this.props.selected}
                  feature={feature}
                  />
                </fieldset>
              );
        });
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {laptopBuild}
            </form>
        )

    }
}

export default LaptopBuild