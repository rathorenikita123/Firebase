import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const user = await auth.signInWithEmailAndPassword(email, password);
            setEmail("");
            setPassword("");

            if (user) {
                navigate("/dashboard");
            }
        } catch (error) {
            console.log(error);
            alert("User not found");
        }
    }

    return (
        <>
            <div className="login">
                <section className="vh-78">
                    <div className="container h-75 p-5">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="card text-black" >
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-6 col-lg-6 col-xl-7 d-flex align-items-center">
                                            <img src="/assests/login.jpg" className="img-fluid" alt="bg" />
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
                                            <form className="m-3 mx-md-4">
                                                <div className="form-outline mb-4">
                                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                                        placeholder="Enter a valid Email address" onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div className="form-outline mb-3">
                                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                                        placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="form-check mb-0">
                                                        <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                                        <label className="form-check-label" for="form2Example3">
                                                            Remember me
                                                        </label>
                                                    </div>
                                                    <a href="#!" className="text-body">Forgot password?</a>
                                                </div>
                                                <div className="text-center text-lg-start d-flex flex-column justify-content-center mt-4 ">
                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="submit" className="btn btn-dark btn-lg" onClick={handleLogin}>Login</button>
                                                    </div>
                                                    <p className="small fw-bold   mb-0 text-center">Don't have an account?
                                                        <a href="/signup" className="link-danger">SignUp</a>
                                                    </p>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default LogIn;