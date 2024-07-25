// RegistrationForm.js

import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Select, FormControl, InputLabel, MenuItem, Typography, Autocomplete } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import BadgeIcon from '@mui/icons-material/Badge';
import { styled } from '@mui/system';
import DoneIcon from '@mui/icons-material/Done';
import InputMask from 'react-input-mask';
import { ErrorSharp } from '@mui/icons-material';
import HeaderComponent from './Header';


const styles = {
    container: {
        backgroundColor: '#f0f0f0', // Light grey background color
        borderRadius: '8px', // Optional: Add rounded corners
        // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
        // paddingTop: '48px'

    },
    formContainer: {
        backgroundColor: '#ffffff', // White background for the form container
        margin: '0',
        borderRadius: "8px",
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
        margin: 'auto',
        width: '50%', // Set width to 50% of parent container
        margin: 'auto', // Center align horizontally
        padding: "0px"

    },
    emailContainer: {

        margin: '0',
        borderRadius: "8px",
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
        margin: 'auto',
        width: '50%', // Set width to 50% of parent container
        margin: 'auto', // Center align horizontally
        padding: "0"
        // paddingTop: "20px",
        // paddingBottom:"20px"
    },

    title: {
        marginBottom: "20px",
        fontFamily: 'Tiempos Headline Regular',
        fontSize: '3rem',
        lineHeight: 1.19,
        color: '#006658',
        textAlign: 'center',
    },
};

const StyledButton = styled(Button)({
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontSize: '1rem',
    lineHeight: '1.313',
    minWidth: '101px',
    padding: '13px 25px',
    height: '47px',
    borderRadius: '6px',
    fontWeight: 500,
    backgroundColor: '#2B3649',
    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    '&:hover': {
        backgroundColor: '#1A2A35', // Darker shade for hover
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional: Change shadow on hover
    }

});

