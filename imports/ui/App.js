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
        this._handlePercentageOfIncomeChange = this._handlePercentageOfIncomeChange.bind(this);
        this._handleDonationAmountChange = this._handleDonationAmountChange.bind(this);
        this._handleDonationPayment = this._handleDonationPayment.bind(this);
    }

    render() {
        return (
            <DonationPage 
                annualIncome={this.state.annualIncome}
                percentageOfIncome={this.state.percentageOfIncome}
                recommendedDonationAmount={this.state.recommendedDonationAmount}
                handleAnnualIncomeChange={this._handleAnnualIncomeChange}
                handlePercentageOfIncomeChange={this._handlePercentageOfIncomeChange}
                handleDonationAmountChange={this._handleDonationAmountChange}/>
        );
    }

    _handleAnnualIncomeChange = (annualIncome) => {
        const { percentageOfIncome } = this.state;
        const newDonationAmount = annualIncome * (percentageOfIncome / 100);
        this.setState({ 
            annualIncome: annualIncome,
            recommendedDonationAmount: newDonationAmount
        });
    }

    _handlePercentageOfIncomeChange = (percentageOfIncome) => {
        const { annualIncome } = this.state;
        const newDonationAmount = annualIncome * (percentageOfIncome / 100);
        this.setState({
            percentageOfIncome: percentageOfIncome,
            recommendedDonationAmount: newDonationAmount
        });
    }

    _handleDonationAmountChange = (donationAmount) => {
        const { annualIncome } = this.state;
        const newPercentageOfIncome = (donationAmount / annualIncome) * 100;
        this.setState({
            percentageOfIncome: newPercentageOfIncome,
            recommendedDonationAmount: donationAmount
        });
    }

    _handleDonationPayment = (donationAmount) => {
        // Handle payment stuff in this function
    }
}