
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { Colors } from '../../../../res/style/colors';
import { fonts } from '../../../../res/style/fonts';
import { widthPercentageToDP, heightPercentageToDP } from '../../../component/React Native Responsive Screen'


export const styles = StyleSheet.create({
    Container: {
        backgroundColor: Colors.propBackground,
        flex: 1},
        subContainer:{
            alignItems:'center'
        }
});

