import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from '../context/auth';

const SignIn = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [state, setState] = useContext(AuthContext);

    const handleSubmit = async () => {
        if (email === '' || password === '') {
            alert("All fields are required");
            return;
        }
        const resp = await axios.post("http://localhost:8000/api/signin", { email, password });
        if(resp.data.error) 
            alert(resp.data.error);
        else{
            setState(resp.data)
            await AsyncStorage.setItem('auth-rn', JSON.stringify(resp.data));
            alert("Sign In Successful");
            navigation.navigate('Home');
        }
    };
    return (
        <KeyboardAwareScrollView contentCotainerStyle={styles.container}>
            <View style={{ marginVertical: 100 }}>
            <View style={styles.imageContainer}>
                <Image source={require("../assets/logo-social.png")} style={styles.imageStyles} />
            </View>
                <Text style={styles.signupText}>Sign In</Text>
                <View style={{ marginHorizontal: 24 }}>
                    <Text style={{ fontSize: 16, color: '#8e93a1' }}>EMAIL</Text>
                    <TextInput style={styles.signupInput} value={email} onChangeText={text => setEmail(text)} autoCompleteType="email" keyboardType="email-address" />
                </View>
                <View style={{ marginHorizontal: 24 }}>
                    <Text style={{ fontSize: 16, color: '#8e93a1' }}>PASSWORD</Text>
                    <TextInput style={styles.signupInput} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true} autoComplteType="password" />
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 12, textAlign: 'center' }}>
                    Not yet registered? {" "}
                    <Text style={{ color: 'darkred', fontWeight: 'bold' }} onPress={() => navigation.navigate("SignUp")}>
                        Sign Up
                    </Text>
                </Text>
                <Text onPress={() => navigation.navigate("ForgotPassword")} style={styles.forgotText}>Forgot Password?</Text>
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    forgotText: { fontSize: 12, textAlign: 'center', marginTop: 10, color: 'darkgreen', fontWeight: 'bold' },
    signupText: {
        fontSize: 30,
        textAlign: 'center'
    },
    signupInput: {
        borderBottomWidth: 0.5,
        height: 48,
        borderBottomColor: "#8e93a1",
        marginBottom: 30,
    },
    buttonStyle: {
        backgroundColor: "darkmagenta",
        height: 50,
        marginBottom: 20,
        justifyContent: "center",
        marginHorizontal: 15,
        borderRadius: 15,
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    imageContainer: { justifyContent: "center", alignItems: "center" },
    imageStyles: { width: 100, height: 100, marginVertical: 20 }
})

export default SignIn