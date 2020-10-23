import React, { Component } from 'react';
import AccountSetup from './AccountSetup';
import Uses from './Uses';
import Topics from './Topics';
import Success from './Success';

export class Form extends Component {
    state = {
        step: 1,
        name: '',
        birth: '',
        useR: [{id_use:[0], name: [null]}],
        topicR: [],
        email: '',
        phone: '',
        password: '',
        facebook: '',
        twitter: '',
        github: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    };

    pushUseR = (selectedItem) => {
        this.setState({ ...this.state, useR: [...this.state.useR, selectedItem] })
    }

    pushTopicR = (selectedItem) => {
        this.setState({ ...this.state, topicR: [...this.state.topicR, selectedItem] })
    }

    render() {
        const { step } = this.state;
        const { name, email, birth, useR, topicR, phone, password, facebook, twitter, github } = this.state;
        const values = { name, email, useR, topicR, birth, phone, password, facebook, twitter, github };

        switch (step) {
            case 1:
                return (
                    <AccountSetup
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <Uses
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                        useChange={this.pushUseR}
                    />
                );
            case 3:
                return (
                    <Topics
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                        topicChange={this.pushTopicR}
                    />
                );
            case 4:
                return (
                    <Success
                        prevStep={this.prevStep}
                        values={values}
                    />
                );
        }
    }
}

export default Form
