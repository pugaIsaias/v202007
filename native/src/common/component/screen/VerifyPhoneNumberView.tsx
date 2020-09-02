import React, { useCallback } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Linking,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import {
  FooterText,
  PrimaryText,
  SecundaryText,
} from "../../../common/component/text";
import { FooterView, View } from "../../../common/component/view";
import CodeInput from "../codeInput";

const loginURL = "https://google.com";

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
    <SecundaryText paddingTop={10} fontWeight={"bold"} onPress={handlePress}>
      {children}
    </SecundaryText>
  );
};

export const VerifyPhoneNumberView = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          container
          flex={1}
          justifyContent="space-around"
          onPress={Keyboard.dismiss}
        >
          <PrimaryText>MariaApp</PrimaryText>
          <SecundaryText paddingTop={30}>
            Introduce el código que hemos enviado a tu{"\n"}
            número +502 01020304
          </SecundaryText>
          <CodeInput />
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
