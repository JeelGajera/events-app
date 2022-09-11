import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import EventListScreen from './screens/EventListScreen';
import Browser from './screens/Browser';

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerTitleStyle: { fontSize: 30 },
            title: "Home",
          }} />
        <Stack.Screen name="Events Category" component={EventListScreen}
          options={
            ({ route }) => ({ title: route.params.item['category'] , headerTitleStyle: { fontSize: 30, textTransform: 'capitalize' } })
          } />
        <Stack.Screen name="Browser" component={Browser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;