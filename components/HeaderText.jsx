import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fonts, colors } from '../assets/theme'

const HeaderText = ({title, titleColor, additionalStyles}) => {
  return (
    <View style={[styles.contaioner, { additionalStyles }]}>
      <Text style={[styles.headerText, {}]}>{title}</Text>
    </View>
  )
}

export default HeaderText

const styles = StyleSheet.create({

    headerText: {
        fontFamily: fonts.bold,
        fontSize: 48,
        color: colors.purple2
    }
})