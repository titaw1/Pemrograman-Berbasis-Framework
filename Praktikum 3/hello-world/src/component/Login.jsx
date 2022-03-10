import React from "react";
import './Login.css';

const Login = () => {
  return (
    <body>      
      <h4 class="top-title">Form Login</h4>      
      <div class="container">
        <h3 class="title">Tugas Pertemuan<br/>Ketiga</h3>
        <form class="login_form" action="" method="post" name="form">
          <div class="group">
            <label>Username</label> 
            <input name="username" type="text" placeholder="    Masukkan Username" required></input>
          </div>
          <div class="group">
            <label>Password</label> 
            <input type="password" name="password" placeholder="    Masukkan Password Anda" required></input>
          </div>
			    <button type="submit">Login</button><br />
        </form>
        <div class="bottom-item">
          <input type="checkbox" class="checkbox-size"/>Remember Me<br />
          <button type="reset" class="cancel">Cancel</button>
        </div>
      </div>
    </body>
  );   
}

export default Login;