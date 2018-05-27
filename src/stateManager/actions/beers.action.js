import * as types from "../types";
import {beerApi} from "../../api/beerApi";

export function initialBeerDataLoad(token,id,values) {
    return async dispatch => {
      try {
        const api = beerApi();
        const data = await api.getBeersInfo()
         
        // Change style key to beerStyle for api bug
        const validData = await filterData(data)
         dispatch({
             type : types.GET_BEERS,
             data : validData
         });
         return data;
        } catch (e) {
          dispatch({
               type : types.BEERS_ERROR,
               error : e
           })
        }
    };
  }

  const filterData = async (data)=>{
    return data.map(value=>{
             value['beerStyle'] = value["style"];
             delete(value["style"]);
             return value
    })
  }


  export const searchByName = (data)=>{
    return {
      type : types.SEARCH_BY_NAME,
      data
    }
  }

  export const sortByAbv = (data)=>{
    return {
      type : types.SORT_BY_ABV,
      data
    }
  }

  export const filterByStyle = (data)=>{
    return {
      type : types.FILTER_BY_STYLE,
      data
    }
  }