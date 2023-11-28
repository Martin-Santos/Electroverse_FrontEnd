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

    const [formData, setForm] = useState({
        usuario: "",
        email: "",
        password: "",
        password2: ""
      });
    
      const handleChange = (e) => {
        setForm({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleRegister = async (e) => {
        e.preventDefault();
    
        if (formData.password !== formData.password2) {
          alert("Las contrasenas deben ser coincidentes");
        } else {
          try {
            await axios.post('http://localhost:8080/register', {
              formData
            });
      
            alert("Usuario registrado exitosamente");
          } catch (error) {
            alert("Erro al registrar al usuario");
            console.log("Error al registrar el usuario: ", error);
          }  
        }
      };
    
      const formStyle = {
        height: '85%',
      };
    
      const imageStyle = {
        height: '70%',
      };

    return (
        <section>
            <div class="form-box">
                <div class="form-value">
                    <form action="http://localhost:3000/" method=''>
                        <h2 class="login-title">Sign Up</h2>
                        <div class="inputbox">
                            <input type="name" id="nombre" name="usuario" onChange={handleChange} required/>
                            <label for="">Name</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline" onClick={changePasswordVisibility} />
                            <input type={showPassword ? 'text' : 'password'}  id="contrasena" name="password"  onChange={handleChange} required/>
                            <label for="">Password</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline" onClick={changeConfirmPasswordVisibility} />
                            <input type={showPassword ? 'text' : 'password'} id="repetir-contrasena" name="password2"  onChange={handleChange} required/>
                            <label for="">Repeat Password</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" id="email" name="email" onChange={handleChange} required/>
                            <label for="">Email</label>
                        </div>
                        <button class="boton-login" type="submit" onClick={handleRegister}>Sign Up</button>
                    </form>
                </div>
            </div>
        </section>


    )
}