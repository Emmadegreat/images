import './styles/header.css'

import React, {useState} from 'react'

import auth  from './firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;


        if (email === 'user@example.com' && password === '1Password') {
            try {
                signInWithEmailAndPassword(auth, email, password).then(user => {
                    console.log(user, 'loggedin');

                });
                window.location.href='/'

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
                <h2>Sign In</h2>
                {error && <p style={{ color: "red", textAlign:"center" }}>{error}</p>}
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        name="email" id=""
                        placeholder='interns@hngx.com'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    /><br />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder='..............'
                        onChange={(e)=>setPassword(e.target.value)}
                    /><br />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login
