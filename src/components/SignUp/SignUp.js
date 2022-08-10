import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";
import "./SignUp.css"

const SignUp = () => {

    const [img, setImg] = useState("https://s3.amazonaws.com/babelcube/users/61f7c584d9efd_fault-avatar-profile-icon-vector-social-media-user-image-182145777.jpg");
    const [show, setShow] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        const user = await auth.createUserWithEmailAndPassword(email, password);

        if (user) {
            navigate("/login");
        }
    }

    const onImageChange = (e) => {
        const [file] = e.target.files;
        setImg(URL.createObjectURL(file));
        setShow(false);
    };

    return (
        <>
            <h1 className="text-center m-3">Sign Up</h1>
            <div className="register">
                <section className="vh-100" >
                    <div className="container h-75 p-5">
                        <div className="row d-flex justify-content-center align-items-center ">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" >
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                                <form className="mx-1 mx-md-4">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <div className="form-outline d-flex  flex-column align-items-center flex-fill mb-0">
                                                            <img src={img} alt="" id="#profile_pic" className="picture align-items-center" />
                                                            {show ? <input type="file" id="profile_pic" className="form-control choose" name="profile_pic" accept=".jpg, .jpeg, .png" onChange={onImageChange} /> : null}
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="form3Example1c" className="form-control" placeholder="Enter Name" />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="email" id="form3Example3c" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="password" id="form3Example4c" className="form-control" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-key fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="password" id="form3Example4cd" className="form-control" placeholder="Confirm Password" />
                                                        </div>
                                                    </div>
                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="submit" className="btn btn-dark btn-lg" onClick={handleRegister}>Register</button>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                                <img src="/assests/signup.jpg " className="img-fluid" alt="bg" />
                                            </div>
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

export default SignUp;