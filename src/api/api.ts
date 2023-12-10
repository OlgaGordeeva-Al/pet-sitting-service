import axios from "axios";
import type { FormData } from "@/components/OrderForm.vue";

interface Data extends FormData {
  
}

export async function requestFunction(method: string, url: string, data?: Data ) {
  const reqData = JSON.stringify(data);

  try {
    const response = await axios({
      method: method,
      url: `/api${url}`,
      data: reqData,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

