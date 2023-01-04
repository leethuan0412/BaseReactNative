import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {R} from '../../assets/R';
import {colors} from '../../theme';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Text style={styles.text}>{R.strings().hello}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  switch: {marginHorizontal: 10},
  language: {color: colors.text},
  icon: {
    width: 22,
    height: 22,
    marginRight: 16,
  },
  row: {
    paddingVertical: 18.5,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(222, 226, 230, 1)',
  },
  iconArrow: {
    width: 22,
    height: 22,
  },
  text: {
    color: colors.text,
  },
});
export {HomeScreen};
