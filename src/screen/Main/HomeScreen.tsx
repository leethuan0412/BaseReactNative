import {R} from '@src/assets/R';
import {AppHeader, Block} from '@src/component';
import AppInput from '@src/component/AppInput';
import {colors} from '@src/theme';
import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
const HomeScreen = () => {
  const [mail, setEmail] = useState('');

  return (
    <Block>
      <AppHeader title="HOIME" goBack />
      <Text style={styles.text}>{R.strings().hello}</Text>
      <AppInput
        value={mail}
        onChangeText={setEmail}
        placeholder="enter your email"
        secureTextEntry
      />
    </Block>
  );
};
const styles = StyleSheet.create({
  text: {
    color: colors.text,
  },
});
export {HomeScreen};
