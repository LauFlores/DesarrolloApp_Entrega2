import { Home, Perfil } from '../screens/'
import { colors } from '../constants/colors'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const StackNavigator = ({ setLoginHecho }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" >
                <Stack.Screen
                    name="Home"
                    component={Home}
                    initialParams={{ setLoginHecho: setLoginHecho }}
                    options={{
                        headerTitle: () =>  <Image style={{ height: 30, resizeMode: 'contain', flex: 1,  alignSelf: 'center'}} source={require('../../src/logo.png')} />,
                        headerStyle: { backgroundColor: colors.negro }
                    }}
                />
                <Stack.Screen
                    name="Perfil"
                    component={Perfil}
                    options={{
                        title: 'Nosotros',
                        headerStyle: { backgroundColor: colors.negro },
                        headerTintColor: colors.blanco,
                        headerTitleStyle: { fontWeight: 'bold' },
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default StackNavigator
