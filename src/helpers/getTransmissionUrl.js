import axios from 'axios';

export const getLatestVideoUrl = async () => {
  const channelId = 'UCnKWrqGFWFbwGC6LhBcK8GA';
  const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
  const youtubeApiBaseUrl = 'https://www.googleapis.com/youtube/v3';

  const playlist = await axios.get(`${youtubeApiBaseUrl}/channels`, {
    params: {
      part: 'contentDetails',
      id: channelId,
      key: apiKey,
    },
  });
  const playlistId = playlist.data.items[0].contentDetails.relatedPlaylists.uploads;

  const latestVideo = await axios.get(`${youtubeApiBaseUrl}/playlistItems`, {
    params: {
      part: 'snippet',
      playlistId: playlistId,
      maxResults: 1,
      order: 'date',
      key: apiKey,
    },
  });
  const videoId = latestVideo.data.items[0].snippet.resourceId.videoId;
  const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return videoUrl;
};
