import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderText from '../../components/HeaderText'
import { Calendar } from 'react-native-calendars'

const home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderText 
        title='Calendar'
      />
      <View style={styles.calendarView}>
        <Calendar 
          onDayPress={(day) => {
            alert(day.dateString)
          }}
        />
      </View>
    </SafeAreaView>
  )
}



export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  calendarView: {

  }
})