import React,{useEffect,useState} from 'react';
import { Text, View,  SafeAreaView, StatusBar,FlatList,RefreshControl } from 'react-native';
import {styles} from './style';
import {Colors} from '../../../../res/style/colors'
import Header from '../../../component/Header'
import PropertyCard from '../../../component/PropertyCard'
import FabButton from '../../../component/FabButton'
import NetInfo from "@react-native-community/netinfo";
import {useSelector,useDispatch} from 'react-redux'
import {fetchPropertyApi} from '../../../redux/actions/propertyAction'
import { getApiSerive } from "../../../../src/util/getDataService";
import { postApiSerive } from "../../../../src/util/postDataService";
import {storeLocalPropertyFun} from '../../../redux/actions/storeLocalPropertyAction'
const PropertyHome = (props) => {

const [homeData,setHomeData]=useState(["name","email"])
const PropertyRequest = useSelector(state => state.homeP.PropertyRequest)
const PropertySuccess = useSelector(state => state.homeP.PropertySuccess)
const localProperty = useSelector(state => state.addpropL.localProperty)


  const dispatch=useDispatch()
  useEffect(()=>{
const unsubscribe = NetInfo.addEventListener(state => {
  if(state.isConnected){
if(localProperty){
  
  var url='https://pasu.magxeen.com/public/addProperty'

  var formdata = new FormData();
  formdata.append("title", localProperty.title);
  formdata.append("description",localProperty.description);
  formdata.append("price", localProperty.price);
  formdata.append("image",localProperty.image);

  postApiSerive.postApiClass(url,formdata).then((res)=>{
    if(JSON.parse(res).message==='success'){
    dispatch(storeLocalPropertyFun(''))
    }
    fetchHomeData()
  })
}else{
  fetchHomeData()
}
  
  }
});
  },[localProperty])

function fetchHomeData(){
  var url='https://pasu.magxeen.com/public/getProperty'
  getApiSerive.getApiClass(url).then((res)=>{
  if(res.length>0){
    dispatch(fetchPropertyApi(res))
  }else{
    console.log("reslt not exist")
  }
})
}

  function AddNewProperty(){
    props.navigation.navigate('addProperty',{
      callback:callback.bind(this)
    })
  }

  const onRefresh = () => {
   
 };
 function  callback(rawData){
var localData=PropertySuccess
localData.push(rawData)
dispatch(fetchPropertyApi(localData))
 }
  return (
   
    <SafeAreaView style={styles.Container}>
      {/* Customise status bar */}
      <StatusBar
        translucent={false}
        backgroundColor={Colors.white}
        barStyle="dark-content"
      />
  <Header
  title='Home'
  />



    <View style={styles.subContainer}> 
   
<FlatList
        showsHorizontalScrollIndicator={false}
        data={PropertySuccess}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
         contentContainerStyle={{ paddingBottom: '100%' }}
        renderItem={({ item, index }) => {
          return (
            <PropertyCard
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
            />
         );
        }}
        enableEmptySections={true}
        refreshControl={
          <RefreshControl
          style={{backgroundColor:'red'}}
            refreshing={PropertyRequest}
            onRefresh={() => onRefresh()}
          />
        }
        style={{ marginTop: 10 }}
        keyExtractor={(item, index) => index.toString()}

      />

    
</View>

<FabButton
onPress={AddNewProperty}
/>


     </SafeAreaView>
   
  )
}
export default PropertyHome;