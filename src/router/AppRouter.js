import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
  } from 'react-router-dom';
  
import { useDispatch, useSelector } from 'react-redux';

import { startChecking } from '../actions/auth';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { LoginScreen } from '../components/auth/LoginScreen';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const { checking, uid } = useSelector( state => state.auth);

    useEffect(() => {
        
        dispatch( startChecking() );

    }, [dispatch])

    if ( checking ) {
        return (<h5>Espere...</h5>);
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute 
                        exact 
                        path="/login" 
                        component={ LoginScreen }
                        isAuthenticated={ !!uid }
                    />
                    <PrivateRoute 
                        path="/"
                        component={ DashboardRoutes }
                        isAuthenticated={ !!uid }
                    />

                </Switch>
            </div>
        </Router>
    )
}
