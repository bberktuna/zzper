import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderText from '../../components/HeaderText'

const list = () => {
  return (
    <SafeAreaView style={styles.container}>
    <HeaderText 
      title='List'
    />
  </SafeAreaView>
  )
}

export default list

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  }
})