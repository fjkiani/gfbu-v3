import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/clover_reducer'
import {
    INIT_CLOVER_CONNECTION,
    TOGGLE_CONNECTION_STATE,
    SET_STATUS,
    TIP_ADDED,
    SET_PAIRING_CODE,
    CLOSE_STATUS,
    CONNECT_TO_CLOVER_DEVICE,
    SEND_SALE_REQUEST
} from '../actions'

const getLocalStorage = () => {
    let clover = localStorage.getItem('clover')
    if (clover) {
        return JSON.parse(localStorage.getItem('clover'))
    } else {
        return {}
    }
}

const initialState = {
    clover: getLocalStorage(),
    cloverConnection: null,
    total_items: 0,
    total_amount: 0,
    shipping_fee: 0,
}

const CloverContext = React.createContext({});

export const CloverProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const initCloverConnection = () => {
        dispatch({type: INIT_CLOVER_CONNECTION, payload: {
                toggleConnectionState,
                setPairingCode,
                closePairingCode,
                setStatus,
                closeStatus,
                tipAdded
        }})
    }
    const connectToCloverDevice = (uri) => {      // connects to Clover device
        dispatch({type: CONNECT_TO_CLOVER_DEVICE, payload: {uri, authToken: state?.authToken}})
    }
    const sendSaleRequest = (sale) => {
        dispatch({type: SEND_SALE_REQUEST, payload: {sale}})
    }
    const toggleConnectionState = (connected) => {       // toggles Clover device connection state
        dispatch({type: TOGGLE_CONNECTION_STATE, payload: {connected}})
    }
    const setPairingCode = (pairingCode) => {        // sets pairing code
        dispatch({type: SET_PAIRING_CODE, payload: {pairingCode}})
    }
    const closePairingCode = () => {     // closes pairing code
        dispatch({type: SET_PAIRING_CODE})
    }
    const setStatus = (message, reason) => {        // decides how to display status
        dispatch({type: SET_STATUS, payload: {message, reason}})
    }
    const closeStatus = () => {      // closes status
        dispatch({type: CLOSE_STATUS})
    }
    const tipAdded = (tipAmount) => {     // sets tip amount
        dispatch({type: TIP_ADDED, payload: {tipAmount}})
        this.setState({tipAmount : tipAmount });
    }

    return <CloverContext.Provider
        value={{...state, initCloverConnection, connectToCloverDevice, sendSaleRequest}}
    >
        {children}
    </CloverContext.Provider>
};

export const useCloverContext = () => {
    return useContext(CloverContext)
}
