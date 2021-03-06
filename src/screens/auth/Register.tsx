import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	ScrollView,
	TouchableOpacity,
	View,
	KeyboardAvoidingView,
	ActivityIndicator,
	TextInput,
	Image,
	StyleSheet,
} from 'react-native';
import { supabase } from '../../initSupabase';
import { AuthStackParamList } from '../../types/navigation';
import { StackScreenProps } from '@react-navigation/stack';

import Layout from '../../components/global/Layout';
import Text from '../../components/utils/StyledText';
import Colors from '../../constants/Colors';

export default function ({
	navigation,
}: StackScreenProps<AuthStackParamList, 'Register'>) {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	 function register() {
		setLoading(true);
		 supabase.auth.signUp({
			email: email,
			password: password,
		}).then((data) => {
			setLoading(false);
			console.log(data)
			if (data.data !== undefined) {
				console.log("send message")
            console.log(data)
			alert('Check your email for the login link!');
}
if (data.error) {
	alert(data.error.message);
}

        })
	
	}
	return (
		<KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
			<StatusBar style="auto" translucent backgroundColor="#f7f7f7" />
			<Layout navigation={navigation}>
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
					}}
				>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#f7f7f7',
						}}
					>
						<Image
							resizeMode="contain"
							style={{
								height: 220,
								width: 220,
							}}
							source={require('../../../assets/images/register.png')}
						/>
					</View>
					<View
						style={{
							flex: 3,
							paddingHorizontal: 20,
							paddingBottom: 20,
							backgroundColor: '#fff',
						}}
					>
						<Text
							bold
							style={{
								fontSize: 24,
								color: Colors.black,
								alignSelf: 'center',
								padding: 30,
							}}
						>
							Register
						</Text>
						<Text style={{ color: Colors.black, fontSize: 16 }}>Email</Text>
						<View style={styles.textInputContainer}>
							<TextInput
								style={styles.textInput}
								placeholder="Enter your email"
								value={email}
								autoCapitalize="none"
								autoCompleteType="off"
								autoCorrect={false}
								keyboardType="email-address"
								onChangeText={(text) => setEmail(text)}
							/>
						</View>
						<Text style={{ marginTop: 15, color: Colors.black, fontSize: 16 }}>
							Password
						</Text>
						<View style={styles.textInputContainer}>
							<TextInput
								style={styles.textInput}
								placeholder="Enter your password"
								value={password}
								autoCapitalize="none"
								autoCompleteType="off"
								autoCorrect={false}
								secureTextEntry={true}
								onChangeText={(text) => setPassword(text)}
							/>
						</View>

						<TouchableOpacity
							onPress={() => {
								register();
							}}
							disabled={loading}
							style={{
								flexDirection: 'row',
								marginTop: 20,
							}}
						>
							<View style={styles.button}>
								{loading ? (
									<ActivityIndicator color="#fff" />
								) : (
									<Text bold style={{ fontSize: 16, color: 'white' }}>
										Create an account
									</Text>
								)}
							</View>
						</TouchableOpacity>

						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 15,
								justifyContent: 'center',
							}}
						>
							<Text
								style={{
									color: Colors.black,
								}}
							>
								Already have an account?
							</Text>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate('Login');
								}}
							>
								<Text
									bold
									style={{
										marginLeft: 5,
										color: Colors.black,
									}}
								>
									Login here
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</Layout>
		</KeyboardAvoidingView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	textInputContainer: {
		marginTop: 15,
		backgroundColor: '#FFF',
		borderColor: '#d8d8d8',
		borderWidth: 1,
		borderRadius: 8,
		flexDirection: 'row',
	},
	textInput: {
		padding: 10,
		paddingHorizontal: 20,
		textAlign: 'left',
		color: 'black',
		flex: 1,
		fontFamily: 'Ubuntu_400Regular',
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 15,
		backgroundColor: Colors.primary,
		borderRadius: 8,
	},
});
