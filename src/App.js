import "./App.css";
import './layout/style/style.css'
import AppRouter from "./routes/AppRouter";
import "antd/dist/antd.css";
import { ProductProvider } from "./store/product";

function App() {
  return (
    <>
      <ProductProvider>
        <AppRouter />
      </ProductProvider>
    </>
  );
}

export default App;
