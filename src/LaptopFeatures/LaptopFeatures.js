import React, { Component } from 'react'
import STORE from '../store'
import slugify from 'slugify';
//import LaptopBuild from '../LaptopBuild/LaptopBuild'

class LaptopFeatures extends Component {
    render () {
        let features = STORE.features
        let feature = this.props.feature
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });
            const laptopFeatures = features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            
            return (
              <div key={itemHash} className="feature__item">
                <input
                  type="radio"
                  id={itemHash}
                  className="feature__option"
                  name={slugify(feature)}
                  checked={item.name === this.props.selected[feature].name}
                  onChange={e => this.props.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                  {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
              </div>
            );
          });
          return (
          <div>{laptopFeatures}</div>
          )
    }
}

export default LaptopFeatures