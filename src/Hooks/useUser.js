import React from 'react'
import { getAuth, signOut } from "firebase/auth";
import { app } from '../connections/firebase';

const useUser = () => {

    const auth = getAuth(app);

    let user = localStorage.getItem('auth');
    user = JSON.parse(user);
    console.log(user);

    const currentUser = () => {
        const _user = localStorage.getItem('auth');
        console.log('_user', user);
        if (_user != null) { return true } else { return false }
    }

    const uuid = () => {
        const _user = localStorage.getItem('auth');
        return JSON.parse(_user).uid;
    }  

    const __signout = () => {
        signOut(auth).then(() => {
            // console.log('// Sign-out successful.');
            localStorage.clear()
        }).catch((error) => {
            console.log('// An error happened.', error);
        });
    }

    return {
        user,
        __signout,
        currentUser,
        uuid
    }

}

export default useUser