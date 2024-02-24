import React from 'react'
import { useSelector } from 'react-redux'
import BottomTabNavigator from './BottomTabNavigator'
import Login  from '../screens/Login/Login'

const NavigationGeneral = () => {

	const loginHecho = useSelector((state) => state.login.loginHecho);

	return (loginHecho ? (
            <BottomTabNavigator/>
        ) : (
            <Login />
        )
	)
}

export default NavigationGeneral