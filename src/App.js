import { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkUserSession } from "store/user/user.action";
import Spinner from "./components/spinner/spinner.component";
import { GlobalStyle } from "./global.styles";

// import Home from "routes/home/home.component";
// import Navigaiton from "routes/navigation/navigation.component";
// import Authentication from "routes/authentication/authentication.coomponent";
// import Shop from "routes/shop/shop.component";
// import Checkout from "routes/checkout/checkout.component";

const Home = lazy(() => import("routes/home/home.component"));
const Shop = lazy(() => import("routes/shop/shop.component"));
const Navigaiton = lazy(() => import("routes/navigation/navigation.component"));
const Authentication = lazy(() =>
  import("routes/authentication/authentication.coomponent")
);
const Checkout = lazy(() => import("routes/checkout/checkout.component"));


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Navigaiton />}>
          <Route index element={<Home />} />
          <Route path="shop/*" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
