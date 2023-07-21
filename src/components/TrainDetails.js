import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, makeStyles } from '@mui/material';
import { getTrainDetails } from './api';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
}));

const TrainDetails = () => {
  const { trainNumber } = useParams();
  const [train, setTrain] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const fetchTrainDetails = async () => {
      const trainDetails = await getTrainDetails(trainNumber);
      setTrain(trainDetails);
    };

    fetchTrainDetails();
  }, [trainNumber]);

  if (!train) {
    return <div>Loading...</div>;
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {train.trainName}
        </Typography>
        <Typography>Train Number: {train.trainNumber}</Typography>
        <Typography>Departure Time: {train.departureTime}</Typography>
        <Typography>Sleeper Seats Available: {train.seatsAvailability.sleeper}</Typography>
        <Typography>AC Seats Available: {train.seatsAvailability.AC}</Typography>
        <Typography>Price for Sleeper: {train.price.sleeper}</Typography>
        <Typography>Price for AC: {train.price.AC}</Typography>
      </CardContent>
    </Card>
  );
};

export default TrainDetails;
