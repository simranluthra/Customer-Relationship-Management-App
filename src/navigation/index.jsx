import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  EditCustomerPage,
  RegionListPage,
  CustomerDetailsPage,
  CustomerListPage,
  WelcomePage
} from '../screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{ headerShown: false }} />
        <Stack.Screen
          name="RegionListPage"
          component={RegionListPage}
          options={{ headerShown: true, title: 'Regions' }}
        />
        <Stack.Screen name="CustomerListPage" component={CustomerListPage} options={{ headerShown: true, title: 'Customers' }} />
        <Stack.Screen
          name="CustomerDetailsPage"
          component={CustomerDetailsPage}
          options={{ headerShown: true, title: 'Customer Details' }}
        />
        <Stack.Screen
          name="EditCustomerPage"
          component={EditCustomerPage}
          options={{ headerShown: true, title: '' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
