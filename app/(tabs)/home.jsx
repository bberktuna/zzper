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
import moment from 'moment';




const home = () => {

  const [currentMonth, setCurrentMonth] = useState(moment().format('YYYY-MM-DD'));
  const [isBottomSheetVisible, setIsBottomSheetVisible] = useState(false);

  const handleMonthChange = (month) => {
    setCurrentMonth(month.dateString);
  };

  const [form, setForm] = useState({
    hours: '8',
    departure: 'Den Haag',
    destination: '',
    kilometers: '',
    additionalInfo: ''
  })

  //*bottom sheet stuff
  const CustomBackground = ({ style }) => (
    <BlurView style={[style, styles.customBackground]} intensity={30} tint='light'  />
  );

  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['68%', '68%', '68%' ], []);
  const handleOpenPress = () => {
    bottomSheetRef.current.snapToIndex(0);
  }

  const handleSheetChanges = (index) => {
    if (index === -1) {
      setIsBottomSheetVisible(false);
    } else {
      setIsBottomSheetVisible(true);
    }
  }

  //? BOTTOM SHEET CONTENT
    const renderContent = () => (
      <View style={[styles.contentContainer]}>
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
      <SafeAreaView style={[styles.container]}>
  {/*//! HEADER */}
        <View style={[styles.headerView]}>
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
            style={styles.calendar}
            current={currentMonth}
            onMonthChange={handleMonthChange}
            theme={{
              backgroundColor: '#ffffff',
              calendarBackground: '#ffffff',
              textSectionTitleColor: '#b6c1cd',
              textSectionTitleDisabledColor: '#d9e1e8',
              selectedDayTextColor: colors.purple2,
              todayTextColor: colors.purple2,
              dayTextColor: '#2d4150',
              textDisabledColor: '#d9e1e8',
              dotColor: colors.purple2,
              selectedDotColor: '#ffffff',
              arrowColor: colors.purple2,
              disabledArrowColor: '#d9e1e8',
              monthTextColor: colors.purple2,
              indicatorColor: colors.purple2,
              textDayFontFamily: fonts.bold,
              textMonthFontFamily: fonts.bold,
              textDayHeaderFontFamily: fonts.bold,
              textMonthFontSize: 18,
              selectedDayBackgroundColor: colors.purple1         
            }}

          />

        </View>
        {/*//! BOTTOM SHEET */}
        <BottomSheet
            ref={bottomSheetRef}
            index={-1} // Initially keep the bottom sheet closed
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            backgroundComponent={CustomBackground}
            borderRadius={20}
            onClose={() => setIsBottomSheetVisible(false)}
            onChange={handleSheetChanges}

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
    justifyContent: 'center',
  },
  customBackground: {
    borderWidth: 1.5,
    borderRadius: 20, // Adjust this value to change the radius of the corners
    overflow: 'hidden',
    borderColor: '#d3d3d3' ,// Adjust this value to change the radius of the corners
    
  },
  contentContainer: {
    flex: 1,
  },

  bottomSheetHeaderDate: {
    fontFamily: fonts.semibold,
    color: 'gray'
  },
  bottomSheetHeader: {
    flex: .2,
    padding: 12
  },
  bottomSheetInputsView: {
    flex: .775,
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
  calendar: {
    height: '80%',
    width: '100%',
  },

})