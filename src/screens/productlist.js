import React, { useEffect , useState} from 'react'
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
    TouchableOpacity,
    TextInput
  } from 'react-native';
  import { useDispatch, useSelector } from 'react-redux';
  import { getProduct } from '../redux/action'; 
  import { useNavigation } from '@react-navigation/native';
  import FlatCards from '../components/flatCards';


  

const Productlist = () => {
  const {product} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();


  useEffect(() =>{
    dispatch(getProduct())

  },[])


  



  

  
  
  return (
  
    <View style={styles.container}>
     
   
    <FlatList 
    data={product}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => <FlatCards  data={item} />}
    
    />
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
  
export default Productlist
