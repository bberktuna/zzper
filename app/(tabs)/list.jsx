import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderText from '../../components/HeaderText'
import {  } from 'react-native-gesture-handler'

const list = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HeaderText 
          title='List'
        />
      </ScrollView>

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