import { SafeAreaView, StyleSheet, Text, ScrollView, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import FooterList from '../components/footer/FooterList'
import axios from 'axios'
import { LinkContext } from '../context/link'

const Post = ({ navigation }) => {
    const [link, setLink] = useState('');
    const [title, setTitle] = useState('');
    const [links, setLinks] = useContext(LinkContext);

    const handleSubmit = async () => {
        if (link === '' || title === '') {
            alert("Paste url and give it a Title");
            return;
        }
        try {
            const { data } = await axios.post("http://localhost:8000/api/post-link", {
                link,
                title,
            });
            console.log("data => ", data);
            setLinks([data, ...links]);
            setTimeout(() => {
                alert("Link Posted");
                navigation.navigate("Home")
            }, 500)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.mainText}>POST</Text>
                <View style={{ marginHorizontal: 24 }}>
                    <Text style={{ fontSize: 16, color: '#8e93a1' }}>LINK</Text>
                    <TextInput style={styles.signupInput} value={link} onChangeText={text => setLink(text)} autoCapitalize="none" autoCorrect={false} placeholder="Paste the url" />
                </View>
                <View style={{ marginHorizontal: 24 }}>
                    <Text style={{ fontSize: 16, color: '#8e93a1' }}>TITLE</Text>
                    <TextInput style={styles.signupInput} value={title} onChangeText={text => setTitle(text)} autoCapitalize="sentences" placeholder="Give a title" />
                </View>
                <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </ScrollView>
            <FooterList />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    mainText: { fontSize: 30, textAlign: 'center' },
    signupInput: { borderBottomWidth: 0.5, height: 48, borderBottomColor: "#8e93a1", marginBottom: 30},
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

})

export default Post