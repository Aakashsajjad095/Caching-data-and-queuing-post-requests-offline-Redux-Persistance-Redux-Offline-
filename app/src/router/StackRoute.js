import 'react-native-gesture-handler';

import * as React from 'react';
import {
  Colors
} from "../../res/style/colors"

import { NavigationContainer,DefaultTheme} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import propertyHome from '../screens/home/propertyHome/propertyHome';
import addProperty from '../screens/home/addProperty/addProperty'



const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.teacherBackground
  },
};


function StackRoute({ navigation }) {
  return (
    <NavigationContainer theme={MyTheme} >
      <Stack.Navigator  >
        <Stack.Screen
          name="propertyHome"
          component={propertyHome}
          options={{
            headerShown: false,
            title: 'Home', //Set Header Title.
          }}
        />

<Stack.Screen
          name="addProperty"
          component={addProperty}
          options={{
            headerShown: false,
            title: 'Add Property', //Set Header Title.
          }}
        />
   
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default StackRoute;