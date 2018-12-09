import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';

export default class PayPalButton extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			// Props
			transactionAmount,

			//Handlers
		} = this.props;

		// Specify the style of the button
		let style = {
		 	layout: 'horizontal',  // horizontal | vertical
		 	size:   'responsive',    // medium | large | responsive
		 	shape:  'pill',      // pill | rect
		 	color:  'gold',      // gold | blue | silver | white | black
		 	fundingOptions: 'false',	// (only with horizontal layout) whether or not to show the funding instrument icons below the payment button
		 	tagline: 'false',
		};

		// Specify allowed and disallowed funding sources
		//
		// Options:
		// - paypal.FUNDING.CARD
		// - paypal.FUNDING.CREDIT
		// - paypal.FUNDING.ELV
		let funding = {
		 	allowed: [
		   		paypal.FUNDING.CARD,
		  	],
		 	disallowed: [		    	
		 		
	 		]
		};

		let client = {
            sandbox: 'ATs6INmGDSnmxqAtT-bI5_-ZNUJ9sBAszAVSQdpnkqSK0l3lYJsnP2Z3a-YtS2otZi5ME4n0uTev3uuI',
	  		production: '<insert production client id>'
        };

        let payment = (data, actions) => {
            return actions.payment.create({
			    payment: {
			      transactions: [
			        {
			          amount: {
			            total: transactionAmount,
			            currency: 'USD'
			          },
			          payee:{
			            email: 'praneetpuppala+paypal-facilitator@gmail.com'
		        	  },
			        }
			      ]
			    }
		  	});
        };

        let onAuthorize = (data, actions) => {
            return actions.payment.execute()
			    .then(function () {
			      window.alert('Payment Complete!');
		    });
        };
		
        let PayPalButton = paypal.Button.driver('react', { React, ReactDOM });

        return (
        	<PayPalButton
        		style={style}
        		funding={funding}
                client={client}
                payment={payment}
                commit={true}	
	            onAuthorize={onAuthorize}
	            env='sandbox' />
        );
	}
}