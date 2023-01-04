import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStackComponent} from '../stack/AuthStack';
import {MainStackComponent} from '../stack/MainStack';

const NavigationApp = React.forwardRef((props, ref: any) => {
  const token = true;

  const renderStackApp = () => {
    if (!token) {
      return <AuthStackComponent />;
    } else {
      return <MainStackComponent />;
    }
  };
  return (
    <NavigationContainer ref={ref}>{renderStackApp()}</NavigationContainer>
  );
});

export {NavigationApp};
