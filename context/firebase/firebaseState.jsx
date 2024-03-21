import React, { useReducer} from 'react';

import firebaseReducer from './firebaseReducer';
import FirebaseContex from './firebaseContext';

const FirebaseState = (props) => {

    const initialState = {
        menu: []
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState);

    

    return(
        <FirebaseContex.Provider
            value={{
                menu: state.menu
            }}
        >
            {props.children}
        </FirebaseContex.Provider>
    )
}

export default FirebaseState;
