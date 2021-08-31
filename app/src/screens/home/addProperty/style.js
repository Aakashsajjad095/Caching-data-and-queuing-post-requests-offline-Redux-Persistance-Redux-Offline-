
import React from 'react';
import { StyleSheet, Dimensions, Platform, } from 'react-native';
import { Colors } from '../../../../res/style/colors';
import { fonts } from '../../../../res/style/fonts';
import {sizeWidth,sizeFont} from '../../../../src/util/size'



export const styles = StyleSheet.create({
    Container: {
        backgroundColor: Colors.propBackground,
         flex: 1},
         subContainer:{
            alignItems:'center'
        },
        heading: {
            marginTop: 8,
            marginLeft: 17,
            fontSize: 14,
            fontFamily: fonts['Gotham-Medium'],
            color: Colors.NewBackgroundColor,
        },
        errorMessage:{
                marginLeft: 17,
                fontFamily: fonts['Gotham-Book'],
                fontSize: sizeFont(3),
                color: Colors.absent,
              
        },
        UploadText: {
            marginTop:10 ,
            fontSize: sizeFont(4),
            fontFamily: fonts['Gotham-Medium'],
            color: Colors.Motivationcolor,
            marginLeft: 17,
             marginVertical: 15
        },
        CategoriesViews: {
            minHeight: 50,
            width: sizeWidth(92),
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: Colors.white,
            elevation: 1,
            shadowColor: "rgba(0,0,0,0.8)",
            shadowOffset: { width: 0, height: 0.5 },
            shadowOpacity: Platform.OS == 'ios' ? 0.15 : 0.7,
        },
        DocumentView: {
            marginRight: 15,
        },
        uploadedImage:{
            height: 100, width: 80, borderRadius: 10,marginLeft:20
        },
        btnViewStyle:{
            marginBottom:20
        }
});

