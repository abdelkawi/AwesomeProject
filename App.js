
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import DbExample from './screens/DbExampleScreen';
import HomeScreen from './screens/GoalsHomeScreen';

export default function App() {


  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='mainScreen'>
        <Stack.Screen
        name='goals'
        component={HomeScreen}
        />
        <Stack.Screen 
        name='mainScreen'
        component={MainScreen}
        />
        <Stack.Screen 
        name='dbExample'
        component={DbExample}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


