import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import phone1  from '../images/01.png';
import phone3  from '../images/02.png';
import phone2  from '../images/03.png';
import playstore from '../images/google-play-badge.png';
import logo from '../images/image.png';

import {signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Register(){

    const handleSubmit = (e)  => {
        e.preventDefault()
        const displayname= e.target[0].value;
        const email= e.target[1].value;
        const password= e.target[2].value;
        const file= e.target[3].files[0];
        
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
        
    }
    return(
      <div>
        <Header/>

        <div className='formcontainer'> 
        <section id="image-section">
            <div class="image-container">
                <img src={phone1} alt="Image 1" class="image1"/>
                <img src={phone2} alt="Image 2" class="image2"/>
                <img src={phone3} alt="Image 3" class="image3"/>
            </div>
        </section>

<div className='complete-form'>
        <div className='formwrapper'>
            <span className='logo-form'>Disccussphere</span>
            <span className='register'>Register</span>
            <form onSubmit={handleSubmit}>
            <input type= "text" name="username" placeholder="  Username"/>
            <input type= "email" name="email" placeholder="  Enter you email"/>
            <input type= "password" name="password" placeholder="  Password"/>
            <input type= "file"/>
            <button>Sign up</button>
            </form>
            <div className='login-direct'>
            <p>Already have an account? <a href=''>Login in</a></p>
            </div>
        </div>
        <div className='download-sec'>
          <p>Get the app</p>
          <a href='https://play.google.com/store/apps/details?id=com.qt.ap.debatebox'><img  src={playstore} alt="App Store Button" href/></a>
        </div>
        </div>
        </div>
       {/* // footer */}

       <Footer/>

    </div>
    )
}

export default Register;