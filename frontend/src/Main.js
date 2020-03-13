import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navigation from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import StudentSignup from './components/Signup/StudentSignup';
import CompanySignup from './components/Signup/CompanySignup';
import Profile from './containers/Profile/profile';
import Logout from './components/Logout/logout';
import Dashboard from './containers/Dashboard/dashboard';
import Event from './containers/Event/event';
import Application from './containers/Application/application';
import CreateJob from './components/create-job/create-job';
import CreateEvent from './components/create-event/create-event';
import CompanyDashboard from './containers/CompanyDashboard/company-dashboard';
import { connect } from 'react-redux';

class Main extends Component {

    render() {
        let routes = (
            <Switch>                
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/student" component={StudentSignup} />
                <Route path="/company" component={CompanySignup} />
                <Redirect to='/' />
            </Switch>           
        );
    
        if(localStorage.getItem('token')){
            routes = (
                <Switch>                               
                    <Route path="/profile" component={Profile} />
                    <Route path="/logout" component={Logout} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/application" component={Application} />
                    <Route path="/event" component={Event} />
                    <Route path="/createjob" component={CreateJob} />
                    <Route path="/createevent" component={CreateEvent} />
                    <Route path="/companydashboard" component={CompanyDashboard} />
                    <Redirect to='/' />
                </Switch>
            );
        }
        return (
            <div>
                {routes}
            </div>
        );

        // return (
        //     <div>
        //         <Route path="/" component={Navigation} />
        //         <Route path="/login" component={Login} />
        //         <Route path="/signup" component={Signup} />
        //         <Route path="/student" component={StudentSignup} />
        //         <Route path="/company" component={CompanySignup} />
        //         <Route path="/profile" component={Profile} />
        //         <Route path="/logout" component={Logout} />
        //         <Route path="/dashboard" component={Dashboard} />
        //     </div>
            
        // );
    };
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.login.token !== null 
    }
}

export default connect(mapStateToProps)(Main);