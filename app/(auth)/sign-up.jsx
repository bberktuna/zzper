import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { colors, fonts } from '../../assets/theme'
import HeaderText from '../../components/HeaderText'
import CustomTextField from '../../components/CustomTextField'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

const SignUp = () => {

    const [form, setForm] = useState({
        email: '',
        password: '',
        checkPassword: ''
      })

  return (
    <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        >
      <ScrollView contentContainerStyle={styles.scrollContainer}>

      {/* HEADER */}
      <View style={styles.headerView}>
        <HeaderText 
          title='Sign Up'
        />
      </View>

      {/* TEXTINPUTS */}
      <View style={styles.inputsView}>
        <CustomTextField 
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          placeholder='Email'
          placeholderTextColor='#7b7b8b'
          keyboardType='email-adress'

        />

        <CustomTextField 
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          placeholder='Password'
          placeholderTextColor='#7b7b8b'

        />

        <CustomTextField 
          value={form.confirmPassword}
          handleChangeText={(e) => setForm({...form, confirmPassword: e})}
          placeholder='Confirm Password'
          placeholderTextColor='#7b7b8b'

        />

        <CustomButton 
          handlePress={() => {}}
          title='Sign Up'
          viewStyles={{paddingTop: 48}}
          buttonBackgroundColor={colors.purple2}
          textColor={colors.white}
        />
      </View>

      {/* FOOTER */}
      <View style={styles.buttonView}>
        <Text style={styles.alreadyText}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity
            onPress={() => router.push('/sign-in')}
          >
            <Text style={{fontFamily: fonts.semibold, color: colors.purple2}}>Sign In</Text>
          </TouchableOpacity>
      </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default SignUp

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12 ,
      },
      headerView: {
        flex: .3,
        width: '100%',
        height: '100%',
        paddingTop: 60
      },
      inputsView: {
        flex: .6,
      },
      buttonView: {
        flex: .1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 36, // Position it at the bottom
      },
      forgotPass: {
        flex: .025,
        paddingTop: 4
      }, 
      forgotPassText: {
        fontFamily: fonts.semibold,
        color: colors.purple2,
        textAlign: 'right'
      },
      alreadyText :{
        flexDirection: 'row',
        fontFamily: fonts.regular,
      },
})