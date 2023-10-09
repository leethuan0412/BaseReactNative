import {colors} from '@src/theme';
import moment from 'moment';
import React, {memo, useLayoutEffect, useRef, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {FontSize} from '../fontSize';
let timeout: NodeJS.Timeout;
const Timer = ({reSend, timer}: {reSend: () => void; timer: number}) => {
  const date = new Date();
  const time_expire = useRef(date || '');
  const [timeCountDown, setTimeCountDown] = useState(() => {
    const time = moment(time_expire.current).diff(moment(), 'seconds') + timer;
    return time;
  });
  useLayoutEffect(() => {
    handleCountDown();
    return () => {
      clearInterval(timeout);
    };
  }, []);

  const handleCountDown = () => {
    timeout = setInterval(() => {
      const newTimeCountDown =
        moment(time_expire.current).diff(moment(), 'seconds') + timer;
      if (newTimeCountDown <= 0) {
        clearInterval(timeout);
      }
      setTimeCountDown(newTimeCountDown);
    }, 1000);
    console.log(timeCountDown);
  };
  const onReSend = () => {
    time_expire.current = new Date();
    handleCountDown();
    reSend();
  };
  // console.log(timeCountDown)
  return (
    <View style={{alignItems: 'center', marginTop: 40}}>
      {timeCountDown > 0 ? (
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{fontSize: FontSize.Font16}}
            children={'Gửi lại sau: '}
          />
          <RenderCountDown timeCountDown={timeCountDown} />
        </View>
      ) : (
        <TouchableOpacity onPress={onReSend}>
          <Text
            style={{fontSize: FontSize.Font16, color: colors.primary}}
            children={'Gửi lại'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Timer;

const RenderCountDown = ({timeCountDown}: {timeCountDown: number}) => {
  const minutes = `0${Math.floor((timeCountDown % 3600) / 60)}`;
  const seconds = `0${(timeCountDown % 3600) % 60}`;
  const formatMinutes = minutes.substr(minutes.length - 2, 2);
  const formatSeconds = seconds.substr(seconds.length - 2, 2);
  return (
    <Text
      style={{color: colors.primary, fontSize: FontSize.Font16}}
      children={`${formatMinutes}:${formatSeconds}`}
    />
  );
};
