import './register.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {

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
                        <h2 class="login-title">Sign Up</h2>
                        <div class="inputbox">
                            <input type="name" required/>
                            <label for="">Name</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline" onClick={changePasswordVisibility} />
                            <input type={showPassword ? 'text' : 'password'} required/>
                            <label for="">Password</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline" onClick={changeConfirmPasswordVisibility} />
                            <input type={showPassword ? 'text' : 'password'} required/>
                            <label for="">Repeat Password</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" required/>
                            <label for="">Email</label>
                        </div>
                        <button class="boton-login">Sign Up</button>
                    </form>
                </div>
            </div>
        </section>


    )
}