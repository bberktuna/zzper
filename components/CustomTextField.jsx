import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { colors, fonts } from '../assets/theme';


const CustomTextField = ({ placeholder, value, handleChangeText, iconColor, additionalStyles, additionalInputStyles }) => {

    const [showPassword, setShowPassword] = useState(false)


  return (
    <View style={[styles.container, additionalStyles]}>
        <TextInput
            
            style={[styles.textInput, additionalInputStyles]}
            value={value}
            placeholder={placeholder}
            onChangeText={handleChangeText}
            autoCorrect={false}
            secureTextEntry={
                placeholder === 'Password' || 'Confirm Password' 
                //&& !showPassword
            }
        />

            {placeholder === 'Confirm Password' || placeholder === 'Password' && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                    <FontAwesome6 
                        name={!showPassword ? 'eye' : 'eye-slash' }
                        size={20} 
                        style={styles.icon}
                        color={iconColor}
                    />
            </TouchableOpacity>
                    )}
    </View>
  )
}

export default CustomTextField

const styles = StyleSheet.create({
    textInput: {
        
        minWidth: '100%',
        minheight: 48,
        alignItems: 'center',
        borderColor: colors.purple2,
        borderWidth: 2,
        padding: 12,
        borderRadius: 25,
        fontFamily: fonts.bold,
        backgroundColor: '##d3d3d3',


    },
    container: {

        minWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 12,
        paddingTop: 12
    },
    icon: {
        position: 'absolute',
        right: 15,
        top: 12,
        color: colors.gray1
    }
})