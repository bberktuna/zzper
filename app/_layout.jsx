import React, { useEffect, useState } from "react"
import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {

  const [isSignedIn, setIsSetsignedIn] = useState(true)

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

    <>
    <Stack>
      
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      {/* <Stack.Screen name="/search/[query]" options={{ headerShown: false }} /> */}
    </Stack>
  </>
    

  )
}

export default RootLayout



