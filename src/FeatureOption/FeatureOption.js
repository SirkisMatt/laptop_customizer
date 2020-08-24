import React, { Component } from 'react'


// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
//import LaptopBuild from '../LaptopBuild/LaptopBuild'

class FeatureOption extends Component {
    render () {
        const feature = this.props.feature
        const item = this.props.item
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });
            
          const itemHash = slugify(JSON.stringify(item));
            
            return (
              <div className="feature__item">
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
    }
}

export default FeatureOption