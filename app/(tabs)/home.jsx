import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderText from '../../components/HeaderText'
import CustomCalendar from '../../components/CustomCalendar'

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <HeaderText 
        title='Calendar'
      /> */}
      <CustomCalendar />
    </SafeAreaView>
  )
}

export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12
  }
})