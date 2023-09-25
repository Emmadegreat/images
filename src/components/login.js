import './styles/header.css'

import React, {useState} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

import auth  from './firebase'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        //const emailHandler = ({setEmail, setPassword}) => {e.target.value}




        if (email === 'user@example.com' && password === '1Password') {
            try {
                signInWithEmailAndPassword(auth, email, password).then(user => {
                    console.log(user, 'loggedin');
                    window.location.href='/home'
                });

            } catch (error) {
                setError('An error occurred during login');
                console.log(error);
            }
        } else {
            setError('Invalid email or password! Try again.');
        }console.log(handleLogin);
    };



    return (
        <>
            <div className='login-wrapper'>

                {error && <p style={{ color: "red", textAlign:"center" }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email" id=""
                        placeholder='user@example.com'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    /><br />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder='...........................'
                        onChange={(e)=>setPassword(e.target.value)}
                    /><br />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login
