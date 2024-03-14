import React from 'react'
import { useFonts } from 'expo-font'
import fonts from './src/global/fonts'
import store from './src/store/index'
import { Provider } from 'react-redux'
import NavigationGeneral from './src/navigation/NavigationGeneral'

export default function App() {
	const [fuentesCargadas] = useFonts(fonts)

	if (!fuentesCargadas) {
		return null
	}

    return(
        <Provider store={store}>
            	<NavigationGeneral />
        </Provider>
    )
}