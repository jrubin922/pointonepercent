import React, { Component } from 'react';
import PayPalButton from './PayPalButton.js'
import NavigationBar from './NavigationBar.js'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody, Row, Col } from 'reactstrap';
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
                <NavigationBar />
                <div className="donation-page-content">
                    <div className="slogan">Be The Change.</div>
                    <div className="donation-steps-row">
                        <div className='donation-steps-column'>
                            <div className='donation-step'>
                                <div className='donation-step-message'>Enter your annual income:</div>
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
                        <div className='donation-steps-column-symbol'><div className='symbol'>x</div></div>
                        <div className='donation-steps-column'>
                            <div className='donation-step-message'>Let's multiply by 0.1%:</div>
                            <NumberFormat
                                value={percentageOfIncome ? percentageOfIncome : ""}
                                decimalSeparator="."
                                allowNegative={false}
                                suffix="%"
                                isAllowed={checkPercentageOfIncomeValue}
                                onValueChange={handlePercentageOfIncomeEvent} />
                        </div>
                        <div className='donation-steps-column-symbol'><div className='symbol'>=</div></div>
                        <div className='donation-steps-column'>
                            <div className='donation-step-message'>Our recommended donation:</div>
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

                    <div className='charity-card-deck'>
                        <CardDeck>
                          <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=PPup%20Charity&w=250&h=100" alt="Card image cap" />
                            <CardBody>
                              <CardTitle>Card title</CardTitle>
                              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            </CardBody>
                          </Card>

                          <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=YMehta%20Charity&w=250&h=100" alt="Card image cap" />
                            <CardBody>
                              <CardTitle>Card title</CardTitle>
                              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            </CardBody>
                          </Card>

                          <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=JRuby%20Charity&w=250&h=100" alt="Card image cap" />
                            <CardBody>
                              <CardTitle>Card title</CardTitle>
                              <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            </CardBody>
                          </Card>
                        </CardDeck>
                    </div>

                    <div>
                        <PayPalButton 
                            transactionAmount={donationAmount}/>
                    </div>
                </div>
            </div>
        );
    }
}