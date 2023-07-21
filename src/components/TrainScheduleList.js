import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, makeStyles } from '@mui/material';
import { getAllTrainSchedules } from './api';
import TrainScheduleItem from './TrainScheduleItem';

const useStyles = makeStyles((theme) => ({
  card: {
    marginBottom: theme.spacing(2),
  },
}));

const TrainScheduleList = () => {
  const [trainSchedules, setTrainSchedules] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    const fetchTrainSchedules = async () => {
      const allTrainSchedules = await getAllTrainSchedules();
      const filteredTrainSchedules = allTrainSchedules.filter(
        (schedule) => schedule.delayedBy <= 30
      );
      filteredTrainSchedules.sort((a, b) => {
        const priceA = a.price.sleeper + a.price.AC;
        const priceB = b.price.sleeper + b.price.AC;
        if (priceA !== priceB) {
          return priceA - priceB;
        }

        const totalTicketsA = a.seatsAvailability.sleeper + a.seatsAvailability.AC;
        const totalTicketsB = b.seatsAvailability.sleeper + b.seatsAvailability.AC;
        if (totalTicketsA !== totalTicketsB) {
          return totalTicketsB - totalTicketsA;
        }

        const departureTimeA = a.departureTime.Hours * 60 + a.departureTime.Minutes;
        const departureTimeB = b.departureTime.Hours * 60 + b.departureTime.Minutes;
        return departureTimeB - departureTimeA;
      });

      setTrainSchedules(filteredTrainSchedules);
    };

    fetchTrainSchedules();
  }, []);

  return (
    <div>
      <h2>Train Schedules</h2>
      {trainSchedules.map((schedule) => (
        <TrainScheduleItem key={schedule.trainNumber} schedule={schedule} />
      ))}
    </div>
  );
};

export default TrainScheduleList;
