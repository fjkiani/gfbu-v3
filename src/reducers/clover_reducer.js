import {
    TOGGLE_CONNECTION_STATE,
    SET_STATUS,
    TIP_ADDED,
    SET_PAIRING_CODE,
    CLOSE_STATUS,
    CONNECT_TO_CLOVER_DEVICE, ADD_TO_CART, INIT_CLOVER_CONNECTION, SEND_SALE_REQUEST
} from '../actions'
import CloverConnection from "../utils/CloverConnection";

export default (state, action) => {
    switch (action.type){
        case INIT_CLOVER_CONNECTION:
            const cloverConnection = new CloverConnection(action.payload);
            return {...state, cloverConnection}
        case CONNECT_TO_CLOVER_DEVICE:
            const {uri, authToken} = action.payload
            state.cloverConnection.connectToDevicePairing(uri, authToken)
            // state.cloverConnection.connectToDeviceCloud("85336637-8ddb-3fb7-6c62-74ce825dfa73","YGA1JG3Y0R111","8b2f4ff7-084a-4bc3-8f00-0c7a913acfb3")
            // state.cloverConnection.connectToDeviceCloud("85336637-8ddb-3fb7-6c62-74ce825dfa73","YGA1JG3Y0R111","0200fe81-14e8-4094-a6ad-525d42ce1f37")
            return {...state}
        case SEND_SALE_REQUEST:
            const {sale} = action.payload
            state.cloverConnection.sendSaleRequest(sale)
            return {...state}
        default:
            return {...state}
    }

}