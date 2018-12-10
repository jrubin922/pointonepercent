import React, { Component } from 'react';
import HomePage from './HomePage.js';
import DonationPage from './DonationPage.js';

// App component - represents the whole app
export default class App extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            annualIncome: null,
            percentageOfIncome: 0.1,
            donationAmount: null,
        }
        this._handleTakeTheChallengeButton = this._handleTakeTheChallengeButton.bind(this);
        this._handleAnnualIncomeChange = this._handleAnnualIncomeChange.bind(this);
        this._handlePercentageOfIncomeChange = this._handlePercentageOfIncomeChange.bind(this);
        this._handleDonationAmountChange = this._handleDonationAmountChange.bind(this);
        this._handleDonationPayment = this._handleDonationPayment.bind(this);
    }

    render() {
        if (this.state.currentPage === 0) {
            return (
                <HomePage 
                    handleTakeTheChallengeButton={this._handleTakeTheChallengeButton} />
            );
        } else if (this.state.currentPage === 1) {
            return (
                <DonationPage 
                    annualIncome={this.state.annualIncome}
                    percentageOfIncome={this.state.percentageOfIncome}
                    donationAmount={this.state.donationAmount}
                    handleAnnualIncomeChange={this._handleAnnualIncomeChange}
                    handlePercentageOfIncomeChange={this._handlePercentageOfIncomeChange}
                    handleDonationAmountChange={this._handleDonationAmountChange}/>
            );
        }
    }

    _handleTakeTheChallengeButton = () => {
        this.setState({
            currentPage: 1
        });
    }

    _handleAnnualIncomeChange = (annualIncome) => {
        const { percentageOfIncome } = this.state;
        const newDonationAmount = annualIncome * (percentageOfIncome / 100);
        this.setState({ 
            annualIncome: annualIncome,
            donationAmount: newDonationAmount
        });
    }

    _handlePercentageOfIncomeChange = (percentageOfIncome) => {
        const { annualIncome } = this.state;
        const newDonationAmount = annualIncome * (percentageOfIncome / 100);
        this.setState({
            percentageOfIncome: percentageOfIncome,
            donationAmount: newDonationAmount
        });
    }

    _handleDonationAmountChange = (donationAmount) => {
        const { annualIncome } = this.state;
        const newPercentageOfIncome = (donationAmount / annualIncome) * 100;
        this.setState({
            percentageOfIncome: newPercentageOfIncome,
            donationAmount: donationAmount
        });
    }

    _handleDonationPayment = (donationAmount) => {
        // Handle payment stuff in this function
    }
}