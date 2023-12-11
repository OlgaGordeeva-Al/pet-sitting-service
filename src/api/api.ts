import axios from "axios";
import type { FormData } from "@/components/OrderForm.vue";

interface Data extends FormData {
  
}

export interface QueryParams {
  routeName: string;
}

export async function requestFunction(method: string, url: string, data?: Data | string, queryParams?: QueryParams ) {
  const reqData = JSON.stringify(data);

  try {
    const response = await axios({
      method: method,
      url: `/api${url}`,
      data: reqData,
      params: queryParams,
      headers: {
        'Content-Type': 'application/json'
      }
    }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
}

