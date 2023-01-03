import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TabNavigator } from '../navigator/TabNavigator';
import SCREEN_ROUTE_APP, { ROUTE_APP } from '../RouteApp';

const MainStack = createStackNavigator();

const MainStackComponent = memo(() => {
  return (
    <MainStack.Navigator
      initialRouteName={ROUTE_APP.MAIN_STACK}
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen
        name={ROUTE_APP.MAIN_STACK}
        component={TabNavigator}
      />
       {Object.keys(SCREEN_ROUTE_APP).map((elem, index) => (
        <MainStack.Screen
          key={index}
          name={elem}
          component={SCREEN_ROUTE_APP[elem]}
        />
      ))}
    </MainStack.Navigator>
  );
});

export { MainStackComponent };
