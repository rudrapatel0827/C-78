import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView,TouchableOpacity,Platform,StatusBar, ImageBackground,Image} from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
  <View style={styles.container}>
  <SafeAreaView style={styles.droidsafearea}/>
  <ImageBackground source={require('../assets/bg_image.png')} style={styles.backgroundImage}>
  <View style={styles.titleBar}>
  <Text style={styles.titletext}>ISS TRACKER APP</Text>
  </View>

  <TouchableOpacity style={styles.routeCard} onPress={()=>
  this.props.navigation.navigate('IssLocation')}>
  <Text style={styles.routeText}>Iss Location</Text>
  <Text style={styles.knowMore}> {'know more --->'}</Text>
  <Text style={styles.bgdigit}>1</Text>
  <Image source={require('../assets/iss_icon.png')} style={styles.iconImage}></Image>
  </TouchableOpacity>

  <TouchableOpacity style={styles.routeCard} onPress={()=>
  this.props.navigation.navigate('Meteors')}>
  <Text style={styles.routeText}>Meteors</Text>
  <Text style={styles.knowMore}> {'know more --->'}</Text>
  <Text style={styles.bgdigit}>2</Text>
  <Image source={require('../assets/meteor_icon.png')} style={styles.iconImage}></Image>
  </TouchableOpacity>

  </ImageBackground> 
  </View>
        )
    }
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  droidsafearea:{
    marginTop:Platform.OS === 'android'? StatusBar.currentHeight:0
  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover'
  },
routeCard:{
  flex:0.25,
  marginLeft:50,
  marginRight:50,
  marginTop:30,
  borderRadius:20,
  backgroundColor:'white'
},
titleBar:{
  flex:0.3,
  justifyContent:'center',
  alignItems:'center'
},
titletext:{
fontSize:30,
fontWeight:'bold',

color:'white'
},
routeText:{
  fontSize:30,
  fontWeight:'bold',
  color:'black',
  marginTop:50,
  paddingLeft:30
},
knowMore:{
  paddingLeft:30,
  color:'red',
  fontSize:15
},
bgdigit:{
  position:'absolute',
  color:"green",
  fontSize:150,
  right:1,
  bottom:-45,
  zIndex:-1
},
iconImage:{
  position:'absolute',
  height:175,
  width:175,
  resizeMode:'contain',
  right:-45,
  top:-120
}
})