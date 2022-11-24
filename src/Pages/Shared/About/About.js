import React from 'react';
import { Link } from 'react-router-dom';
import myPic from '../../../images/IMG20221016113530.jpg';

const About = () => {
    return (
        <>
            <div className='container emp-profile m-32 bg-yellow-50 p-12'>
                <form method=''>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='w-44' src={myPic} alt="" />
                        </div>
                        <div className='col-md-6'>
                            <div className='profile-head mt-2'>
                                <h4>Saiful ISlam</h4>
                                <h6>Web Developer</h6>
                                <p>RANKING: <span>1/10 <span></span></span></p>


                                <ul class="nav nav-tabs" role={'tablist'}>
                                    <li class="nav-item">
                                        <Link className="nav-link active" id='home-tab' data-toggle='tab' role={'tab'}>About</Link>
                                    </li>
                                  
                                    <li class="nav-item">
                                        <Link className="nav-link active" id='profile-tab' data-toggle='tab' role={'tab'}>Timeline</Link>
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </>
    );
};

export default About;