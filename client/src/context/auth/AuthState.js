import React, { useReducer } from 'react';
import axios from 'axios';
import AuthContext from './authContext';
import authReducer from './authReducer';
import setAuthToken from '../../utils/setAuthToken';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    CLEAR_ERRORS,
    USER_LOADED,
    AUTH_ERROR

} from '../types';

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        error: null
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    //Load User
    const loadUser = async () => {
        // @todo -- load token into globak headers

        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        console.log("====1,5=== begin");
        try {
            const res = await axios.get('/api/auth');

            console.log("====2=== begin");
            console.log(res.data);
            console.log("====2=== end");

            dispatch({ type: USER_LOADED, payload: res.data });
        } catch (err) {
            dispatch({ type: AUTH_ERROR });
        }
        console.log("====1,5=== end");
    }

    //Register User
    const register = async formData => {
        const config = {
            header: {
                "Content-type": 'application/json'
            }
        }
        try {
            const res = await axios.post('/api/users', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });

            console.log("====1=== begin");
            console.log(res.data);
            console.log("====1=== end");

            console.log("====3=== begin");
            loadUser();
            console.log("====3=== end");
        } catch (err) {
            dispatch({
                type: REGISTER_FAIL,
                payload: err.response.data.msg
            })
        }
    }

    //Login User
    const login = () => console.log('login');

    //Logout
    const logout = () => console.log('log out');

    //Clear Error
    const clearErrors = () => dispatch({ type: CLEAR_ERRORS });


    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuthenticated: state.isAuthenticated,
                loading: state.loading,
                user: state.user,
                error: state.error,
                register,
                loadUser,
                login,
                logout,
                clearErrors

            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthState;
