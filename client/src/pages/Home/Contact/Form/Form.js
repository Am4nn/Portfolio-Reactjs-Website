import React, { useState } from 'react'
import styles from "./Form.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faSpinner } from '@fortawesome/free-solid-svg-icons'
import ClippedButton from '../../../../components/ClippedButton/ClippedButton';
import { Box, TextField } from '@mui/material';
import { makeStyles } from "@mui/styles"
import { EmailOutlined, MessageOutlined } from "@mui/icons-material";
import { SERVER_LINK } from '../../../../dev-server-link';

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
            const response = await fetch(`${SERVER_LINK}/api/contact`, {
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
                <EmailOutlined />
                <TextField
                    id="input-email"
                    label="Email"
                    variant="outlined"
                    color="warning"
                    fullWidth
                    value={formStates.email}
                    onChange={(e) => setFormStates(prev => ({ ...prev, email: e.target.value }))}
                />
            </Box>
            <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', alignItems: 'flex-end' }}>
                <MessageOutlined />
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
            <ClippedButton onClick={submitForm} color="skyblue" className={styles.clippedButton}>
                <FontAwesomeIcon style={{ marginRight: "10px" }} icon={formStates.loading ? faSpinner : faPaperPlane} />
                {formStates.loading ? "Sending Message" : "Send Message"}
            </ClippedButton>
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

export default Form;