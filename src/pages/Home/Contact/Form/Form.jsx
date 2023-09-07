import React, { useState } from 'react'
import styles from "./Form.module.css"
import ClippedButton from '../../../../components/ClippedButton/ClippedButton';
import { Box, TextField } from '@mui/material';
import { makeStyles } from "@mui/styles"

// function for email validation using regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
const isEmailValid = email => {
    return emailRegex.test(email);
}

const Form = ({ className }) => {

    const classes = useStyles();

    const [formStates, setFormStates] = useState({
        email: "",
        message: "",
        loading: false,
    });

    const submitForm = async event => {
        event.preventDefault();

        if (formStates.loading) return;
        if (!formStates.email || !formStates.message) {
            alert("Please fill all the fields");
            return;
        }
        if (!isEmailValid(formStates.email)) {
            alert("Please enter a valid email");
            return;
        }

        setFormStates(prev => ({ ...prev, loading: true }));

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: formStates.email,
                    message: formStates.message
                })
            });
            const data = await response.json();
            alert(successfullResponse(JSON.stringify(data)));
            setFormStates({ email: "", message: "", loading: false });
        } catch (error) {
            alert(errorResponse(JSON.stringify(error)));
            setFormStates(prev => ({ ...prev, loading: false }));
        }
    }

    return (
        <div className={[className, styles.form, classes.form].join(" ")}>
            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', alignItems: 'flex-end' }}>
                <EmailSvg />
                <TextField
                    id="input-email"
                    label="Your Email"
                    variant="outlined"
                    color="warning"
                    fullWidth
                    value={formStates.email}
                    onChange={(e) => setFormStates(prev => ({ ...prev, email: e.target.value }))}
                />
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', alignItems: 'flex-end' }}>
                <MessageSvg />
                <TextField
                    id="input-msg"
                    label="Message"
                    variant="outlined"
                    color="warning"
                    fullWidth
                    multiline
                    rows={6}
                    value={formStates.message}
                    onChange={(e) => setFormStates(prev => ({ ...prev, message: e.target.value }))}
                />
            </Box>
            <SendButton
                submitForm={submitForm}
                loading={formStates.loading}
            />
            {formStates.loading ? <div className={styles.waitingMsg}>It may take up to <span>5 seconds</span> to send !</div> : ""}
        </div>
    )
}

const successfullResponse = data => `The message has been successfully sent
${data}`;

const errorResponse = error => `The message could not be sent
If you would like to contact me, please send an email to 125aryaaman@gmail.com
${error}`;

const useStyles = makeStyles((theme) => ({
    form: {
        '& .MuiInputBase-input': {
            color: 'white', // Change text color
        },
        '& .MuiFormLabel-root': {
            color: 'white', // Change label color
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'rgb(255 255 255 / 0.5)', // Change outline color
            },
            '&:hover fieldset': {
                borderColor: 'white', // Change outline color on hover
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ed6c02', // Change outline color when focused
            },
        },
        '& .MuiSvgIcon-root': {
            color: 'rgb(255 255 255 / 0.7)',
            mr: 1,
            my: 0.5,
        }
    }
}));

const SendButton = ({ loading, submitForm }) => (
    <ClippedButton onClick={submitForm} color="skyblue" className={[styles.clippedButton, loading ? styles.disabled : ""].join(" ")}>
        {loading ? <LoadingContent /> : <SendContent />}
    </ClippedButton>
);

const SendContent = () => (
    <>
        <svg className={styles.svgInline} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paper-plane" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"></path>
        </svg>
        Send Message
    </>
);

const LoadingContent = () => (
    <>
        <svg className={[styles.loading, styles.svgInline].join(" ")} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"></path>
        </svg>
        Sending Email
    </>
);

const EmailSvg = () => (
    <svg className={styles.svgMui} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="EmailOutlinedIcon">
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path>
    </svg>
);

const MessageSvg = () => (
    <svg className={styles.svgMui} focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="MessageOutlinedIcon">
        <path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h12v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"></path>
    </svg>
);

export default Form;
