import { useCallback } from "react";
import { Alert, Linking } from "react-native";
import { SecondaryText } from "./Text";

export const Link = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);
  return (
    <SecondaryText paddingTop={10} fontWeight={"bold"} onPress={handlePress}>
      {children}
    </SecondaryText>
  );
};
