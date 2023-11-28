import './usuario.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

export default function Login() {
    const [email, nombre]=useState("")
    const [password, contraseña] =useState("")
    // const login = async (e) =>{
    //     e.preventDefault()
    //     try {
    //     await axios.post("http://localhost:8080/login",{email,password})
    //     alert("inicio de sesion exitoso")
        
        
    //     } catch (error) {
    //     alert("no se pudo iniciar sesion")
        

        
    //     }
    // }
    const handleRegister = async (e) => {
        e.preventDefault();

        try {
        await axios.post('http://localhost:8080/login', {email,password});

        alert("Login exitoso");
        } catch (error) {
        alert("El email o la contraseña son incorrectos");
        console.log("Error al ingresar: ", error);
        }
    };






    // const [ showPassword, setShowPassword ] = useState(false);

    // const changePasswordVisibility1 = (e) => {
    //     e.preventDefault();
    //     setShowPassword(!showPassword);
    // };
    const [passwordType, setPasswordType] = useState("password");

    const showPassword = (e) => {
        e.preventDefault();

        passwordType === "text" ? setPasswordType("password") : setPasswordType("text");
    };
    return (
        <section>
            <div class="form-box">
                <div class="form-value">
                    <form action="http://localhost:3000/" method=''>
                        <h2 class="login-title">Login</h2>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" name="email"  value ={email} onChange={(e) => nombre (e.target.value)} required/>
                            <label for="">Email</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline" onClick={showPassword} />
                            <input name="password" type="password" value ={password} onChange={(e) => contraseña (e.target.value)}  required/>
                            <label for="password">Password</label>
                        </div>
                        <div class="forget">
                            <label for=""><input type="checkbox"/>Remember Me <a href="#">Forget Password</a></label>
                            
                        </div>
                        <button class="boton-login" onClick={handleRegister}>Iniciar Sesión</button>
                        <div class="register">
                            <p>No eres miembro? <Link to='/register' >Regístrate ahora.</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>


    )
}