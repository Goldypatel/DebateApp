import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import playstore from '../images/google-play-badge.png';

function Login(){
    return(
        // header
        <div className='login'>
        <Header/>
        {/* //form */}
        <div className='login-container'> 
        <div className='login-wrapper'>
            <span className='logo-form'>Disccussphere</span>
            <span className='title'>Login</span>
            <form>
            <input type= "email" name="email" placeholder="  Enter you email"/>
            <input type= "password" name="password" placeholder="  Password"/>
            <button>Sign in</button>
            </form>
            <p>Don't have an account? <a href=''> Register</a></p>
           
        </div>
        <div className='download-sec'>
          <p>Get the app</p>
          <a href='https://play.google.com/store/apps/details?id=com.qt.ap.debatebox'><img  src={playstore} alt="App Store Button" href/></a>
        </div>
        </div>
       {/* // footer */}
        <Footer/>
        </div>
    )
}

export default Login;