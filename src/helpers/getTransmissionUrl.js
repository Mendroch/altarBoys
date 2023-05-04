import axios from 'axios';

export const getLatestVideoUrl = async () => {
  const channelId = 'UCnKWrqGFWFbwGC6LhBcK8GA';
  const apiKey = 'AIzaSyDke8FddhWV--DMXb3Bjs9JaMSS__BG0tY';
  const youtubeApiBaseUrl = 'https://www.googleapis.com/youtube/v3';

  // Pobierz playlistę z filmami
  const channelResponse = await axios.get(`${youtubeApiBaseUrl}/channels`, {
    params: {
      part: 'contentDetails',
      id: channelId,
      key: apiKey,
    },
  });
  const playlistId = channelResponse.data.items[0].contentDetails.relatedPlaylists.uploads;

  // Pobierz najnowszy film
  const playlistResponse = await axios.get(`${youtubeApiBaseUrl}/playlistItems`, {
    params: {
      part: 'snippet',
      playlistId: playlistId,
      maxResults: 1,
      order: 'date',
      key: apiKey,
    },
  });
  const videoId = playlistResponse.data.items[0].snippet.resourceId.videoId;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return videoUrl;
};
