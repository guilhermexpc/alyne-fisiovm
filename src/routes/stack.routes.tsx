import { createStackNavigator, } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { Home } from '../pages/Home';
import { PaCO2EsperadaAcidose } from '../pages/formulas/PaCO2EsperadaAcidose';
import { TestePage } from '../pages/TestePage';

export function StackRoutes() {
  return (
    <Stack.Navigator
      initialRouteName='PaCO2EsperadaAcidose'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="PaCO2EsperadaAcidose" component={PaCO2EsperadaAcidose} />
    </Stack.Navigator>
  )
}