import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    FlatList,
    ImageBackground,
    TouchableOpacity
  } from 'react-native';

const FlatCards = ({data}) => {
    
const navigation = useNavigation();

  return (
    <View style={{
        flex:1,
        height: 190,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#ADD8E6",
        opacity:0.9,
        borderRadius: 15,
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 14,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 16,}}>
        <View 
        style={{
          alignItems:'center',
          justifyContent:'space-between',
         flexDirection:"row"
         
        }}>
         
          <ImageBackground 
          source={{uri:data.thumbnail}}
          resizeMode='stretch'
          style={{
            height:150,
            width:150
          }}
          />
          <View 
          style={{
            height:150,
            width:150,
            padding:20,
            justifyContent:"space-between"
  
          }}> 
          <Text 
          style={{
            fontSize:16,
            fontWeight:600
  
          }}>
            {data.title}
          </Text>
        
          <TouchableOpacity
          style={
            {
              width: 150,
              height:40,
              borderRadius:16,
              backgroundColor:"#fff",
              alignItems:"center",
              justifyContent:"center"
            }
          }
          onPress={()=>{
            console.log("navigation")
            navigation.navigate("Productdetails", data)
          }
          }>
            <Text
            style={{
              fontSize:14,
              fontWeight:600
    
            }}
            >Buy Now</Text>
  
          </TouchableOpacity>
  
          </View>
           
  
        
  
        </View>
          
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:'#fff',
      // alignItems:'center',
      // justifyContent:'center'
  
    },
      sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      highlight: {
        fontWeight: '700',
      },
    });

export default FlatCards
