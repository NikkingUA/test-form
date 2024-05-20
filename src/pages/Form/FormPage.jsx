import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
    ButtonContainer,
    FormContainer,
    HeaderTitle,
    GeneralContainer
} from './style';

import { Button, InputView } from '../../components';
import SuccessModal from '../SuccessModal';

import { emailRegex } from '../../utils/regex';

import { SET_FORM_DATA } from '../../redux/formSlice';

const FormPage = ({
    formData,
    setFormData
}) => {
    const [formStep, setFormStep] = useState(1);
    const [error, setError] = useState('');
    const [formDataInput, setFormDataInput] = useState({
        name: '',
        lastname: '',
        email: ''
    });
    const [isOpen, setIsOpen] = useState(false);


    const validateForm = () => {
        return new Promise((resolve, reject) => {
            let newErrors = '';
            if (formStep === 1 && !formDataInput.name) {
                newErrors = 'Name is required';
            }
            if (formStep === 2 && !formDataInput.lastname) {
                newErrors = 'Lastname is required';
            }
            if (formStep === 3 && formDataInput.email === '') {
                newErrors = 'Email is required';
            }
            if (formStep === 3 && !emailRegex.test(formDataInput.email)) {
                newErrors = 'Email is not valid'
            }

            if (newErrors.length > 0) {
                reject(newErrors);
            } else {
                resolve();
            }
        });
    };

    const handleChange = (input, value) => {
        setFormDataInput({ ...formData, [input]: value });
        setError('');
    };

    const nextStep = () => {
        validateForm()
            .then(() => {
                if (formStep === 3) {
                    setIsOpen(true);
                } else {
                    setFormStep(formStep + 1);
                    setFormData(formDataInput);
                    setError('');
                }
            })
            .catch((newErrors) => {
                setError(newErrors);
            });
    };

    const prevStep = () => {
        setFormStep(formStep - 1);
        setError('');
    };



    return (
        <GeneralContainer>
            <HeaderTitle>Step {formStep} of 3</HeaderTitle>
            <FormContainer>
                <InputView
                    formStep={formStep}
                    formDataInput={formDataInput}
                    handleChange={handleChange}
                    formData={formData}
                    error={error}
                />
                <ButtonContainer>
                    {formStep > 1 ? (<Button
                        label="Back"
                        labelColor="white"
                        backgroundColor="gray"
                        disabled={formStep === 1}
                        onClick={prevStep}
                        width="120px"
                        height="50px"
                    />) : <div />}
                    <Button
                        label={formStep === 3 ? "Submit" : "Next"}
                        labelColor="white"
                        backgroundColor="green"
                        onClick={nextStep}
                        width="120px"
                        height="50px"
                    />
                </ButtonContainer>
            </FormContainer>
            {isOpen && <SuccessModal onClose={() => setIsOpen(false)} />}
        </GeneralContainer>
    );
};


export default connect(
    (state) => ({
        formData: state.form.data
    }),
    (dispatch) => ({
        setFormData: (payload) => dispatch(SET_FORM_DATA(payload))
    })
)(FormPage);