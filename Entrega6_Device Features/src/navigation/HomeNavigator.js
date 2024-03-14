import { Home } from '../screens/'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../constants/colors'
import { Image } from 'react-native'

const Stack = createNativeStackNavigator()

const HomeNavigator = ({ setLoginHecho })  => {
    return (
        <Stack.Navigator
            initialRouteName="HomeStack"
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Stack.Screen
                name="HomeStack"
                component={Home}
                initialParams={{ setLoginHecho: setLoginHecho }}
                options={{
                    headerTitle: () =>  <Image style={{ height: 30, resizeMode: 'contain', flex: 1,  alignSelf: 'center'}} source={require('../logo.png')} />,
                    headerStyle: { backgroundColor: colors.negro }
                }}
            />
        </Stack.Navigator>
    )
}
export default HomeNavigator