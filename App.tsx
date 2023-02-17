import React, {Component} from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  Button,
  SafeAreaView} from "react-native";


class StopWatch extends Component{
  render() {
    return (
      <SafeAreaView>
        <View>
        <Text > StopWatch </Text>
        <Buttons />
        </View>
      </SafeAreaView>
      
      
      

    )    
  }
}

class Buttons extends Component{
  render(){
    return (
      <SafeAreaView>
        <View>
          <Button title= "Start"/>
          <Button title= "Stop" />
          <Button title= "Reset" />
        </View>
      </SafeAreaView>
    )
  }
}


export default StopWatch;
