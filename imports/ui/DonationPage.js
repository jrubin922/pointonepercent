import React, { Component } from 'react';
import PayPalButton from './PayPalButton.js'
import NumberFormat from 'react-number-format';

export default class DonationPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            // Props
            annualIncome,
            percentageOfIncome,
            donationAmount,

            // Handlers
            handleAnnualIncomeChange,
            handlePercentageOfIncomeChange,
            handleDonationAmountChange
        } = this.props;

        const handleAnnualIncomeEvent = (values) => {
            const {formattedValue, value} = values;
            handleAnnualIncomeChange(value);
        };

        const handlePercentageOfIncomeEvent = (values) => {
            const {formattedValue, value} = values;
            handlePercentageOfIncomeChange(value);
        };

        const checkPercentageOfIncomeValue = (values) => {
            const {formattedValue, value} = values;
            return (value >= 0 & value <= 200)
        }

        const handleDonationAmountEvent = (values) => {
            const {formattedValue, value} = values;
            handleDonationAmountChange(value);
        }

        return (
            <div>
                <div>
                    <header>
                        <h1>Point One Percent Challenge</h1>
                    </header>
                </div>
                <div className="donation-steps-row">
                    <div className='donation-steps-column'>
                        <div className='donation-step'>
                            <NumberFormat
                                placeholder="$25,000"
                                value={annualIncome ? annualIncome : ""}
                                thousandSeparator=","
                                decimalSeparator="."
                                allowNegative={false}
                                prefix="$"
                                onValueChange={handleAnnualIncomeEvent}/>
                        </div>
                    </div>
                    <div className='donation-steps-column'>
                        <NumberFormat
                            value={percentageOfIncome ? percentageOfIncome : ""}
                            decimalSeparator="."
                            allowNegative={false}
                            suffix="%"
                            isAllowed={checkPercentageOfIncomeValue}
                            onValueChange={handlePercentageOfIncomeEvent} />
                    </div>
                    <div className='donation-steps-column'>
                        <NumberFormat
                            placeholder="$25"
                            value={donationAmount ? donationAmount : ""}
                            thousandSeparator=","
                            decimalSeparator="."
                            allowNegative={false}
                            prefix="$"
                            onValueChange={handleDonationAmountEvent}
                        />
                    </div>
                </div>

                <div>
                    <PayPalButton 
                        transactionAmount={donationAmount}/>
                </div>
            </div>
        );
    }
}