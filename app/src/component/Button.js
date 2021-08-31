import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import {Colors} from '../../res/style/colors'
import {sizeWidth,sizeFont} from '../../src/util/size'
import { fonts } from '../../res/style/fonts'

export default function Button({onPress,style,title}) {
    return (
        <TouchableOpacity
                    onPress={onPress}
                    style={[styles.saveview,style]}>
                    <Text style={styles.save}>{title}</Text>
                </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    saveview: {
        marginTop: 40,
        marginLeft: 15,
        justifyContent: 'center', alignItems: 'center',
        marginRight: 15,
        height: 50,
        width: sizeWidth(92),
        borderRadius: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: Colors.Motivationcolor,
        backgroundColor: Colors.Motivationcolor,
        elevation: 1,
        shadowColor: "rgba(0,0,0,0.8)",
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: Platform.OS == 'ios' ? 0.15 : 0.7,
    },
    save: {
        fontSize:sizeFont(4),
        fontFamily: fonts['Gotham-Medium'],
        color: Colors.white
    },

})
