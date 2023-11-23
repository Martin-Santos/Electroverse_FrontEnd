import './usuario.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

export default function Login() {
    const [mail, nombre] = useState("")
    const [password, contraseña] = useState("")
    const manejarLogin = async (e) => {
        e.preventDefault()
        try{
            await axios.post("http://localhost:8080/login", {mail, password})
            console.log("inicio de seision exitoso")
        }
        catch(error){
            console.log("No se ha podido iniciar sesion")
        }
    }

    const [ showPassword, setShowPassword ] = useState(false);

    const changePasswordVisibility1 = (e) => {
        e.preventDefault();
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
                            <input type="email" name="email"  value={mail} onChange={(e) => nombre(e.target.value)} required/>
                            <label for="">Email</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline" onClick={changePasswordVisibility1} />
                            <input name="password" type="password" value={password} onChange={(e) => contraseña(e.target.value)}  required/>
                            <label for="password">Password</label>
                        </div>
                        <div class="forget">
                            <label for=""><input type="checkbox"/>Remember Me <a href="#">Forget Password</a></label>
                            
                        </div>
                        <button class="boton-login" onClick={manejarLogin}>Log in</button>
                        <div class="register">
                            <p>No eres miembro? <Link to='/register' >Regístrate ahora.</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>


    )
}