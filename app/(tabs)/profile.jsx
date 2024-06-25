import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderText from '../../components/HeaderText'

const profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderText 
        title='Profile'
      />
  </SafeAreaView>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  }
})