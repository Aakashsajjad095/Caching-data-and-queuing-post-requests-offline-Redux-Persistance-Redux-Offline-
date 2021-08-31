/**
 * Created by HP on 08/28/2021.
 */
import {FETCH_PROPERTY_REQUEST,FETCH_PROPERTY_SUCCESS,FETCH_PROPERTY_FAILURE} from '../actions/types'
const initialState = {
    PropertyRequest: false,
    PropertySuccess: [],
    PropertyFailure: ''
 }
 const PropertyReducer = (state = initialState, action) => {
 
     switch (action.type) {
 
         case FETCH_PROPERTY_REQUEST:
             return { ...state,PropertyRequest: true };
 
         case FETCH_PROPERTY_SUCCESS:
             return { ...state,PropertyRequest: false,PropertySuccess: action.payload };
 
         case FETCH_PROPERTY_FAILURE:
             return { ...state,PropertyRequest: false,PropertyFailure: action.payload };
 
         default:
             return state;
 
 
 
     }
 
 
 
 }
 export default PropertyReducer;