import './usuario.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const [ showPassword, setShowPassword ] = useState(false);

    const changePasswordVisibility = (e) => {
        e.preventDefault();
        console.log("ENTRO AL CHANGE")
        setShowPassword(!showPassword);
    };
    const changeConfirmPasswordVisibility = (b) => {
        b.preventDefault();
        console.log("ENTRO AL CHANGE")
        setShowPassword(!showPassword);
    };
    return (
        <section>
            <div class="form-box">
                <div class="form-value">
                    <form action="" method=''>
                        <h2 class="login-title">Login</h2>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" required/>
                            <label for="">Email</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline" onClick={changePasswordVisibility} />
                            <input type="password" required/>
                            <label for="">Password</label>
                        </div>
                        <div class="forget">
                            <label for=""><input type="checkbox"/>Remember Me <a href="#">Forget Password</a></label>
                            
                        </div>
                        <button class="boton-login">Log in</button>
                        <div class="register">
                            <p>Don't have an account? <Link to='/register' >Register now.</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>


    )
}