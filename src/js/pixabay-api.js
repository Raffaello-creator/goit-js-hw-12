import axios from 'axios';

const GET_URL = 'https://pixabay.com/api/';
const API_KEY = '49710296-a827407c996444083b591d6c5';

export default async function getImagesByQuery(query, page = 1) {
  return await axios.get(`${GET_URL}`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page,
    },
  });
}
