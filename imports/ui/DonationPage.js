import React, { Component } from 'react';

export default class DonationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            // Props
            annualIncome,
            percentageOfIncome,
            recommendedDonationAmount,

            // Handlers
            handleAnnualIncomeChange,
            handlePercentageOfIncomeChange,
            handleDonationAmountChange
        } = this.props;

        const handleAnnualIncomeEvent = (event) => {
            handleAnnualIncomeChange(event.target.value);
        };

        const handlePercentageOfIncomeEvent = (event) => {
            handlePercentageOfIncomeChange(event.target.value);
        };

        const handleDonationAmountEvent = (event) => {
            handleDonationAmountChange(event.target.value);
        }

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
                        value={annualIncome}
                        onChange={handleAnnualIncomeEvent}
                        min="0" />
                </div>
                <div>
                    <input
                        type="number"
                        name="percentage-of-income"
                        value={percentageOfIncome}
                        onChange={handlePercentageOfIncomeEvent}
                        min="0" />
                </div>
                <div>
                    <input
                        type="number"
                        name="donation-amount"
                        placeholder="25"
                        value={recommendedDonationAmount}
                        onChange={handleDonationAmountEvent}
                        min="0"/>
                </div>
            </div>
        );
    }
}