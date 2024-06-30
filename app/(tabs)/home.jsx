import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useMemo, useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderText from '../../components/HeaderText'
import { Calendar } from 'react-native-calendars'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BlurView } from 'expo-blur';
import { fonts, colors } from '../../assets/theme'
import CustomTextField from './../../components/CustomTextField';
import CustomButton from '../../components/CustomButton'
import { Ionicons } from '@expo/vector-icons';



const home = () => {

  const handleMonthChange = (date) => {
    setCurrentMonth(date.dateString);
  };



  

  const [form, setForm] = useState({
    hours: '',
    departure: '',
    destination: '',
    kilometers: '',
    additionalInfo: ''
  })

  //*bottom sheet stuff
  const CustomBackground = ({ style }) => (
    <BlurView style={[style, styles.customBackground]} intensity={30} tint='light'  />
  );

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['80%', '80%', '80%'], []);
  const handleOpenPress = () => {
    bottomSheetRef.current.snapToIndex(0);

  };
    const renderContent = () => (
      <View style={styles.contentContainer}>
        <View style={styles.bottomSheetHeader}>
          <HeaderText
            title='Week 26'
          />
          <Text style={styles.bottomSheetHeaderDate}>
            29/06/2024
          </Text>
        </View>
        <View style={styles.bottomSheetInputsView}>
          <CustomTextField 
            value={form.hours}
            handleChangeText={(e) => setForm({...form, hours: e})}
            placeholder='Hours worked'
            placeholderTextColor='#7b7b8b'
            keyboardType='number-pad'
            additionalStyles={{paddingBottom: 12}}
          />
          <View style={{flexDirection: 'row', alignSelf: 'center', paddingBottom: 12}}>
            <CustomTextField 
                value={form.departure}
                handleChangeText={(e) => setForm({...form, departure: e})}
                placeholder='Daparture'
                placeholderTextColor='#7b7b8b'
                additionalInputStyles={{paddingBottom: 12, minWidth: '44%'}}
                additionalStyles={{minWidth: '44%'}}
              />
              <Ionicons name="arrow-forward" size={24} color="black" style={styles.forwardIcon} />
              <CustomTextField 
                value={form.destination}
                handleChangeText={(e) => setForm({...form, destination: e})}
                placeholder='Destination'
                placeholderTextColor='#7b7b8b'
                additionalInputStyles={{paddingBottom: 12, minWidth: '45%'}}
                additionalStyles={{minWidth: '45%'}}

              />
          </View>

            <CustomTextField 
              value={form.kilometers}
              handleChangeText={(e) => setForm({...form, kilometers: e})}
              placeholder='Kilometers'
              placeholderTextColor='#7b7b8b'
              keyboardType='number-pad'
              additionalStyles={{paddingBottom: 12}}

            />
            <CustomTextField 
              value={form.additionalInfo}
              handleChangeText={(e) => setForm({...form, additionalInfo: e})}
              placeholder='Additional Info'
              placeholderTextColor='#7b7b8b'
              additionalStyles={{minHeight: '20%', paddingBottom: 12}}
            />

        </View>
        <View styles={styles.bottomSheetFooter}>
          <CustomButton 
              handlePress= {() => {}}
              title= 'Add'
              buttonBackgroundColor= {colors.purple2}
              textColor= {colors.white}
              additionalStyles={{ padding: 12}}
          />
        </View>

      </View>
    );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
  {/*//! HEADER */}
        <View style={styles.headerView}>
          <HeaderText 
            title='Calendar'
          />
        </View>
  {/*//! CALENDAR */}
        <View style={styles.calendarView}>
          <Calendar 
            onDayPress={(day) => {
              //alert(day.dateString)
              handleOpenPress()
            }}
          />

        </View>
        {/*//! BOTTOM SHEET */}
        <BottomSheet
            ref={bottomSheetRef}
            index={1} // Initially keep the bottom sheet closed
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            backgroundComponent={CustomBackground}
            borderRadius={20}
          >
            {renderContent()}
          </BottomSheet>

          

      </SafeAreaView>
    </GestureHandlerRootView>

  )
}



export default home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  headerView: {
    flex: .2,
  },
  calendarView: {
    flex: .8,
  },
  customBackground: {
    borderWidth: .5,
    borderRadius: 20, // Adjust this value to change the radius of the corners
    overflow: 'hidden',
    borderColor: 'gray' ,// Adjust this value to change the radius of the corners

   

  },
  contentContainer: {
    flex: 1,
  },
  bottomSheetHeader: {
    flex: .2,
    padding: 12
  },
  bottomSheetHeaderDate: {
    fontFamily: fonts.semibold,
    color: 'gray'
  },
  bottomSheetInputsView: {
    flex: .825,
    paddingHorizontal: 12,
    
  },
  bottomSheetFooter: {
    flex: .025,
  },
  forwardIcon: {
    paddingTop: 10,
    alignSelf: 'center',
    color: colors.purple2
  },

})