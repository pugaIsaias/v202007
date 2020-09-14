import * as SecureStore from "expo-secure-store";

export class Store {
  async set(key: string, value: string) {
    await SecureStore.setItemAsync(key, value);
  }
}
