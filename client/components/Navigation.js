import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { AuthProvider } from '../context/auth'
import NavigationScreen from './NavigationScreen';

const Navigation = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <NavigationScreen />
            </AuthProvider>
        </NavigationContainer>
    )
}

export default Navigation
