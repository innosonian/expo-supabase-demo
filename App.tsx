import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import useCachedResources from './hooks/useCachedResources';
import Navigation from './src/navigation';
import { Provider } from "react-redux"
import store from './src/redux/store'

import { AuthProvider } from './src/provider/AuthProvider';
export default function App() {
	const isLoadingComplete = useCachedResources();

	if (!isLoadingComplete) {
		return null;
	} else {
		return (
			<Provider store={store}>
			<SafeAreaProvider style={{ flex: 1 }}>
				<AuthProvider>
					<Navigation />
				</AuthProvider>
				<StatusBar />
			</SafeAreaProvider>
			</Provider>
		);
	}
}