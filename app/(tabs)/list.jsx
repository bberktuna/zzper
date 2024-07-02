import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderText from '../../components/HeaderText'
import {  } from 'react-native-gesture-handler'
import SearchBar from '../../components/SearchBar'
import ListCell from '../../components/ListCell'

const list = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.headerView}>
          <HeaderText 
            title='List'
          />
        </View>
        <View style={styles.searchView}>
          <SearchBar 

          />
        </View>
        <View style={styles.listView}>
          <ListCell 
            
          />
        </View>
      </ScrollView>

  </SafeAreaView>
  )
}

export default list

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    
  },
  headerView: {
    flex: .2
  },
  searchView: { flex: .1},
  listView: {
    flex: .7
  }

})