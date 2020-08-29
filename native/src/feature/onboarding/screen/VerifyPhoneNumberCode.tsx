import React, { useCallback, useRef } from 'react';
import {
	Alert,
	Dimensions,
	Keyboard,
	KeyboardAvoidingView,
	Linking,
	Platform,
	TouchableWithoutFeedback,
} from 'react-native';
import { PrimaryInput } from '../../../common/component/input';
import { FooterText, PrimaryText, SecundaryText } from '../../../common/component/text';
import { FooterView, SecundaryView, View } from '../../../common/component/view';

const width_window = Dimensions.get('window').width;
const box_count = 10;
const width_one = width_window / box_count;
const loginURL = 'https://google.com';

const OpenURL = ({ url, children }) => {
	const handlePress = useCallback(async () => {
		const supported = await Linking.canOpenURL(url);
		if (supported) {
			await Linking.openURL(url);
		} else {
			Alert.alert(`Don't know how to open this URL: ${url}`);
		}
	}, [url]);
	return (
		<SecundaryText paddingTop={10} fontWeight={'bold'} onPress={handlePress}>
			{children}
		</SecundaryText>
	);
};

export const VerifyPhoneNumberCode = () => {
	const TextInputListArr = [];
	const ref_input2 = useRef();
	const ref_input3 = useRef();

	for (var i = 0; i <= 5; i++) {
		const j = i + 1;
		TextInputListArr.push(
			<PrimaryInput
				key={i}
				keyboardType={'numeric'}
				maxLength={1}
				margin={1}
				width={width_one}
				height={width_one}
			></PrimaryInput>
		);
	}

	return (
		<KeyboardAvoidingView behavior={Platform.OS == 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<View container flex={1} justifyContent="space-around" onPress={Keyboard.dismiss}>
					<PrimaryText>MariaApp</PrimaryText>
					<SecundaryText paddingTop={30}>
						Introduce el código que hemos enviado a tu{'\n'}
						número +502 01020304
					</SecundaryText>
					<SecundaryView
						container
						flexWrap="wrap"
						alignItems="center"
						flexDirection="row"
						justifyContent="center"
					>
						{TextInputListArr}
						<OpenURL url={loginURL}>Reenviar mensaje de confirmación</OpenURL>
					</SecundaryView>
					<FooterView container>
						<FooterText>
							¿Ya tienes cuenta? <OpenURL url={loginURL}>Incia Sesion</OpenURL>
						</FooterText>
					</FooterView>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};
