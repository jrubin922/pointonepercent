import React, { Component } from 'react';

export default class DonationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { 
            annualIncome,
            percentageOfIncome,
            recommendedDonationAmount
        } = this.props;

        return (
            <div>
                <header>
                    <h1>Point One Percent Challenge</h1>
                </header>
                <div>
                    <input 
                        type="number"
                        name="annual-income"
                        placeholder="25,000"
                        min="0" />
                </div>
                <div>
                    <input
                        type="number"
                        name="percentage-of-income"
                        value={percentageOfIncome}
                        min="0" />
                </div>
                <div>
                    <input
                        type="number"
                        name="donation-amount"
                        placeholder="25"
                        min="0"/>
                </div>
            </div>
        );
    }
}