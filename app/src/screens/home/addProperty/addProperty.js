import React, { useRef,useState,useEffect } from 'react';
import { Text, View,  SafeAreaView, StatusBar,TouchableOpacity,Image, ScrollView } from 'react-native';
import {styles} from './style';
import {Colors} from '../../../../res/style/colors'
import Header from '../../../component/Header'
import Input from '../../../component/Input'
import Button from '../../../component/Button';
import ImagePicker from 'react-native-image-crop-picker';
import ImgToBase64 from 'react-native-image-base64';
import NetInfo from "@react-native-community/netinfo";
import {useSelector,useDispatch} from 'react-redux'
import {storeLocalPropertyFun} from '../../../redux/actions/storeLocalPropertyAction'
import { postApiSerive } from "../../../../src/util/postDataService";
import {tinyToastSerive} from '../../../../src/util/Toast'
import Toast from 'react-native-tiny-toast'

const addProperty = (props) => {
const [title,setTitle] = useState('')
const [titleBoolean,setTitleBoolean] = useState(false)
const [description,setDescription] = useState('')
const [descriptionBoolean,setDescriptionBoolean] = useState(false)
const [price,setPrice] = useState('')
const [priceBoolean,setPriceBoolean] = useState(false)
const [imageProp,setImageProp] = useState('')
const [saveImage,setSaveImage] = useState('')
const [imageBoolean,setImageBoolean] = useState(false)

const dispatch=useDispatch()


  const AddProperty = () => {
    
    if (!title) {
      setTitleBoolean(true);
    } 
    else if (!description){
      setDescriptionBoolean(true)
    }else if (!price){
      setPriceBoolean(true)
    }else if (!imageProp){
      setImageBoolean(true)
    }
    else{
      Toast.showLoading('Saving Property')
      var rawData={
        "title": title,
        "description": description,
        "price":price,
        "image":saveImage
        }

        var formdata = new FormData();
        formdata.append("title", title);
        formdata.append("description",description);
        formdata.append("price", price);
        formdata.append("image",saveImage);
        
      props.route.params.callback(rawData,formdata)

        NetInfo.fetch().then(state => {
        if(state.isConnected){
        
          var url='https://pasu.magxeen.com/public/addProperty'
          postApiSerive.postApiClass(url,formdata).then((res)=>{
            Toast.hide()
            if(JSON.parse(res).message==='success'){
              Toast.showSuccess('Property Saved')
            }else{
              Toast.show('Property Data Not Saved')
            }
           
            resetStates()
           

          })
        }else{
          Toast.hide()
           Toast.show("No Internet Connection we locally store your post")
           dispatch(storeLocalPropertyFun(rawData))
        }
      });

    }
  };
  const openGallery=()=>{
    ImagePicker.openPicker({
      cropping: true,
      cropperCircleOverlay: true,
      freeStyleCropEnabled: true
  }).then(response => {
     
      let image = {
          name: new Date() + '.jpg',
          type: 'image/jpeg',
          uri:
              Platform.OS === 'android'
                  ? response.path
                  : response.path.replace('file://', ''),
                  
      };
      setImageProp(image.uri)
      setImageBoolean(false)
      ImgToBase64.getBase64String(image.uri)
      .then(base64String => {
        setSaveImage('data:image/jpeg;base64,'+base64String)
      }
       )
      .catch(err => console.log(err));
    
    
     

          
  

  });
  }
  const resetStates=()=>{
    setTitle('')
    setDescription('')
    setPrice('')
    setSaveImage('')
    setImageProp('')

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
  title='ADD Property'
  />
<ScrollView>

<View>
       <Text style={styles.heading}>Add Property Title *</Text>
       <Input
     placeholder={'Add Property Title'}
     placeholderTextColor={Colors.bluegray}
     value={title}
     onChangeText={(text) => {setTitle(text),setTitleBoolean(false)}}
    
     />
      {titleBoolean ? (
                  <Text
                    style={styles.errorMessage}>
                    * Please fill this field
                  </Text>
                ) : null}

<Text style={styles.heading}>Add Property Description *</Text>
       <Input
     placeholder={'Add Property Description'}
     placeholderTextColor={Colors.bluegray}
     value={description}
     onChangeText={(text) => {setDescription(text),setDescriptionBoolean(false)}}
    
     />
  {descriptionBoolean ? (
                  <Text
                    style={styles.errorMessage}>
                    * Please fill this field
                  </Text>
                ) : null}

<Text style={styles.heading}>Add Property Price *</Text>
       <Input
     placeholder={'Add Property Price'}
     placeholderTextColor={Colors.bluegray}
     value={price}
     onChangeText={(text) =>{ setPrice(text),setPriceBoolean(false)}}
    
     />
       {priceBoolean ? (
                  <Text
                    style={styles.errorMessage}>
                    * Please fill this field
                  </Text>
                ) : null}


   
<View>
                                   

                                    <TouchableOpacity
                                        onPress={() =>{openGallery()}}
                                        style={styles.DocumentView}>    
                                            <Text style={styles.UploadText}>Upload Image +</Text>
                                    </TouchableOpacity>
                                    {imageProp === null || imageProp === ""
                                                    ?imageBoolean? <Text
                                                    style={styles.errorMessage}>
                                                    * Please select image
                                                  </Text>:null :
                                                    <Image
                                                        resizeMode={'stretch'}
                                                        source={{ uri: imageProp }}
                                                        style={styles.uploadedImage}
                                                    />}
                                </View>
                      



<View style={styles.btnViewStyle}>
     <Button
     title='Save'
     onPress={AddProperty}
     />
</View>

       </View>

       </ScrollView>
     </SafeAreaView>
   
  )
}
export default addProperty;