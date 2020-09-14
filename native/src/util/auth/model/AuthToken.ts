import { Store } from "../../store/model/Store";

enum StoreKeyName {
  authToken = "authToken",
}

export class AuthToken {
  private store: Store;

  constructor(store: Store) {
    this.store = store;
  }

  async set(token: string) {
    await this.store.set(StoreKeyName.authToken, token);
  }
}
