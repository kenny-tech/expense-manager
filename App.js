import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen';

import HomeScreen from './app/screens/Home';
import IncomeScreen from './app/screens/Income';
import ExpenseScreen from './app/screens/Expense';
import TransactionsScreen from './app/screens/Transactions';
import EditTransactionScreen from './app/screens/EditTransaction';
import ReportScreen from './app/screens/Report';
import SettingScreen from './app/screens/Setting';
import CategoryScreen from './app/screens/Category';
import PaymentModeScreen from './app/screens/PaymentMode';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4b81bf',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen options={{ title: "Expense Tracker" }} name="Home" component={HomeScreen}/>
        <Stack.Screen options={{ title: "Add Income" }} name="Income" component={IncomeScreen}/>
        <Stack.Screen options={{ title: "Add Expense" }} name="Expense" component={ExpenseScreen}/>
        <Stack.Screen options={{ title: "Transactions" }} name="Transactions" component={TransactionsScreen}/>
        <Stack.Screen options={{ title: "Reports" }} name="Reports" component={ReportScreen}/>
        <Stack.Screen options={{ title: "Manage Transaction" }} name="EditTransaction" component={EditTransactionScreen}/>
        <Stack.Screen options={{ title: "Settings" }} name="Settings" component={SettingScreen}/>
        <Stack.Screen options={{ title: "Manage Category" }} name="Category" component={CategoryScreen}/>
        <Stack.Screen options={{ title: "Manage Payment Mode" }} name="PaymentMode" component={PaymentModeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
