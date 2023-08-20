import dayjs from "dayjs";
import { apiIstance } from "../Api/ApiInstance";


export const requestData = async () => {
    const response = await fetch(apiIstance.baseUrl + '/user');
    const result = await response.json();
    return result;
  };

 export const updateDataFormat = (data) =>{
    return dayjs(data).format("DD MMM YYYY")
  }