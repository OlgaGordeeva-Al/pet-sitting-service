import axios from "axios";

export async function apiCall() {
  try {
    const response = await axios({
      method: 'get',
      url: '/api/',
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
