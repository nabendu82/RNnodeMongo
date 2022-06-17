import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const FooterItem = ({ name, text }) => {
    return (
        <TouchableOpacity>
            <>
                <FontAwesome5 name={name} size={25} style={styles.fontStyle} />
                <Text style={styles.textStyle}>{text}</Text>
            </>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fontStyle: { marginBottom: 3, alignSelf: 'center' },
    textStyle: { fontSize: 12, textAlign: 'center', textTransform: 'uppercase' }
})

export default FooterItem