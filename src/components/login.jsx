import './styles/header.css'

import React, {useState} from 'react'

import auth from './firebase'

//import { useAuth0 } from '@auth0/auth0-react'

const Login = () => {
    //const { loginWithRedirect } = useAuth0();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email === "user@example.com" && password === "1Password") {
           setTimeout(() => {
                alert(`${email} you have been successfully logged`);
                window.location.href = '/';
           }, 2000);

       } else {
           alert(`wrong user input try again!`)
       }

            /*if (email === 'user@example.com' && password === '1Password') {
                try {
                    await auth.signInWithEmailAndPassword(email, password).then(user => {
                        console.log(user);
                    });
                    window.location.href='/'
                    //await loginWithRedirect({
                    //screen_hint: 'login',
                    //login_hint: 'user@example.com',
                    //redirectUri: window.href = '/',
                    //});
                } catch (error) {
                    setError('An error occurred during login');
                    console.log(error);
                }
            } else {
                setError('Invalid email or password! Try again.');
            }*/
    };
    console.log(handleLogin);


    return (
        <>

            <div className='login-wrapper'>
                <h2>Sign In</h2>
                {error && <p style={{color:"red"}}>{ error}</p>}
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        name="email" id=""
                        placeholder='Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    /><br />
                    <input
                        type="password"
                        name="password"
                        value={password}
                        placeholder='Password'
                        onChange={(e)=>setPassword(e.target.value)}
                    /><br />
                    <button type='submit'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login
