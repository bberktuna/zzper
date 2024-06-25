import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderText from '../../components/HeaderText'
import CustomTextField from '../../components/CustomTextField'
import CustomButton from './../../components/CustomButton';
import { colors, fonts } from '../../assets/theme'
import { router } from 'expo-router'

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const signIn = () => {
    router.navigate('/home')
  }

  return (
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
      >
        <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* HEADER */}
        <View style={styles.headerView}>
          <HeaderText 
            title='Sign In'
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

          <TouchableOpacity
            onPress={() => router.push('/forgot-password')}
            style={styles.forgotPass}
          >
            <Text style={styles.forgotPassText}>Forgot Password?</Text>
          </TouchableOpacity>

        {/* CHECK USER WHEN SIGN IN LATER */}
          <CustomButton 
            handlePress={() => {signIn()}}
            title='Sign In'
            viewStyles={{paddingTop: 24}}
            buttonBackgroundColor={colors.purple2}
            textColor={colors.white}
          />
        </View>

        {/* FOOTER */}
        <View style={styles.buttonView}>
          <Text style={styles.alreadyText}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity
              onPress={() => router.push('/sign-up')}
            >
              <Text style={{fontFamily: fonts.semibold, color: colors.purple2}}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
  )
}

export default SignIn

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