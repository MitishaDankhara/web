import React from 'react';
import { Link } from 'react-router-dom';
import '../form.scss'
import { useDispatch } from 'react-redux';
import { handleOnChange, handleOnSubmit } from '../../redux/reducers/users';

export default function SignUp() {
    const dispatch = useDispatch()
    return (
        <div className="form-bg">
            <div className="container">
                <div className="login">
                    <h1>sign up</h1>
                    <div className="form-control">
                        <input type="text" required name="fullName" onChange={(e) => dispatch(handleOnChange(e))} />
                        <label>Fullname</label>
                    </div>
                    <div className="form-control">
                        <input type="email" required name="email" onChange={(e) => dispatch(handleOnChange(e))} />
                        <label>Email</label>
                    </div>
                    <div className="form-control">
                        <input type="password" required name="password" onChange={(e) => dispatch(handleOnChange(e))} />
                        <label>Password</label>
                    </div>
                    <Link to={"/login"}><button type='submit' onClick={(e) => dispatch(handleOnSubmit(e))} className="btn">Sign Up</button></Link>
                    <p className="text">
                        Already have an account? <Link to="/login">login</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
