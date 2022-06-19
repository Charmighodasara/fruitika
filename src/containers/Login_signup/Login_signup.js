import React, { useState } from 'react';
import { Button } from 'reactstrap';

function Login_signup(props) {
    const [user, setUser] = useState('login')
    const [forgot, setForgot] = useState('flase')

    return (
        <div>
            <div className="search-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="close-btn"><i className="fas fa-window-close" /></span>
                            <div className="search-bar">
                                <div className="search-bar-tablecell">
                                    <h3>Search For:</h3>
                                    <input type="text" placeholder="Keywords" />
                                    <button type="submit">Search <i className="fas fa-search" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcrumb-section breadcrumb-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <div className="breadcrumb-text">
                                <p>Fresh and Organic </p>
                                {
                                    forgot === 'true' ?
                                        <h1>Forgot password</h1>
                                        :
                                        user === 'login' ?
                                            <h1>Login</h1>
                                            :
                                            <h1>signup</h1>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* contact form */}
            <div className="contact-from-section mt-100 mb-100 ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-5 mb-lg-0 m-auto">

                            <div id="form_status m-auto" />
                            <div className="contact-form ">
                                <div id="fruitkha-contact">
                                    {
                                        forgot === 'true' ?
                                            null
                                            :
                                            user === 'login' ?
                                                null
                                                :
                                                <p>
                                                    <input type="text" placeholder="Name" name="name" id="name" />
                                                </p>
                                    }

                                    <p>
                                        <input type="email" placeholder="Email" name="email" id="email" />
                                    </p>
                                    {forgot === 'true' ?
                                        null
                                        :
                                        user === 'login' ?
                                            < >
                                                <p>
                                                    <input type="password" placeholder="password" name="password" id="password" />
                                                </p>
                                                <div>
                                                    <input id="checkbox2" type="checkbox" onClick={() => setForgot('true')} /> <label > Forgot your password ? </label>
                                                </div>
                                            </>
                                            :
                                            <p>
                                                <input type="password" placeholder="password" name="password" id="password" />
                                            </p>
                                    }
                                    {
                                        forgot === 'true' ?
                                            <p><button type="submit">Submit</button></p>
                                            :
                                            user === 'login' ?
                                                <p><button type="submit">Login</button></p>
                                                :
                                                <p><button type="submit">Signup</button></p>
                                    }
                                    {forgot === 'true' ?
                                   <p>Go back to login / signup <button type="submit" onClick={() => setForgot('false')}> back</button>
                                    </p>
                                    :
                                    user === 'login' ?
                                        <p>create an new account <button type="submit" onClick={() => setUser('signup')}> signup</button>
                                        </p>
                                        :
                                        <p>already an account <button type="submit" onClick={() => setUser('login')}> login</button>
                                        </p>
                                }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            {/* end contact form */}
        </div>
    );
}

export default Login_signup;