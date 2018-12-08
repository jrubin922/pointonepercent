import React, { Component } from 'react';
import DonationPage from './DonationPage.js'
 
// App component - represents the whole app
export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            annualIncome: null,
            percentageOfIncome: 0.1,
            recommendedDonationAmount: null
        }
        this._handleAnnualIncomeChange = this._handleAnnualIncomeChange.bind(this);
        this._handleDonationPayment = this._handleDonationPayment.bind(this);
    }

    render() {
        return (
            <DonationPage 
                annualIncome={this.state.annualIncome}
                percentageOfIncome={this.state.percentageOfIncome}
                recommendedDonationAmount={this.state.recommendedDonationAmount}
                handleAnnualIncomeChange={this._handleAnnualIncomeChange}/>
        );
    }

    _handleAnnualIncomeChange = (annualIncome) => {
        const { percentageOfIncome } = this.state;
        const newDonationAmount = annualIncome * (percentageOfIncome / 100);
        this.setState( { recommendedDonationAmount: newDonationAmount });
    }

    _handleDonationPayment = (donationAmount) => {
        // Handle payment stuff in this function
    }
}