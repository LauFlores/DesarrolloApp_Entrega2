import { Perfil } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from '../constants/colors'

const Stack = createNativeStackNavigator()

const PerfilNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="PerfilStack"
            screenOptions={() => ({
                headerShown: false,
            })}
        >
            <Stack.Screen
                name="PerfilStack"
                component={Perfil}
                options={{
                    title: 'Mi Perfil',
                    headerStyle: { backgroundColor: colors.negro },
                    headerTintColor: colors.blanco,
                    headerTitleStyle: { fontWeight: 'bold' },
                }}
            />
        </Stack.Navigator>
    )
}
export default PerfilNavigator