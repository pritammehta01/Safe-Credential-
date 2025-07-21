import React, { useState } from 'react';
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send login data to backend
  };
  return (<form onSubmit={handleSubmit}>...</form>);
}
export default Login;
