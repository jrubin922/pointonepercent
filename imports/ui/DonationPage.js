import React, { Component } from 'react';

export default class DonationPage extends Component {
    constructor(props) {
        super(props);
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