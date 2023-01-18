import { UsersStore } from "./user";
import { LoadingStore } from "./loading";

export interface RootStoreInterface {
  usersInstance: UsersStore;
  loadingInstance: LoadingStore;
}

export const rootStore = {
  usersInstance: new UsersStore(),
  loadingInstance: new LoadingStore(),
};
