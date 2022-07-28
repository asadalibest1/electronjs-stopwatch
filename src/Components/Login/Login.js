import React, { useState } from 'react'
import { app } from '../../connections/firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const Login = ({ changeState }) => {


    const [Data, setData] = useState({ email: '', password: '' })
    const [Error, setError] = useState('')
    const auth = getAuth(app);

    const submit = (e) => {
        e.preventDefault();
        setError('')


        signInWithEmailAndPassword(auth, Data.email, Data.password)
            .then((userCredential) => {
                // Signed in 
                if (userCredential.user) {
                    localStorage.setItem('auth', JSON.stringify(userCredential.user))
                    changeState(1)
                }


                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('err', errorCode);
                if (errorCode === 'auth/user-not-found') {
                    return createUser()
                }
                const errorCodefilter = error.code.replace('auth/', '').replace('-', " ");
                setError(errorCodefilter)


            });




    }

    const createUser = () => {
        createUserWithEmailAndPassword(auth, Data.email, Data.password)
            .then((userCredential) => {
                // Signed in 
                // setData(userCredential.user);
                if (userCredential.user) {
                    localStorage.setItem('auth', JSON.stringify(userCredential.user))
                    changeState(1)
                }



            })
            .catch((error) => {
                const errorCode = error.code.replace('auth/', '').replace('-', " ");
                const errorMessage = error.message;
                console.log('err', errorCode);

                setError(errorCode)
            });
    }

    return (

        <div class="loginBox">
            <img class="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px" />
            <h3>Sign in here</h3>
            <form action="" method="post" onSubmit={submit}>
                <div class="inputBox">
                    <input id="uname" type="text" name="Username" onChange={(e) => setData({ ...Data, email: e.target.value })} placeholder="Username" required />
                    <input id="pass" type="password" name="Password" onChange={(e) => setData({ ...Data, password: e.target.value })} placeholder="Password" required />
                </div>
                <div className='text-center text-danger'>{Error}</div>
                {/* <input type="button" name="" value="check" onClick={() => {

                    var user = firebase.auth().currentUser;
                    console.log(user);
                    user.updateProfile({
                        displayName: "Jane Q. User",
                        // photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then((res) => {
                        console.log(res);
                    }
                    )

                }} /> */}
                <input type="submit" name="" value="Login" />
            </form>
            {/* <a href="#">Forget Password</a>
            <div class="text-center">
                <p style={{ color: '#59238F' }}>Sign-Up</p>
            </div> */}

        </div>)
}

export default Login