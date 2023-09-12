import './usuario.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
    const [ showPassword, setShowPassword ] = useState(false);

    const changePasswordVisibility1 = (e) => {
        e.preventDefault();
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
                            <input type="email" name="email" required/>
                            <label for="">Email</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline" onClick={changePasswordVisibility1} />
                            <input name="password" type="password"  required/>
                            <label for="password">Password</label>
                        </div>
                        <div class="forget">
                            <label for=""><input type="checkbox"/>Remember Me <a href="#">Forget Password</a></label>
                            
                        </div>
                        <button class="boton-login">Log in</button>
                        <div class="register">
                            <p>No eres miembro? <Link to='/register' >Regístrate ahora.</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>


    )
}