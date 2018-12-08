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
    }

    render() {
        return (
            <DonationPage 
                annualIncome={this.state.annualIncome}
                percentageOfIncome={this.state.percentageOfIncome}
                recommendedDonationAmount={this.state.recommendedDonationAmount} />
        );
    }

    _handleDonationPayment = (donationAmount) => {
        // Handle payment stuff in this function
    }
}