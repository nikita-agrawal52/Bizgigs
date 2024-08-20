import React, { useState } from 'react'
import { Box, Paper, TextField, Button, InputAdornment } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

import '../Navbar/Navbar.css'

import axios from 'axios';

function Contact() {
    const [name, setName] = useState("");
    const [num, setNum] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");
    const [nameError, setNameError] = useState(false);
    const [nameErrormsg, setNameErrorMsg] = useState("");
    const [numError, setNumError] = useState(false);
    const [numErrormsg, setNumErrorMsg] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [EmailErrormsg, setEmailErrorMsg] = useState("");
    const handleContactSubmit = async () => {



        setNameError(false);
        setNumError(false);
        setEmailError(false);
        setNameErrorMsg("");
        setNumErrorMsg("");
        setEmailErrorMsg("");

        // Validate fields
        let isValid = true;

        if (!name) {
            setNameError(true);
            setNameErrorMsg("Name is required to contact us!");
            isValid = false;
        }
        if (!num) {
            setNumError(true);
            setNumErrorMsg("Mobile No. is required to contact us!");
            isValid = false;
        }
        if (!email) {
            setEmailError(true);
            setEmailErrorMsg("Email is required to contact us!");
            isValid = false;
        }

        if (isValid) {
            // Prepare data to send
            const data = {
                name,
                phone: num, // Ensure the field name matches your schema
                email,
                message: msg
            };

            try {
                // Send data to backend
                const response = await axios.post('http://localhost:3000/api/v1', data);

                // Handle success
                console.log("Form submitted successfully:", response.data);
                // Optionally, reset form or show a success message

            } catch (error) {
                // Handle error
                console.error("There was an error submitting the form:", error);
                // Optionally, show an error message to the user
            }
        }
    }



    return (
        <div>
            <Box sx={{
                p: '20px',
                m: '20px',
                width: '80%',

            }}>
                <Paper elevation={6} py={10} sx={{
                    backgroundColor: "#d4ddb7",
                    p: "10%"
                }}>
                    <TextField variant='outlined' label="Name" required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={nameError}
                        helperText={nameErrormsg}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#3f4726', // Default border color
                                },
                                '&:hover fieldset': {
                                    borderColor: '#3f4726', // Border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#3f4726', // Border color when focused
                                },
                            },


                            '& .MuiFormLabel-root': {
                                color: '#3f4726', // Label color
                                '&.Mui-focused': {
                                    color: '#3f4726', // Label color when focused
                                },

                            },
                            width: "80%"
                        }}
                    />

                    <TextField variant='outlined' label="Mobile No." required type="Number"
                        value={num}
                        onChange={(e) => setNum(e.target.value)}
                        error={numError}
                        helperText={numErrormsg}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PhoneIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#3f4726', // Default border color
                                },
                                '&:hover fieldset': {
                                    borderColor: '#3f4726', // Border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#3f4726', // Border color when focused
                                },
                            },


                            '& .MuiFormLabel-root': {
                                color: '#3f4726', // Label color
                                '&.Mui-focused': {
                                    color: '#3f4726', // Label color when focused
                                },

                            },
                            my: "50px",
                            width: "80%"
                        }}
                    />

                    <TextField variant='outlined' label="Email" required type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={emailError}
                        helperText={EmailErrormsg}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <EmailIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#3f4726', // Default border color
                                },
                                '&:hover fieldset': {
                                    borderColor: '#3f4726', // Border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#3f4726', // Border color when focused
                                },
                            },


                            '& .MuiFormLabel-root': {
                                color: '#3f4726', // Label color
                                '&.Mui-focused': {
                                    color: '#3f4726', // Label color when focused
                                },

                            },
                            mb: "50px",
                            width: "80%"
                        }}
                    />


                    <TextField variant='outlined' label="Message"
                        value={msg}
                        onChange={(e) => setMsg(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SendIcon />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: '#3f4726', // Default border color
                                },
                                '&:hover fieldset': {
                                    borderColor: '#3f4726', // Border color on hover
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: '#3f4726', // Border color when focused
                                },
                            },


                            '& .MuiFormLabel-root': {
                                color: '#3f4726', // Label color
                                '&.Mui-focused': {
                                    color: '#3f4726', // Label color when focused
                                },

                            },
                            mb: "50px",
                            width: "80%"
                        }}
                    />

                    <Button variant='contained' size='large'
                        onClick={handleContactSubmit}
                        type='submit'
                        sx={{
                            bgcolor: "#3f4726", color: "white",
                            '&:hover': {
                                bgcolor: '#2a3e1a'
                            }
                        }}>Connect</Button>
                </Paper>
            </Box>

        </div>
    )
}

export default Contact
