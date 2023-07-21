import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
}));

const TrainScheduleItem = ({ schedule }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {schedule.trainName}
        </Typography>
        <Typography>Train Number: {schedule.trainNumber}</Typography>
        <Typography>Departure Time: {schedule.departureTime}</Typography>
        <Typography>Sleeper Seats Available: {schedule.seatsAvailability.sleeper}</Typography>
        <Typography>AC Seats Available: {schedule.seatsAvailability.AC}</Typography>
        <Typography>Price for Sleeper: {schedule.price.sleeper}</Typography>
        <Typography>Price for AC: {schedule.price.AC}</Typography>
      </CardContent>
    </Card>
  );
};

export default TrainScheduleItem;