import CustomerAdd from "./pages/customer/CustomerAdd";
import CustomerView from "./pages/customer/CustomerView";
import { Provider } from "react-redux";
import { store } from "./store/store";
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h2>React Redux</h2>
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>
  );
};

export default App;
