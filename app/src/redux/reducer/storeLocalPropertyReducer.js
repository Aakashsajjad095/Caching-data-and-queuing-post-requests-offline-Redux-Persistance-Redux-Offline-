/**
 * Created by HP on 08/28/2021.
 */
 import {STORE_LOCALPROPERTY} from '../actions/types'
 const initialState = {
     localProperty: '',
  }
  const storeLocalProperty = (state = initialState, action) => {
  
      switch (action.type) {
          case STORE_LOCALPROPERTY:
              return { ...state,localProperty: action.payload };
          default:
              return state;
  
  
  
      }
  
  
  
  }
  export default storeLocalProperty;