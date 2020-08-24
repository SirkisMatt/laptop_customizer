import React, { Component } from 'react'


class LaptopAdd extends Component {
    render () {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });
        
            const selectedOption = this.props.selectedOption;
      
            return (
              <div className="summary__option" >
                <div className="summary__option__label">{this.props.feature} </div>
                <div className="summary__option__value">{selectedOption.name}</div>
                <div className="summary__option__cost">
                  {USCurrencyFormat.format(selectedOption.cost)}
                </div>
              </div>
            )
    }
}

export default LaptopAdd