import { styled } from '@mui/system';
import { Button, Typography } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Container, Grid, TextField } from '@mui/material';

const containerStyle = {
    backgroundColor: '#f0f0f0', // Light grey background color
    borderRadius: '8px', // Optional: Add rounded corners
    // boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    // paddingTop: '48px'
};

const formContainerStyle = {
    backgroundColor: '#ffffff', // White background for the form container
    margin: '0',
    borderRadius: "8px",
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    margin: 'auto',
    width: '50%', // Set width to 50% of parent container
    margin: 'auto', // Center align horizontally
    padding: "0px"
};

const emailContainerStyle = {
    margin: '0',
    borderRadius: "8px",
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow
    margin: 'auto',
    width: '50%', // Set width to 50% of parent container
    margin: 'auto', // Center align horizontally
    padding: "0"
};

const titleStyle = {
    marginBottom: "20px",
    fontFamily: 'Tiempos Headline Regular',
    fontSize: '3rem',
    lineHeight: 1.19,
    color: '#006658',
    textAlign: 'center',
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

const endAdornmentStyle = (hasValue) => ({
    endAdornment: (
        <InputAdornment position="end">
            {hasValue ? (
                <IconButton>
                    <DoneIcon style={{ color: 'green' }} />
                </IconButton>
            ) : (
                <IconButton>
                    <EditOutlinedIcon />
                </IconButton>
            )}
        </InputAdornment>
    )
});

export {
    containerStyle,
    formContainerStyle,
    emailContainerStyle,
    titleStyle,
    StyledButton,
    endAdornmentStyle
};
