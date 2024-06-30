import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors, fonts } from '../assets/theme'

const CustomButton = ({handlePress, title, additionalStyles, viewStyles, buttonBackgroundColor, textColor}) => {
  return (
    <View style={[styles.container,  additionalStyles ]}>
        <TouchableOpacity onPress={handlePress} style={[styles.button, { backgroundColor:buttonBackgroundColor} ]}>
            <Text style={[styles.buttonText, {color: textColor}]}>
                {title}
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        minWidth : '100%',
        minHeight: 48,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 25,

    },
    buttonText: {
        fontFamily: fonts.bold,
    }
})