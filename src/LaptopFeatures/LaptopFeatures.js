import React, { Component } from 'react'
import STORE from '../store'
import FeatureOption from '../FeatureOption/FeatureOption'

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';
//import LaptopBuild from '../LaptopBuild/LaptopBuild'

class LaptopFeatures extends Component {
    render () {
        let features = STORE.features
        let feature = this.props.feature
      
            const laptopFeatures = features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
            
            return (
             <FeatureOption 
             updateFeature={this.props.updateFeature}
             feature={feature}
             selected={this.props.selected}
             item={item}
             key={itemHash}
             />
            );
          });
          return (
          <div>{laptopFeatures}</div>
          )
    }
}

export default LaptopFeatures