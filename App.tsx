import React, {type PropsWithChildren} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import { store } from './src/redux/store';
import {NavigationUtils} from './src/navigation/NavigationUtils';
import {NavigationApp} from './src/navigation/navigator/AppNavigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <NavigationApp
        ref={(navigatorRef: any) => {
          NavigationUtils.setTopLevelNavigator(navigatorRef);
        }}
      />
      {/* <FlashMessage
        style={styleApp.messageNoti}
        position="top"
        floating={true}
        hideStatusBar={false}
      /> */}

      <Text>alooo</Text>
    </>
  );
};

const styleApp = StyleSheet.create({
  messageNoti: {
    marginTop: Platform.OS === 'android' ? getStatusBarHeight() : 0,
  },
});

export default App;
