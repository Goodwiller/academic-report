import './ManageStudents.css';
import { BackButton } from "../../BackButton/BackButton";
import { getAuth,onAuthStateChanged} from "firebase/auth";
import { getDatabase , ref, child, get} from "firebase/database";
import {app} from "../../../Firebase/firebase";
import { useEffect } from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';





function ManageStudents(){

    let navigate=useNavigate();
    const [role, setRole] = useState(undefined);
    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            let db=ref(getDatabase(app));
            get(child(db, `users/${uid}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    setRole(snapshot.val().role);
                    console.log(snapshot.val().role);
                } else {
                console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });

          } else {
          }
        });
    },
    []);

    if(role===`admin`)
    return(
        <>
            <BackButton/>
            <div className='container-fluid'>
                <div className='container d-inline-block h1 ms-4 text-primary my-3 mb-4'>
                   <em id="heading"> Manage Students</em>
                </div>
            </div>
            <div className="container-fluid p-3 px-5">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item mb-5">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button rounded-3 collapsed text-white fs-3 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Add New Student
                            </button>
                        </h2>
                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="ca" id="ca1"></input>
                                    <label className="form-check-label" htmlFor="ca1">
                                     Start Continuous Assessment 1
                                    </label>
                                </div>
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="ca" id="ca2" ></input>
                                    <label className="form-check-label" htmlFor="ca2">
                                        Start Continuous Assessment 2
                                    </label>
                                </div>
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="ca" id="ca3" ></input>
                                    <label className="form-check-label" htmlFor="ca3">
                                        Start Continuous Assessment 3
                                    </label>
                                </div>
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="ca" id="ca4" ></input>
                                    <label className="form-check-label" htmlFor="ca4">
                                        Start Continuous Assessment 4
                                    </label>
                                </div>
                                <div className='container-fluid mt-4'>
                                    <button   type="button"  className="btn btn-primary btn-lg ">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-5">
                        <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed rounded-3 text-white fs-3 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Migrate Student
                        </button>
                        </h2>
                        <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="pa" id="pa1"></input>
                                    <label className="form-check-label" htmlFor="pa1">
                                     Start Practical Continuous Assessment 1
                                    </label>
                                </div>
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="pa" id="pa2" ></input>
                                    <label className="form-check-label" htmlFor="pa2">
                                        Start Practical Continuous Assessment 2
                                    </label>
                                </div>
                                <div className='container mt-4'>
                                    <button   type="button"   className="btn btn-primary btn-lg">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item mb-5">
                        <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed rounded-3 text-white fs-3 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Remove Student
                        </button>
                        </h2>
                        <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="pa" id="pa1"></input>
                                    <label className="form-check-label" htmlFor="pa1">
                                     Start Practical Continuous Assessment 1
                                    </label>
                                </div>
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="pa" id="pa2" ></input>
                                    <label className="form-check-label" htmlFor="pa2">
                                        Start Practical Continuous Assessment 2
                                    </label>
                                </div>
                                <div className='container mt-4'>
                                    <button   type="button"   className="btn btn-primary btn-lg">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingfour">
                        <button className="accordion-button collapsed rounded-3 text-white fs-3 " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                            Modify Student Details
                        </button>
                        </h2>
                        <div id="flush-collapsefour" className="accordion-collapse collapse" aria-labelledby="flush-headingfour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="pa" id="pa1"></input>
                                    <label className="form-check-label" htmlFor="pa1">
                                     Start Practical Continuous Assessment 1
                                    </label>
                                </div>
                                <div className="form-check my-2">
                                    <input className="form-check-input" type="radio" name="pa" id="pa2" ></input>
                                    <label className="form-check-label" htmlFor="pa2">
                                        Start Practical Continuous Assessment 2
                                    </label>
                                </div>
                                <div className='container mt-4'>
                                    <button   type="button"   className="btn btn-primary btn-lg">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    else if(role===`student` || role===`teacher`)
        navigate('/',{replace:true});
    else
    return(
        <>
        </>
    );
}

export { ManageStudents };