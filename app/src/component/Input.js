import React from 'react'
import { StyleSheet, Text, View,Platform,TextInput } from 'react-native'
import { Colors } from '../../res/style/colors'
import {sizeWidth,sizeFont} from '../../src/util/size'
import { fonts } from '../../res/style/fonts'

export default function Input({value,placeholder,placeholderTextColor,onChangeText,numberOfLines,multiline,keyboardType,ref}) {
    return (
        <View>
            <TextInput
                    style={styles.textinput}
                    placeholderTextColor={placeholderTextColor}
                    placeholder={placeholder}
                    ref={ref}
                    value={value}
                    multiline={multiline}
                    numberOfLines={numberOfLines}
                    keyboardType={keyboardType}
                    onChangeText={onChangeText} />
        </View>
    )
}

const styles = StyleSheet.create({

    textinput: {
        margin:10,
        height: 50,
        borderRadius: 6,
        padding: Platform.OS == "ios" ? 15 : 0,
        paddingTop: Platform.OS == "ios" ? 15 : 0,
        paddingLeft: 15,

        justifyContent: 'center',
        backgroundColor: Colors.white,
        fontSize: 14,
        fontFamily: fonts['Gotham-Medium'],
        color: Colors.bluegray,
        elevation: 1,
        shadowColor: "rgba(0,0,0,0.8)",
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: Platform.OS == 'ios' ? 0.15 : 0.7,
    },
})
