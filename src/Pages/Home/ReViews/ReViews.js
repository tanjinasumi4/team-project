import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShowReviews from '../ShowReviews/ShowReviews';
import './ReViews.css'

const ReViews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://pacific-harbor-22675.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='cardstyle'>
            <Container sx={{ my:8 }}>
                <Typography  sx={{my:5,color:'dark'}} variant="h5">
                    Customer Reviews 
                </Typography>
                <Grid   container spacing={2}>
                {
                    reviews.map(review => <ShowReviews
                        review={review}
                        key={review._id} >
                    </ShowReviews>)

                }
                </Grid>
            </Container>
        </div>
    );
};

export default ReViews;