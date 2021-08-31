import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Colors} from '../../res/style/colors';


export default function awsomeFonts(props) {
  return (
    <Icon
      name={props.name}
      size={props.size}
      color={props.Colors}
    />

  );
}