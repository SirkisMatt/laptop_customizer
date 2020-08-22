import React, { Component } from 'react'



class Total extends Component {
    render () {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });

        const total = Object.keys(this.props.selected).reduce(
            (acc, curr) => acc + this.props.selected[curr].cost,
            0
          );
        return (
            <div className="summary__total">
                <h3 className="summary__total__label">Total</h3>
                <div className="summary__total__value">{USCurrencyFormat.format(total)}</div>
            </div>
        );
    }
}

export default Total