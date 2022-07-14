import { StyleSheet, Text, SafeAreaView, ScrollView, View, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect } from 'react'
import FooterList from '../components/footer/FooterList'
import { LinkContext } from '../context/link';
import axios from 'axios'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Home = ({ navigation }) => {
    const [links, setLinks] = useContext(LinkContext);

    useEffect(() => {
        fetchLinks();
    }, []);

    const fetchLinks = async () => {
        const { data } = await axios.get("http://localhost:8000/api/links");
        setLinks(data);
    };

    const handlePress = async link => {
        await axios.put(`http://localhost:8000/api/view-count/${link._id}`)
        navigation.navigate("LinkView", { link })
        setLinks(links.map(l => l._id === link._id ? {...l, views: l.views + 1 } : l))
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.mainText}>Recent Links</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                {links && links.map(item => (
                    <View key={item._id} style={{ alignItems: "center" }}>
                        <View style={styles.box}>
                            <Image style={styles.boxImage}
                                source={{ uri: 'https://placeimg.com/500/500/tech' }} />
                            <View style={{ position: "absolute", right: 20, top: 20 }}>
                                <FontAwesome5 name="eye" size={25} color="#ffc600" />
                                <Text style={styles.viewText}>
                                    {item.views}
                                </Text>
                            </View>
                            <TouchableOpacity onPress={() => handlePress(item)}>
                                <View style={{ padding: 5, height: 50 }}>
                                    <Text style={styles.boxText}>{item.title}</Text>
                                    <Text style={styles.linkText}>{item.link}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    ))}
            </ScrollView>
            <FooterList />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    mainText: { fontSize: 30, textAlign: 'center' },
    viewText: { fontSize: 20, color: '#ffc600', textAlign: 'center' },
    box: {
        backgroundColor: "#fff",
        width: "92%",
        height: 280,
        borderRadius: 14,
        shadowColor: "#171717",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        marginBottom: 20,
    },
    boxImage: { height: "70%", width: "100%", borderTopRightRadius: 14, borderTopLeftRadius: 14 },
    boxText: { paddingTop: 5, paddingBottom: 5, fontSize: 20, fontWeight: "bold", color: "#171717" },
    linkText: { fontSize: 16, color: "darkgray", textDecorationLine: "underline" },
})

export default Home