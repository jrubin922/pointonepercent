import React, { Component } from 'react';
import DonationPage from './DonationPage.js'
 
// App component - represents the whole app
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            annualIncome: 25000,
            percentageOfIncome: 0.1,
            recommendedDonationAmount: 25
        }
    }

    render() {
        return (
           <DonationPage />
        );
    }

    _handleDonationPayment = (donationAmount) => {
        // Handle payment stuff in this function
    }
}