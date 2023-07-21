export const getTrainDetails = async (trainNumber) => {
    const accessToken = await getAccessToken();
    try {
      const response = await axios.get(`${BASE_URL}/trains/${trainNumber}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`Error fetching details for train ${trainNumber}:`, error);
      return null;
    }
  };