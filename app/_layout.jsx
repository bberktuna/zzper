import React, { useEffect, useState } from "react"
import { useFonts } from "expo-font"
import { SplashScreen, Stack, useRouter } from "expo-router"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from "react-native";
import  GlobalProvider  from "../context/GlobalProvider";


SplashScreen.preventAutoHideAsync()

const RootLayout = () => {

  //! LOADING FONTS
  const [fontsLoaded, error] = useFonts({
    "RobotoMono-Bold": require("../assets/fonts/RobotoMono-Bold.ttf"),
    "RobotoMono-Thin": require("../assets/fonts/RobotoMono-Thin.ttf"),
    "RobotoMono-Regular": require("../assets/fonts/RobotoMono-Regular.ttf"),
    "RobotoMono-SemiBold": require("../assets/fonts/RobotoMono-SemiBold.ttf"),
    "RobotoMono-Light": require("../assets/fonts/RobotoMono-Light.ttf"),
  })
  useEffect(() => {
    if (error) throw error
    if (fontsLoaded) SplashScreen.hideAsync()
  }, [fontsLoaded, error])

  if (!fontsLoaded && !error) return null
  return (
    <GlobalProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </GlobalProvider>
  )

}
export default RootLayout

