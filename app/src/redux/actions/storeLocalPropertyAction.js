/**
 * Created by HP on 08/28/2021.
 */
import {STORE_LOCALPROPERTY} from './types'

export const storeLocalProperty = (json) => ({
    type: STORE_LOCALPROPERTY,
    payload: json
});


export const storeLocalPropertyFun = (raw) => {

    
    return async dispatch => {
                dispatch(storeLocalProperty(raw))


    }
}

