import React from 'react';
import { Container, Grid, Button } from '@mui/material'; // Adjust import based on your UI library

const HeaderComponent = () => {
    return (
        <div>
        <Container  style={{ margin: '0' }}>
            <Grid container >
                <Grid item xs={12} style={{display:"flex",  justifyContent:"space-between" }}>
                    <img
                        alt="logo"
                        loading="lazy"
                        width="150"
                        height="30"
                        decoding="async"
                        data-nimg="1"
                        style={{ color: 'transparent' }}
                        src="https://storage.googleapis.com/cdn.healthtrak.com/app/sha-a04d7f0/public/img/sharecare/logo.svg"
                        srcSet="https://storage.googleapis.com/cdn.healthtrak.com/app/sha-a04d7f0/public/img/sharecare/logo.svg 1x, https://storage.googleapis.com/cdn.healthtrak.com/app/sha-a04d7f0/public/img/sharecare/logo.svg 2x"
                    />
                    <Button variant="outlined" sx={{
                                border: '1px solid #00BFA5',
                                color: 'black',
                                backgroundColor: 'white',
                                '&:hover': {
                                    borderColor: 'darkgreen',
                                    color: 'darkgreen',
                                    cursor: 'pointer'
                                },
                                

                            }}>How it works</Button>
                </Grid>
                
            </Grid>
        </Container>
        </div>
    );
};

export default HeaderComponent;
