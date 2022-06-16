import React, {useRef, useEffect, useState, useReducer} from "react";

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
    theme: 'light'
}

function reducer(state, action) {
    switch (action.type) {
        case 'TOGGLE_THEME': {
            return {
                ...state,
                theme: state.theme === 'light' ? 'dark' : 'light'
            }
        }
    
        default:
            throw new Error('Bad action type')
    }
}

const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}

export default GlobalContextProvider;