import React, { useState } from 'react';
import CheckboxInput from "./CheckboxInput";
import RadiobuttonInput from "./RadiobuttonInput";
import TextfieldInput from "./TextfieldInput";

const SurveyForm = () => {
    const [inputValues, setInputValues] = useState({
        aboutDuck: [],
        spendTime: [],
        consistency: '',
        colour: '',
        logo: '',
        whatElse: '',
        name: '',
        email: ''
    });
    const [formKey, setFormKey] = useState(0);

    const handleTextChange = (event) => {
        const { name, value } = event.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    const handleCheckboxChange = (event) => {
        const { name, value, checked } = event.target;
        setInputValues((prevValues) => ({
            ...prevValues,
            [name]: checked
                ? [...prevValues[name], value]
                : prevValues[name].filter((v) => v !== value)
        }));
    };

    const handleRadioChange = (event) => {
        const { name, value } = event.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputValues);
        setInputValues({
            aboutDuck: [],
            spendTime: [],
            consistency: '',
            colour: '',
            logo: '',
            whatElse: '',
            name: '',
            email: ''
        });
        setFormKey(formKey + 1); // Force re-render to reset checkboxes and radio buttons
    };

    return (
        <form className="form" onSubmit={handleSubmit} key={formKey}>
            <CheckboxInput 
            header={"Tell us what you think about your rubber duck!"}
            lables={["It's yellow!", "It squeaks!", "It has a logo!", "Its big!"]}
            onChange={handleCheckboxChange} name="aboutDuck"
            />

            <RadiobuttonInput
            header={"How do you rate you rubber duck consistency?"}
            name={"consistency"}
            onChange={handleRadioChange}
            />
            <RadiobuttonInput
            header={"How do you rate your rubber duck colour?"}
            name="colour"
            onChange={handleRadioChange}
            />
            <RadiobuttonInput
            header={"How do you rate your rubber duck logo?"}
            name="logo"
            onChange={handleRadioChange}
            />

<CheckboxInput
            header={"How do you like to spend time with your rubber duck"}
            lables={["Swimming", "Bathing", "Chatting", "I don't like to spend time with it"]}
            onChange={handleCheckboxChange} name="spendTime"
            />
            <TextfieldInput
            header={"What else you got to say about your rubber duck?"}
            value={inputValues.whatElse}
            onChange={handleTextChange}
            name="whatElse"
            />
            <TextfieldInput
            header={"Put your name here:"}
            value={inputValues.name}
            onChange={handleTextChange}
            name="name"
            />
            <TextfieldInput
            header={"Leave your email:"}
            value={inputValues.email}
            onChange={handleTextChange}
            name="email"
            />
           <input className="form__submit" type="submit" value="Submit Survey!" />
           </form>  
    )
}

export default SurveyForm;