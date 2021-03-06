import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MainStackParamList } from '../types/navigation';
import { StackScreenProps } from '@react-navigation/stack';

import Layout from '../components/global/Layout';
import Text from '../components/utils/StyledText';
import Colors from '../constants/Colors';

export default function ({
	navigation,
}: StackScreenProps<MainStackParamList, 'MainTabs'>) {
	return (
		<Layout navigation={navigation} title="About">
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				{/* This text using ubuntu font */}
				<Text bold>This is About tab</Text>

			
			</View>
		</Layout>
	);
}
