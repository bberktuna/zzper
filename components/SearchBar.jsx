import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, fonts } from '../assets/theme'
import { Ionicons, AntDesign  } from '@expo/vector-icons';
import { useState } from 'react';

const SearchBar = () => {

  const [isFocused, setIsFocused] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [width, setWidth] = useState(200); // Initial width

//! ISFOCUSED FALSE OLDUGUNDA TEXT SILINSIN

  return (
    <View style={{ flexDirection: 'row'}}>
    <View style={[styles.container, 
    isFocused ? { flex: .9, maxWidth: '85%'} : { flex: 1, maxWidth: '100%'}]}>
      <View style={[styles.startView]}>
        <Ionicons name="search" size={24} color="#9E9EA3" />
        <TextInput
          placeholder='Search'
          value={searchText}
          style={[styles.searchBar]}
          onChangeText={setSearchText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onPressOut={setIsFocused}
          
/>
      </View>
      { isFocused ? (
        <TouchableOpacity style={styles.endView} onPress={() => setIsFocused(false)}>
            <AntDesign name="closecircle" size={22} color="#9E9EA3" />
        </TouchableOpacity>

      ) :
      <></>
     }
    </View>
    { isFocused ? (
        <View style={{ flex: .2, justifyContent: 'center' }}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setIsFocused(false)}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
        </View>

      ) :
      <></>
     }
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 50,
    borderRadius: 14,
    backgroundColor: '#E5E4EA',
  },
  searchBar: {
    minWidth: '90%',
    padding: 12,
    fontFamily: fonts.regular,
    fontSize: 14,
    color: '#9E9EA3',
    transition: 'width 0.3s ease-in-out', // Smooth transition for width

  },
  startView: {
    flex: .85,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 8,
  },
  endView: {
    flex: .15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontFamily: fonts.bold,
    color: colors.purple2,
    fontSize: 14,
  },
  cancelButton: {
    justifyContent: 'center',
    paddingLeft: 8
  }
})