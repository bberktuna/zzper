import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { colors } from "../../assets/theme"

const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen 
          name='sign-in'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='sign-up'
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name='forgot-password'
          options={{
            headerShown: false
          }}
        />

        {/* <Stack.Screen 
          name='add-data'
          options={{
            presentation: 'modal',
            headerShown: false,
            headerleft: () => (
              <TouchableOpacity
                onPress={() => {
                  router.back()
                }}
              >
                <Text>close</Text>
              </TouchableOpacity>
            )
          }}
        /> */}
      </Stack>
      <StatusBar backgroundColor={colors.purple2} style="light" />

    </>
  )
}

export default AuthLayout
