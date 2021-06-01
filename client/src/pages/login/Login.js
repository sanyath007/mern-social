import React, { useRef } from 'react'
import './Login.css';

const Login = () => {
    const email = useRef();
    const password = useRef();

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lamasocial.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox">
                        <input
                            type="email"
                            ref={email}
                            className="loginInput"
                            placeholder="Email"
                            required
                        />
                        <input
                            type="password"
                            ref={password}
                            className="loginInput"
                            placeholder="Password"
                            required
                        />
                        <button className="loginButton">
                            {false ? "" : "Login"}
                        </button>
                        <span className="loginForget">Forget Password?</span>
                        <button className="loginRegisterButton">
                            {false ? "" : "Create a new account"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
