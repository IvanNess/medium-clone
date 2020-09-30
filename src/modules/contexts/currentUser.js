import { createContext, useReducer } from 'react'
import React from 'react'

const initialState = {
    isLoading: false,
    isLogged: null,
    currentUser: null
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'LOADING':
            return {
                ...state, isLoading: true
            }
        case 'SET_AUTHORIZED':
            return {
                ...state,
                isLogged: true,
                isLoading: false,
                currentUser: payload
            }
        case 'SET_UNAUTHORIZED':
            return {
                ...state,
                isLogged: false
            }
        case 'LOGOUT':
            return {
                ...initialState,
                isLogged: false
            }
        default: return state
    }
}

export const CurrentUserContext = createContext([{}, () => { }])

export const CurrentUserProvider = ({ children }) => {
    // const [state, setState] = useState({
    //     isLoading: false,
    //     isLogged: null,
    //     currentUser: null
    // })
    const value = useReducer(reducer, initialState)
    return (
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    )

}