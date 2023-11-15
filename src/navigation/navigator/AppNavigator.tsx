import {NavigationContainer} from '@react-navigation/native';
import {userSelector} from '@src/redux/slices/accountSlice';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import {AuthStackComponent} from '../stack/AuthStack';
import {MainStackComponent} from '../stack/MainStack';
const NavigationApp = React.forwardRef((props, ref: any) => {
  const token = useSelector(userSelector);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
