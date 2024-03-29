import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
  StyleProp,
  Text,
  StyleSheet,
} from 'react-native';
import {debounce} from 'lodash';
import {Spacing} from '../appSpacing';
import {Block} from '../Block';

export interface ButtonProps extends TouchableOpacityProps {
  label: string;
  secureTextEntry?: boolean;
  disabled?: boolean;
  Icon?: any;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  labelStyle?: TextStyle | TextStyle[];
  numberOfLines?: number;
  isWrap?: boolean;
  hideDelay?: boolean;
  backgroundColor?: string;
  marginTop?: number;
}

const WrapContent = ({isWrap, children}: any) => {
  if (isWrap) {
    return (
      <Block flexWrap="wrap" style={styles.wrapContent}>
        {children}
      </Block>
    );
  }
  return <>{children}</>;
};

export function AppButton(props: ButtonProps) {
  const {
    label,
    onPress = () => {},
    style,
    Icon,
    labelStyle,
    disabled,
    numberOfLines,
    isWrap,
    hideDelay = false,
  } = props;

  const handler = debounce(onPress, 300, {
    leading: true,
    trailing: false,
  });

  return (
    <WrapContent isWrap={isWrap}>
      <TouchableOpacity
        disabled={disabled}
        activeOpacity={0.8}
        style={[style, styles.btn]}
        onPress={() => {
          if (hideDelay) {
            onPress?.();
          } else {
            handler();
          }
        }}>
        {!!Icon && <Icon style={styles.icon} />}
        <Text style={labelStyle} numberOfLines={numberOfLines}>
          {label}
        </Text>
      </TouchableOpacity>
    </WrapContent>
  );
}
const styles = StyleSheet.create({
  wrapContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    marginLeft: Spacing.width20,
  },
  btn: {
    alignItems: 'center',
    alignSelf: 'center',
  },
});
