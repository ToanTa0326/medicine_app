import AppNavigator from "./components/Navigator/Navigator";
import { Provider } from "react-redux";
import store from "./utils/store";

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
