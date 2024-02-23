import { Login } from './src/screens'
import fonts from './src/global/fonts'
import { useFonts } from 'expo-font'
import { useState } from 'react'
import StackNavigator from './src/navigation/StackNavigator';

export default function App() {
	const [fuentesCargadas] = useFonts(fonts)
	const [loginHecho, setLoginHecho] = useState('')

	if (!fuentesCargadas) {
	return null
	}

	return loginHecho ? (
			<StackNavigator setLoginHecho={setLoginHecho} />
		) : (
			<Login setLoginHecho={setLoginHecho} />
		)
}