import React from 'react'
import { View, Text,Image,StyleSheet } from 'react-native'
import {Colors} from '../../res/style/colors'
import {sizeWidth,sizeFont} from '../../src/util/size'
import { fonts } from '../../res/style/fonts'


const PropertyCard = ({title,description,price,image}) => {
    return (
        <View style={styles.container}>
        <Image style={styles.propImage}  source={{uri:image}}></Image>
       <View style={styles.subContainer}>
        <Text numberOfLines={1} style={styles.titleStyle}>{title}</Text>
        <Text numberOfLines={2} style={styles.descripStyle}>{description}</Text>
        <Text style={styles.priceStyle}>{price} $</Text>
        </View>
        </View>
    )
}
const styles=StyleSheet.create({
container:{
    width:sizeWidth(90),backgroundColor:Colors.white,borderRadius:10,flexDirection:'row',marginTop:20,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: "rgba(0,0,0,0.8)",
    shadowOffset: { width: 0, height: 0.5 },
    shadowOpacity: Platform.OS == 'ios' ? 0.5 : 0.7,
    shadowRadius: 2,
},
propImage:{
    height:100,width:100,borderTopLeftRadius:10,borderBottomLeftRadius:10
},
subContainer:{
    justifyContent:'center',padding:15,width:sizeWidth(60)
},
titleStyle:{
    fontFamily:fonts['Gotham-Bold'],fontSize:sizeFont(5),
},
descripStyle:{
    fontFamily:fonts['Gotham-Light'],fontSize:sizeFont(3)
},
priceStyle:{
    fontFamily:fonts['Gotham-Bold'],fontSize:sizeFont(4),textAlign:'center'
}

});

export default PropertyCard
