// Import necessary modules from react-navigation
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../pages/Home";
import { Header } from "@rneui/themed";
import ProductDetails from "../../pages/ProductDetails";
import Signup from "../../pages/Signup";
import Login from "../../pages/Login";
// Import your screens
// import Cart from '../pages/Cart';
// import Checkout from '../pages/Checkout';
// import Login from '../pages/Login';
// import ProductDetails from '../pages/ProductDetails';
// import Shop from '../pages/Shop';
// import Signup from '../pages/Signup';
// import Order from '../pages/Order';
// import Dashboard from '../admin/Dashboard';
// import AllProducts from '../admin/AllProducts';
// import AllOrder from '../admin/AllOrders';
// import MyOrderAdmin from '../admin/MyOrdersAdmin';

// Create a stack navigator
const Stack = createNativeStackNavigator();

// Define your navigation component
export const AppRouter = () => {
  return (
    <NavigationContainer>
     
      <Stack.Navigator initialRouteName="Signup">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        {/* <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Order" component={Order} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AllProducts" component={AllProducts} />
        <Stack.Screen name="AllOrder" component={AllOrder} />
        <Stack.Screen name="MyOrderAdmin" component={MyOrderAdmin} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