const RegistrationForm = () => {
    const [isFullNameEntered, setIsFullNameEntered] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const [formData, setFormData] = useState({
        fullName: null,
        streetAddress: null,
        city: 'Bhilai',
        state: 'Chhattisgarh',
        mobile: null,
        DOB: null,
        gender: null,
        email: null
    });
    const [errors, setErrors] = useState({
        fullName: false,
        email: false,
        city: false,
        state: false,
        mobile: false,
        DOB: false,
        streetAddress: false,
        gender: false
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateField(name, value);
    };

    const validateField
        = (name, value) => {
            let
                newErrors = { ...errors };
            switch (name) {
                case 'fullName':
                    newErrors.fullName = value?.trim().split(' ').length < 2 ? 'Please enter both first and last name' : '';
                    break;
                case 'mobile':
                    // Implement more robust phone number validation
                    newErrors.mobile = !/^\(\d{3}\) \d{3}-\d{4}$/.test(value) ? 'Invalid phone number format' : '';
                    break;
                case 'DOB':
                    // Implement more robust date validation
                    newErrors.DOB = !/^\d{2}\/\d{2}\/\d{4}$/.test(value) ? 'Invalid date format (MM/DD/YYYY)' : '';
                    break;
                default:
                    newErrors[name] = value?.trim() === '' ? 'Required field' : '';
            }
            setErrors(newErrors);
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate all fields before submission
        Object.keys(formData).forEach(field => validateField(field, formData[field]));
        // Submit form if no errors
    };



    // const handleInputChange = (e) => {
    //     const { name, value } = e?.target;
    //     setFormData({ ...formData, [name]: value });
    //     // Reset error when user starts typing
    //     if (errors[name]) {
    //         setErrors({ ...errors, [name]: false });
    //     }
    // };

    const handleValidateChange = (e) => {

        const { name, value } = e?.target||{};

        if (name === 'fullName' && value?.trim() !== null) {
            const completeName = value.split(' ');
            if (completeName.length > 1) {
                setIsFullNameEntered(true);
            }
            else {
                setIsFullNameEntered(false);
            }
        }
        setFormData({ ...formData, [name]: value });

        const newErrors = {};

        // Validate required fields
        Object.keys(formData).forEach((key) => {
            if (!formData[key]?.trim()) {
                newErrors[key] = true;
            }
        });

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // No errors
    };

    const handleEmailChange = (e) => {
        const { value } = e?.target;
        setEmail(value);

        // Validate email format
        if (!emailRegex.test(value)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // You can add API calls or further processing here
    //     if (handleValidateChange()) {
    //         console.log('Form submitted with data:', formData);
    //         // Proceed with form submission or API call
    //     } else {
    //         console.log('Form has errors. Please fix them.');
    //     }

    // };


    const options = [
        '1 Elm Way',
        '2 Oak Street',
        '3 Pine Avenue',
        '4 Maple Drive',
        '5 Cedar Lane',
        // Add more options as needed
    ];

    return (
        <>
            <div style={{ overflow: "auto" }}>
                <div style={styles.container}>
                    <Typography variant="h1" style={styles.title}>
                        Sign up
                    </Typography>

                    <Container maxWidth="sm" style={styles.formContainer}>

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sx={{ paddingTop: 0 }}>
                                    <TextField
                                        fullWidth
                                        name="fullName"
                                        value='Your information'
                                        readOnly
                                        placeholder='Your information'
                                        variant="outlined"


                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">

                                                    <IconButton>
                                                        <BadgeIcon />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}

                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ paddingTop: 0 }}>
                                    <TextField
                                        fullWidth
                                        label={isFullNameEntered ? "Enter both first and lastname" : "Full Name"}
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        // //onBlur={handleValidateCerror={Boolean(errors.fullName)}
                                        helperText={errors.fullName} error={errors.fullName}
                                        variant="outlined"

                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    {isFullNameEntered ? (
                                                        <IconButton>
                                                            <DoneIcon style={{ color: 'green' }} />
                                                        </IconButton>
                                                    ) : (
                                                        <IconButton>
                                                            <EditOutlinedIcon />
                                                        </IconButton>
                                                    )}
                                                </InputAdornment>
                                            ),
                                        }}

                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ paddingTop: 0 }}>
                                    <Autocomplete
                                        value={formData.streetAddress}
                                        onChange={handleInputChange}
                                        options={options}
                                        fullWidth
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                fullWidth
                                                type="text"
                                                label="Street address (e.g. '1 Elm Way')"
                                                name="streetAddress"
                                                variant="outlined"
                                                value={formData.streetAddress}
                                                onChange={handleInputChange}
                                                ////onBlur={handleValidateChange}
                                                error={Boolean(errors.streetAddress)}
                                                InputProps={{
                                                    ...params.InputProps,
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            {formData.streetAddress ? (
                                                                <IconButton>
                                                                    <DoneIcon style={{ color: 'green' }} />
                                                                </IconButton>
                                                            ) : (
                                                                <IconButton>
                                                                    <EditOutlinedIcon />
                                                                </IconButton>
                                                            )}
                                                        </InputAdornment>
                                                    ),
                                                }}

                                            />
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={6} sx={{ paddingTop: 0 }}>
                                    <TextField
                                        disabled
                                        fullWidth
                                        label={formData.streetAddress ? null : "City"}
                                        name="city"
                                        value={formData.streetAddress ? formData.city : null}
                                        //onBlur={handleValidateChange}
                                        variant="outlined"

                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    {formData.streetAddress ? (
                                                        <IconButton>
                                                            <DoneIcon style={{ color: 'green' }} />
                                                        </IconButton>
                                                    ) : (
                                                        <IconButton>
                                                            <EditOutlinedIcon />
                                                        </IconButton>
                                                    )}
                                                </InputAdornment>
                                            ),
                                        }}

                                    />
                                </Grid>
                                <Grid item xs={6} sx={{ paddingTop: 0 }}>
                                    <TextField
                                        disabled
                                        fullWidth
                                        label={formData.streetAddress ? null : "State"}
                                        name="state"
                                        value={formData.streetAddress ? formData.state : null}
                                        //onBlur={handleValidateChange}
                                        variant="outlined"

                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    {formData.streetAddress ? (
                                                        <IconButton>
                                                            <DoneIcon style={{ color: 'green' }} />
                                                        </IconButton>
                                                    ) : (
                                                        <IconButton>
                                                            <EditOutlinedIcon />
                                                        </IconButton>
                                                    )}
                                                </InputAdornment>
                                            ),
                                        }}

                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ paddingTop: 0 }}>

                                    <TextField
                                        fullWidth
                                        type={formData.mobile ? "number" : "Required"}
                                        label="Mobile number"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleInputChange}
                                        //onBlur={handleValidateChange}
                                        variant="outlined"
                                        placeholder='(000) 000-0000'
                                        error={errors.mobile}

                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    {formData.mobile ? (
                                                        <IconButton>
                                                            <DoneIcon style={{ color: 'green' }} />
                                                        </IconButton>
                                                    ) : (
                                                        <IconButton>
                                                            <EditOutlinedIcon />
                                                        </IconButton>
                                                    )}
                                                </InputAdornment>
                                            ),
                                        }}

                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ paddingTop: 0 }}>
                                    <TextField
                                        fullWidth
                                        label="Date of birth"
                                        name="DOB"
                                        value={formData.DOB}
                                        onChange={handleInputChange}
                                        //onBlur={handleValidateChange}
                                        variant="outlined"
                                        error={errors.DOB}

                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    {formData.mobile ? (
                                                        <IconButton>
                                                            <DoneIcon style={{ color: 'green' }} />
                                                        </IconButton>
                                                    ) : (
                                                        <IconButton>
                                                            <EditOutlinedIcon />
                                                        </IconButton>
                                                    )}
                                                </InputAdornment>
                                            ),
                                            inputMode: 'numeric'
                                        }}

                                    />
                                </Grid>
                                <Grid item xs={12} >
                                    <FormControl fullWidth>
                                        <InputLabel>Gender</InputLabel>
                                        <Select
                                            value={formData.gender}
                                            //onBlur={handleValidateChange}
                                            name="gender"
                                            error={errors.gender}

                                            defaultValue=""
                                            variant='outlined'
                                            id="margin-none"
                                        >
                                            <MenuItem value="male">Male</MenuItem>
                                            <MenuItem value="female">Female</MenuItem>
                                            <MenuItem value="other">Other</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                            </Grid>
                        </form>
                    </Container>
                    <br />

                    <Container style={styles.emailContainer}>
                        <Grid item xs={10} >
                            <TextField
                                fullWidth
                                type="email"
                                name="Email"
                                variant="outlined"
                                id="margin-none"
                                placeholder='Email'
                                //onBlur={handleEmailChange}
                                helperText={emailError ? "Invalid Email Format" : null}
                                error={emailError && errors.email}

                            />
                        </Grid>
                    </Container>
                    <br />

                    <Grid item xs={12} style={styles.emailContainer}>
                        <StyledButton
                            fullWidth
                            type="submit"
                            variant="contained"
                            color="primary"
                            startIcon={<EmailIcon />}
                            onClick={handleSubmit}
                        >
                            Continue with email
                        </StyledButton>
                    </Grid>
                </div>

            </div>

        </>
    );
};

export default RegistrationForm;
