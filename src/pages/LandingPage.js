import React from 'react';
import Login from '../components/Login';
import Logo from '../components/Logo';

class LandingPage extends React.Component{
    render(){
        return  <div>
                    <Logo />
                    <div className='row'>
                        <Login />
                    </div>
                    <div className='row'>
                        <div className='container center'>
                            <h5><a href='/register'>Create a new account?</a></h5>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='container center' style={{marginTop:'50px'}}>
                            <div className='row'>
                               <b>Backend</b> <a href='https://github.com/pranavp1616/snapshare_api/'>Django(python) github</a>
                            </div>
                            <div className='row'>
                               <b>Frontend</b> <a href='https://github.com/pranavp1616/snapeshare_reactui'>React (JS) github</a>
                            </div>
                        </div>
                    </div>
                </div>
    }
}

export default LandingPage; 