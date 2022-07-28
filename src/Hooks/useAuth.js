
import { auth } from '../connections/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from 'react';



const useAuth = async () => {

    // const [User, setUser] = useState('')

    // const login = async () => {
    //     try {
    //         const api = createUserWithEmailAndPassword(auth, 'amsds@gmail.com', 'password');
    //         console.log(api);
    //         setUser(api);

    //     } catch (error) {
    //         console.log(error);
    //         setUser(error);

    //     }
    // }

    // return {
    //     login

    // }

    const [data, setData] = useState('')

    const fetchApi = () => {
        try {
            const api = createUserWithEmailAndPassword(auth, 'amsds@gmail.com', 'password');
            console.log(api);
            setData(api);

        } catch (error) {
            console.log('error', error);
            setData(error);

        }
    };

    // useEffect(() => {
    //     fetchApi();
    // }, []);

    return { data, fetchApi }

}

export default useAuth;