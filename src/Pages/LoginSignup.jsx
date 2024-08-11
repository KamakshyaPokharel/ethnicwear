// import React from 'react'
// import './CSS1/LoginSignup.css'

// const LoginSignup = () => {
//   return (
//     <div className='loginSign'>
//       <div className="loginsignup-container">
//         <h1>Sign Up</h1>
//         <div className="loginsignup-fields">
//           <input type="text" placeholder='Your Name' />
//           <input type="email" name="" id="" placeholder='Email Address' />
//           <input type="passwrd" placeholder='Password' />
//         </div>
//         <button>Continue</button>
//         <p className="loginsignup-Login">
//           Already have an account? <span>Login here</span>
//           <div className="loginsignup-agree">
//             <input type="checkbox" name='' />
//             <p>By continuing, i agree to the terms and policies. </p>
//           </div>
//         </p>
//       </div>
//     </div>
//   )
// }

// export default LoginSignup
import React from 'react';
import './CSS1/LoginSignup.css';

function App() {
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form action="/login" method="POST">
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
          <a href="#" className="forgot-password">Forgot password?</a>
        </div>
        <button type="submit" className="sign-in-btn">Sign In</button>
      </form>
      <a href="/create-account" className="create-account">Create account</a>
    </div>
  );
}

export default App;
