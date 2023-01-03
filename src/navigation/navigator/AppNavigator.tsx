/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackComponent} from '../stack/MainStack';
import {AuthStackComponent} from '../stack/AuthStack';

//main stack app
const NavigationApp = React.forwardRef((props, ref: any) => {

  const token = true;

  const renderStackApp = () => {
    if (!token) {
      return <AuthStackComponent />;
    } else {
      return (
        <></>
      );
    }
  };
  return (
    <NavigationContainer  ref={ref}>
      {renderStackApp()}
    </NavigationContainer>
  );
});


export {NavigationApp};
