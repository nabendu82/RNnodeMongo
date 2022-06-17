import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FooterItem from './FooterItem'

const FooterList = () => {
    return (
        <View style={styles.container}>
            <FooterItem text="Home" name="home" />
            <FooterItem text="Post" name="plus-square" />
            <FooterItem text="Links" name="list-ol" />
            <FooterItem text="Account" name="user" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between'
    }
})

export default FooterList