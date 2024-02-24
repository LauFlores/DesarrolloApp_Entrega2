import HomeNavigator from './HomeNavigator'
import PerfilNavigator from './PerfilNavigator'
import { colors } from '../constants/colors'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

const BottomTab = createBottomTabNavigator()

const BottomTabNavigator = () => {

    return (
        <NavigationContainer>
            <BottomTab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.barrita,
                }}>

                {/* pantallas de la barrita */}
                <BottomTab.Screen
                    name="Home"
                    component={HomeNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (<Ionicons name="home" size={30} color={focused ? colors.violeta : colors.fondoClaro} />),
                    }}
                />
                <BottomTab.Screen
                    name="Perfil"
                    component={PerfilNavigator}
                    options={{
                        tabBarIcon: ({ focused }) => (<FontAwesome name="user-circle-o" size={30} color={focused ? colors.violeta : colors.fondoClaro} />),
                    }}
                />
            </BottomTab.Navigator>
        </NavigationContainer>
    )
}
export default BottomTabNavigator

const styles = StyleSheet.create({
    barrita: {
        backgroundColor: colors.negro,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
    },
})