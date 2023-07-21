import axios from 'axios';

const BASE_URL = 'http://20.244.56.144:80/train';

const getAccessToken = async () => {
};


export const getAllTrainSchedules = async () => {
  const accessToken = await getAccessToken();
  try {
    const response = await axios.get(`${BASE_URL}/trains`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching train schedules:', error);
    return [];
  }
};