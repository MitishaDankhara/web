import React, { useState } from 'react';
import '../form.scss';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import TextField from '@mui/material/TextField';

export default function Login() {
    const [user, setUser] = useState({ email: '', password: '' });
    const [submitted, setSubmitted] = useState(false);
    const [incorrectEmail, setIncorrectEmail] = useState(false);
    const [incorrectPassword, setIncorrectPassword] = useState(false);
    const navigate = useNavigate();

    const notify = (message) => toast(message, { icon: '❌' });
    const success = (message) => toast(message, { icon: '✔️' });

    function binaryDecode(base64) {
        try {
            const binaryString = atob(base64);
            return JSON.parse(decodeURIComponent(escape(binaryString)));
        } catch (error) {
            console.error('Error decoding data from localStorage:', error);
            return null;
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: name === 'email' ? value.trim() : value,
        }));
        setSubmitted(false);
        setIncorrectEmail(false);
        setIncorrectPassword(false);
    };

    const handleSubmit = () => {
        const users = binaryDecode(localStorage.getItem('user')) || [];
        const { email, password } = user;

        // Check if email and password are empty
        if (!email || !password) {
            setIncorrectEmail(!email);
            setIncorrectPassword(!password);
            setSubmitted(true);
            return;
        }

        const check = users.find((u) => u.email === email && u.password === password);
        if (check) {
            localStorage.setItem('loggedIn', 'true');
            navigate('/home');
            window.location.reload();
            success('Successfully logged in.');
        } else {
            const isEmailIncorrect = !users.some((u) => u.email === email);
            const isPasswordIncorrect = !users.some((u) => u.password === password);

            if (isEmailIncorrect) {
                setIncorrectEmail(true);
                notify('Invalid email.');
            }

            if (isPasswordIncorrect) {
                setIncorrectPassword(true);
                notify('Invalid password.');
            }

            setSubmitted(true);
        }
    };

    return (
        <div>
            <div className="form-bg">
                <div className="container">
                    <div className="login">
                        <h1>Login</h1>
                        <div className="form-control">
                            <TextField
                                className='w-full'
                                label="Email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                variant="standard"
                                error={submitted && (incorrectEmail || !user.email.trim())}
                                helperText={(submitted && !user.email.trim()) ? "Please fill out this field" : (submitted && incorrectEmail && "Incorrect email")}
                            />
                        </div>
                        <div className="form-control">
                            <TextField
                                className='w-full'
                                label="Password"
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleChange}
                                variant="standard"
                                error={submitted && !incorrectEmail && (incorrectPassword || !user.password)}
                                helperText={(submitted && !incorrectEmail && !user.password) ? "Please fill out this field" : (submitted && incorrectPassword && "Incorrect password")}
                            />
                        </div>
                        <button type="submit" onClick={handleSubmit} className="btn">
                            Login
                        </button>
                        <p className="text">
                            Don't have an account? <Link to="/">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
