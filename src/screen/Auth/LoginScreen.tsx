import {Block} from '@src/component';
import {Spacing} from '@src/component/appSpacing';
import {FontSize} from '@src/component/fontSize';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const LoginScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.title}>Let’s you in</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.Font45,
    fontWeight: 'bold',
    textAlign: 'center',
    // marginTop: Spacing.height40,
  },
});
export {LoginScreen};
