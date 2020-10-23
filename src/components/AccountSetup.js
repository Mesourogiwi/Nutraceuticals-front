import React, { Component } from 'react'
import { FormContainer } from './style';

export class AccountSetup extends Component {
    
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
            <FormContainer>
                <h1 className="mb-5">Account Setup</h1>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" name="name" onChange={inputChange('name')} value={values.name} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" className="form-control" name="email" onChange={inputChange('email')} value={values.email} />
                </div>
                <div className="form-group">
                    <label htmlFor="birth">Date of Birth</label>
                    <input type="date" className="form-control" name="birth" onChange={inputChange('birth')} value={values.birth} />
                </div>

                <br />

                <div className="text-right">
                    <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
            </FormContainer>
        )
    }
}

export default AccountSetup
