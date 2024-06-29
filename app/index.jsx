import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context"
import { fonts, colors } from '../assets/theme'
import { Redirect, router, useRouter } from 'expo-router';
import CustomButton from './../components/CustomButton';
import HeaderText from '../components/HeaderText';
import { useGlobalContext } from './../context/GlobalProvider';



const Welcome = () => {

  const { loading, isLogged } = useGlobalContext();

  if (!loading && isLogged) return <Redirect href="/home" />;
  return (
//<SafeAreaView style={styles.container}>
  <ScrollView contentContainerStyle={styles.scrollContainer}>

      <View style={styles.headerView}>
        <HeaderText 
          title='Welcome'
        />
      </View>
      
      <View style={styles.introduceTextView}>

          <Text style={styles.introduceText}>Hello! As a freelancer, managing your time effectively and keeping track of your daily working hours is crucial. This app is designed to help you easily log, monitor, and manage your work hours each day. 
          </Text>
      </View>

      <View style={styles.gettingStartedButtonView}>
          <CustomButton
          title='Get Started!'
          handlePress={() => router.push('/home')} //sign-up
          buttonBackgroundColor = {colors.purple2}
          textColor = {colors.white}
          />
      </View>

        <StatusBar style="auto" />
    </ScrollView>

  //</SafeAreaView>


  );
}

export default Welcome


const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 12 ,
  },
  headerView: {
    flex: .3,
    width: '100%',
    height: '100%',
    paddingTop: 60
  },
  introduceTextView: {
    flex: .6
  },
  gettingStartedButtonView: {
    flex: .1,
    position: 'absolute',
    bottom: 36
  },
  headerText: {
    fontFamily: fonts.bold,
    fontSize: 48
  },

  introduceText: {
    fontFamily: fonts.regular,



  },

});
