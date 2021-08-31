import React from 'react'
import {View,StyleSheet,Text,TouchableOpacity,Platform} from "react-native"
import {Colors} from '../../res/style/colors'
import {sizeWidth,sizeFont} from '../../src/util/size'
import { fonts } from '../../res/style/fonts'

export default function Header({title,onPress,right,left}) {
   
    return (
        <View style={[styles.header,{backgroundColor:Colors.white}]}>

<View style={styles.bar}>
    <Text>{left}</Text>

<Text style={[styles.homeHeaderTitle,{color:Colors.textColor}]}>{title}</Text>

<TouchableOpacity onPress={onPress} style={{height:30}}><Text  style={styles.rightStyle}>{right}</Text></TouchableOpacity>

    </View>
            
        </View>
    )
}

const styles=StyleSheet.create({
    header: {
       
        backgroundColor: 'white',
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
        overflow: 'hidden',
        elevation: 3,
        shadowColor: "rgba(0,0,0,0.8)",
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: Platform.OS == 'ios' ? 0.5 : 0.7,
        shadowRadius: 2,

    },
    bar: {
        padding:10,
        height: 70,
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    homeHeaderTitle:{
        fontSize: sizeFont(6),
        fontWeight:'bold',
        fontFamily:fonts['Gotham-Bold'],
        textAlign:'center',
        backgroundColor: 'transparent',
        color:'black',
        padding:10,
    },
    rightStyle:{
        marginRight:10,
        marginTop:5
    }
})
