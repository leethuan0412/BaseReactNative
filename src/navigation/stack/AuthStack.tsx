import {createStackNavigator} from '@react-navigation/stack';
import React, {memo} from 'react';
import  {SCREEN_ROUTE} from '../../constants/Constant';
import SCREEN_ROUTE_APP from '../RouteApp';

const AuthStack = createStackNavigator();
const AuthStackComponent = memo(() => {
  return (
    <AuthStack.Navigator
      initialRouteName={SCREEN_ROUTE.AUTH}
      screenOptions={{
        headerShown: false,
      }}
    >
      {Object.keys(SCREEN_ROUTE_APP).map((elem, index) => (
        <AuthStack.Screen
          key={index}
          name={elem}
          component={SCREEN_ROUTE_APP[elem]}
        />
      ))}
    </AuthStack.Navigator>
  );
});

export {AuthStackComponent};
