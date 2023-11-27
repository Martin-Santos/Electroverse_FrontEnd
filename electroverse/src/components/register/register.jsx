import './register.css';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {

    const [ showPassword, setShowPassword ] = useState(false);

    const changePasswordVisibility = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };
    const changeConfirmPasswordVisibility = (b) => {
        b.preventDefault();
        setShowPassword(!showPassword);
    };

    const [name, nombre]=useState("")
    const [password, contraseña] =useState("")
    const [email, correoElectronico]=useState("")
    const [repeatPassword, repetirContraseña] =useState("")
    const registro = async (e) =>{
        e.preventDefault()
        if (password === repeatPassword){
            try {
                await axios.post("http://localhost:8080/register",{email,password,name})
                alert("cuenta creada exitosamente")
                
            } catch (error) {
                alert("no se pudo crear la cuenta")
                
            }
        }
        else{
            alert("las contraseñas no son iguales")
        }
    }

    return (
        <section>
            <div class="form-box">
                <div class="form-value">
                    <form action="" method=''>
                        <h2 class="login-title">Sign Up</h2>
                        <div class="inputbox">
                            <input type="name" id="nombre" name="nombre" value ={name} onChange={(e) => nombre (e.target.value)} required/>
                            <label for="">Name</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline" onClick={changePasswordVisibility} />
                            <input type={showPassword ? 'text' : 'password'}  id="contrasena" name="contrasena" value ={password} onChange={(e) => contraseña (e.target.value)} required/>
                            <label for="">Password</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline" onClick={changeConfirmPasswordVisibility} />
                            <input type={showPassword ? 'text' : 'password'} id="repetir-contrasena" name="repetir-contrasena" value ={repeatPassword} onChange={(e) => repetirContraseña (e.target.value)} required/>
                            <label for="">Repeat Password</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" id="email" name="email" value ={email} onChange={(e) => correoElectronico (e.target.value)}  required/>
                            <label for="">Email</label>
                        </div>
                        <button class="boton-login" type="submit" onClick = {registro}>Sign Up</button>
                    </form>
                </div>
            </div>
        </section>


    )
}