import { View, Text, Image, StyleSheet } from "react-native"
import { Tabs, Redirect } from "expo-router"
import { FontAwesome6 } from "@expo/vector-icons"
import { colors } from "../../assets/theme"
import CustomIcon from "../../components/CustomIcon"
import { Octicons, Ionicons } from '@expo/vector-icons';

// const TabIcon = ({icon, color, name, focused}) => {
//     return (
//         <View className='items-center justify-center gap-2'>
//             <Image 
//                 source={icon}
//                 resizeMode="contain"
//                 tintColor={color}
//                 className="w-6 h-6"
//             />
//             <Text className= {`${focused ? 'font-psemibold' : 'font-pregular'}text-xs`} style={{ color: color}}>{name}</Text>
//         </View>
//     )
// }

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'home') {
                iconName = focused ? 'home' : 'home'

              } else if (route.name === 'graphs') {
                iconName = focused ? 'graph' : 'graph';

              } else if (route.name === 'list') {
                iconName = focused ? 'list-unordered' : 'list-unordered'; 

              } else if (route.name === 'profile') {
                iconName = focused ? 'person' : 'person';
              }
  
              return <Octicons name={iconName} size={size - 2} color={color} />;
            },
            tabBarActiveTintColor: colors.purple2,
            tabBarInactiveTintColor: colors.black,
            headerShown: false,
            tabBarShowLabel: false
          })}
      >
        <Tabs.Screen name="home" />
        <Tabs.Screen name="list" />
        <Tabs.Screen name="graphs" />
        <Tabs.Screen  name="profile"/>

      </Tabs>
    </>
  )
}

export default TabsLayout

const styles = StyleSheet.create({
bolderIcon: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: .5, height: .5 },
    textShadowRadius: .1,
}
})
