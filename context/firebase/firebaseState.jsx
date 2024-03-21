import React, { useReducer} from 'react';

import firebase from '../../firebase/firebase';
import firebaseReducer from './firebaseReducer';
import FirebaseContex from './firebaseContext';

const FirebaseState = (props) => {
    console.log(firebase);

    const initialState = {
        menu: []
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState);

        // Función que se ejecuta para traer los productos
    const obtenerProductos = () => {

        // consultar firebase
        firebase.db
            .collection('productos')
            .where('existencia', '==', true) // traer solo los que esten en existencia
            .onSnapshot(manejarSnapshot);

        function manejarSnapshot(snapshot) {
            let platillos = snapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                }
            });

            // Ordenar por categoria con lodash
            platillos = _.sortBy(platillos, 'categoria');

            // console.log(platillos)

            // Tenemos resultados de la base de datos
            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: platillos
            });
        }
    }

    return(
        <FirebaseContex.Provider
            value={{
                menu: state.menu,
                firebase
            }}
        >
            {props.children}
        </FirebaseContex.Provider>
    )
}

export default FirebaseState;
