import axios from 'axios';

const API_KEY = '49710296-a827407c996444083b591d6c5';

export default function getImagesByQuery(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios(`https://pixabay.com/api/?${params}`);
}
