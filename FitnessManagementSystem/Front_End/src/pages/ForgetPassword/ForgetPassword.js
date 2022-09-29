import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';


export default function ForgetPassword() {

    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [loginid, setLoginid] = useState("");
    const [messege, setMessege] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function updateData() {
        const user = {};
        user.username = username;
        user.password = password;
        user.loginid = loginid;

        if(username=="" || password=="" || loginid=="")
        {
            setMessege("Enter Valid Data");
            return;
        }


        if (password == confirmPassword) {
            axios.post("http://localhost:8080/forgetpassword", user)
                .then((response) => {setMessege(response.data) })
                .catch((error) => {setMessege("Invalid Username Or Email") })
        }
        else {
            setMessege("Password Misamatch")
        }

    }
    return (
        <div>
            <section>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ "borderRadius": " 1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="login form" className="img-fluid" style={{ "borderRadius": " 1rem 0 0 1rem" }} />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black" style={{ 'backgroundColor': 'rgb(5, 101, 134)' }}>

                                            <form>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i className="fas fa-key fa-2x me-3" style={{ "color": " #ff6219" }}></i>
                                                    <span className="h1 fw-bold mb-0">Forget Password</span>
                                                </div>


                                                <div className="form-outline mb-4">
                                                <label className="form-label">Username</label>
                                                    <input type="text" className="form-control form-control-lg" placeholder='enter username' required minLength={8} maxLength={16} onBlur={(e) => { setusername(e.target.value) }} />
                                                    
                                                </div>


                                                <div className="form-outline mb-4">
                                                <label className="form-label">Login Id</label>
                                                    <input type="email" className="form-control form-control-lg" placeholder='enter login id' required onBlur={(e) => { setLoginid(e.target.value) }} />
                                                    
                                                </div>

                                                <div className="form-outline mb-4">
                                                <label className="form-label">New Password</label>
                                                    <input type="password" className="form-control form-control-lg" placeholder='enter new password' required minLength={8} maxLength={16} onBlur={(e) => { setPassword(e.target.value) }} />
                                                    
                                                </div>

                                                <div className="form-outline mb-4">
                                                <label className="form-label">Confirm Password</label>
                                                    <input type="password" className="form-control form-control-lg" placeholder='confirm new password' required minLength={8} maxLength={16} onBlur={(e) => { setConfirmPassword(e.target.value) }} />
                                                    
                                                </div>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="button" onClick={updateData}>Update</button>
                                                </div>
                                                <b>{messege}</b>

                                                <div className="pt-1 mb-4">
                                                    <button className="btn btn-dark btn-lg btn-block" type="reset">Reset</button>
                                                </div>

                                                <p className="mb-5 pb-lg-2" style={{ "color": " #393f81" }}>Already't have an account? <a href="/login"
                                                    style={{ "color": " #393f81" }}>Login here</a></p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
