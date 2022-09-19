import "./App.css";
import "./layout/style/style.css";
import AppRouter from "./routes/AppRouter";
import "antd/dist/antd.css";
import { ProductProvider } from "./store/product";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <ProductProvider>
          <AppRouter />
        </ProductProvider>
      </Provider>
    </>
  );
}

export default App;
