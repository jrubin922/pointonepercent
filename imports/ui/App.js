import React, { Component } from 'react';
 
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
            <div>
                <header>
                    <h1>Point One Percent Challenge</h1>
                </header>
                <div>Your Salary: <input type="number" name="salary" min="0"/></div>
            </div>
        );
    }
}