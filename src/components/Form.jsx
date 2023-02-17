import React, { useState } from 'react';

const Form = (props) => {
    
    // I referred to Instructor Calhoun's "movie-react" code on GitHub for help with constructing some of the elements in this component.

    const [forms, setForms] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const changeHandler = (e) => {
        setForms({...forms, [e.target.name]: e.target.value})
    }

    return (
        <div className="container col-lg-6 mt-4 pt-4">
            <form>
                <div className="d-flex flex-row my-4">
                    <label htmlFor="firstName" className="col-form-label col-sm-4">First Name:</label>
                    <div className="col-sm-8">
                        <input type="text" name="firstName" className="form-control" onChange={changeHandler}/>
                        {
                            forms.firstName && forms.firstName.length < 2 ?
                            <p className="text-danger my-2">First name must be at least two characters long.</p> :
                            ""
                        }
                    </div>
                </div>
                <div className="d-flex flex-row my-4">
                    <label htmlFor="lastName" className="col-form-label col-sm-4">Last Name:</label>
                    <div className="col-sm-8">
                        <input type="text" name="lastName" className="form-control" onChange={changeHandler}/>
                        {
                            forms.lastName && forms.lastName.length < 2 ?
                            <p className="text-danger my-2">Last name must be at least two characters long.</p> :
                            ""
                        }
                    </div>
                </div>
                <div className="d-flex flex-row my-4">
                    <label htmlFor="email" className="col-form-label col-sm-4">Email:</label>
                    <div className="col-sm-8">
                        <input type="text" name="email" className="form-control col-sm-8" onChange={changeHandler}/>
                        {
                            forms.email && forms.email.length < 5 ?
                            <p className="text-danger my-2">Email must be at least five characters long.</p> :
                            ""
                        }
                    </div>
                </div>
                <div className="d-flex flex-row my-4">
                    <label htmlFor="password" className="col-form-label col-sm-4">Password:</label>
                    <div className="col-sm-8">
                        <input type="password" name="password" className="form-control" onChange={changeHandler}/>
                        {
                            forms.password && forms.password.length < 8 ?
                            <p className="text-danger my-2">Password must be at least eight characters long.</p> :
                            ""
                        }
                    </div>
                </div>
                <div className="d-flex flex-row my-4">
                    <label htmlFor="confirmPassword" className="col-form-label col-sm-4">Confirm Password:</label>
                    <div className="col-sm-8">
                        <input type="password" name="confirmPassword" className="form-control" onChange={changeHandler}/>
                        {
                            forms.confirmPassword && forms.confirmPassword !== forms.password ?
                            <p className="text-danger my-2">Passwords must match.</p> :
                            ""
                        }
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form;