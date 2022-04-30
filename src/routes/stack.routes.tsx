import { createStackNavigator, } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { Home } from '../pages/Home';
import { TestePage } from '../pages/TestePage';

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TestePage" component={TestePage} />
    </Stack.Navigator>
  )
}