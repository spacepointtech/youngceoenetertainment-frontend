// // SignupPage Landing Page

// import React from 'react';
// import { FaGoogle } from 'react-icons/fa'; // Import FaGoogle icon
// import Image from 'next/image';
// import Link from 'next/link';

// export default function SignupPage() {
//   return (
//     <div className="login-wrapper">
//       <div className="background-image"></div>
//       <div className="login-content">
//         <div className="logo-container">
//           <Link href="/">
//             <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
//           </Link>
//         </div>
//         <div className="login-form-container">
//           <h2 className="login-title">Become The Young CEO!</h2>
//           <p className="login-subtitle">
//             Already Young CEO?{' '}
//             <Link href="/login" className="signup-link">Log In</Link>
//           </p>
//           <form>
//             <input type="email" placeholder="Email" className="login-input" required />
//             <input type="password" placeholder="Password" className="login-input" required />
//             <div className="policy-checkbox">
//               <input type="checkbox" id="agree-policy" className="policy-input" required />
//               <label htmlFor="agree-policy" className="policy-label">I agree with the policy of YCE</label>
//             </div>
//             <button type="submit" className="login-button">Become The Young CEO Now!!</button>
//             <button type="button" className="google-login-button">
//               <FaGoogle className="google-icon" />
//               Continue With Google
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


'use client';
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import ReactGA from 'react-ga4';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!email || !password || !agreed) {
      setError('Please fill in all fields and agree to the policy.');
      return;
    }

    // Track form submission
    ReactGA.event({
      category: 'User',
      action: 'Submitted Signup Form',
      label: 'Signup',
    });

    // Add signup logic here (e.g., API call)
    console.log('Signup data:', { email, password });
  };

  // Function to handle Google Sign-In
  const handleGoogleSignIn = () => {
    // Track Google Sign-In
    ReactGA.event({
      category: 'User',
      action: 'Clicked Google Sign-In',
      label: 'Google Login',
    });

    // Add Google sign-in logic here
    console.log('Google Sign-In');
  };

  return (
    <div className="login-wrapper">
      <div className="background-image"></div>
      <div className="login-content">
        <div className="logo-container">
          <Link href="/">
            <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
          </Link>
        </div>
        <div className="login-form-container">
          <h2 className="login-title">Become The Young CEO!</h2>
          <p className="login-subtitle">
            Already a Young CEO?{' '}
            <Link href="/login" className="signup-link">Log In</Link>
          </p>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="login-input"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="login-input"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="policy-checkbox">
              <input
                type="checkbox"
                id="agree-policy"
                className="policy-input"
                required
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
              />
              <label htmlFor="agree-policy" className="policy-label">I agree with the policy of YCE</label>
            </div>
            <button type="submit" className="login-button">Become The Young CEO Now!!</button>
            <button type="button" className="google-login-button" onClick={handleGoogleSignIn}>
              <FaGoogle className="google-icon" />
              Continue With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



