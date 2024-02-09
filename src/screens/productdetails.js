

import React, {useEffect, useState, useContext} from 'react';
import {
  Text, 
  Image, 
  View, 
  ScrollView, 
  SafeAreaView, 
  Button, 
  StyleSheet,
  ImageBackground,
  TouchableOpacity
  } from 'react-native';



const Productdetails = ({route}) => {
  const { brand, price, description ,thumbnail} = route.params;

 

  return (
    <SafeAreaView style={
      {
       
        alignItems:"center",
        justifyContent:"center"
      }
    }>
      <ScrollView>
      <ImageBackground 
          source={{uri: thumbnail}}
          resizeMode='stretch'
          style={styles.image}
          />
      
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{brand}</Text>
          <Text style={styles.price}>$ {price}</Text>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity
          style={
            {
              width: 150,
              height:40,
              marginTop:160,
              borderRadius:16,
              backgroundColor:"#ADD8E6",
              alignItems:"center",
              justifyContent:"center"
            }
          }
          onPress={()=>{
            console.log("navigation")
            
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
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
});

export default Productdetails