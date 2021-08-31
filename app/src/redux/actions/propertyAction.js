/**
 * Created by HP on 08/28/2021.
 */
import {FETCH_PROPERTY_REQUEST,FETCH_PROPERTY_SUCCESS,FETCH_PROPERTY_FAILURE} from './types'
import { getApiSerive } from "../../../src/util/getDataService";

export const fetchPropertyRequest = () => ({
    type: FETCH_PROPERTY_REQUEST,
});
export const fetchPropertySuccess = (json) => ({
    type: FETCH_PROPERTY_SUCCESS,
    payload: json
});
export const fetchPropertyFailure = (error) => ({
    type: FETCH_PROPERTY_FAILURE,
    payload: error
});

export const fetchPropertyApi = (res) => {

    
    return async dispatch => {
        //Property request
        dispatch(fetchPropertyRequest());
        // Property api call and fetch results
        try {
                dispatch(fetchPropertySuccess(res))
          
        } catch (error) {
            dispatch(fetchPropertyFailure(error))
        }

    }
}

