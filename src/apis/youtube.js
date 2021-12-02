import axios from 'axios';

const KEY = 'AIzaSyDiuQVfYR0exqQRdma5pWb6hFPzyhvtWoM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video'
  }
})

