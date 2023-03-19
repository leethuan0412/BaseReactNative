import { AppHeader, Block } from '@src/component';
import { Spacing } from '@src/component/appSpacing';
import { FontSize } from '@src/component/fontSize';
import {StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = () => {
  return (
    <Block flex={1}>
      <AppHeader
      goBack
      />
      <Text style={styles.title}>Let’s you in</Text>
    </Block>
  );
};
const styles = StyleSheet.create({
  title:{
    fontSize: FontSize.Font45,
    fontWeight:'bold',
    textAlign:'center',
    marginTop: Spacing.height40
  },
})
export {LoginScreen};
