import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { AuthProvider } from '../context/auth'
import { LinkProvider } from '../context/link';
import NavigationScreen from './NavigationScreen';

const Navigation = () => {
    return (
        <NavigationContainer>
            <AuthProvider>
                <LinkProvider>
                    <NavigationScreen />
                </LinkProvider>
            </AuthProvider>
        </NavigationContainer>
    )
}

export default Navigation
