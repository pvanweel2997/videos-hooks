import axios from 'axios';

const KEY = "AIzaSyD7RQEU5MebQX9csujD1SNO7l5JXi323jE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY
  }
});

