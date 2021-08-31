import * as React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Colors} from '../../../../app/res/style/colors';


export default function communityMaterialIcons(props) {
  return (
    <Icon
      name={props.name}
      size={23}
      style={{ marginBottom: -3 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />

  );
}