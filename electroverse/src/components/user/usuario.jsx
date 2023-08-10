import './usuario.css';

export default function Slider() {
    return (
        <section>
            <div class="form-box">
                <div class="form-value">
                    <form action="">
                        <h2 class="login-title">Login</h2>
                        <div class="inputbox">
                            <ion-icon name="mail-outline"></ion-icon>
                            <input type="email" required/>
                            <label for="">Email</label>
                        </div>
                        <div class="inputbox">
                            <ion-icon name="lock-closed-outline"></ion-icon>
                            <input type="password" required/>
                            <label for="">Password</label>
                        </div>
                        <div class="forget">
                            <label for=""><input type="checkbox"/>Remember Me <a href="#">Forget Password</a></label>
                            
                        </div>
                        <button class="boton-login">Log in</button>
                        <div class="register">
                            <p>Don't have an account? <a href="#">Register now.</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </section>


    )
}