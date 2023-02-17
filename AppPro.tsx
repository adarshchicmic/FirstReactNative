import React, {Component} from "react";
import {
    View,
    Text,
    SafeAreaView,
    Button,
    StyleSheet,
    useColorScheme,

} from "react-native";

class AppPro extends Component{
    render(){
        return(
            <SafeAreaView>
                <Text style={styles.container}> StopWatch </Text>
                <Buttons />
            </SafeAreaView>
        )
    }
}

class Buttons extends Component{
    render(){
        return (
            <View>
                <Button title= "Start" style = {styles.light}/>
                <Button title= "Stop" />
                <Button title= "Reset"/>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
    },
    light: {
        backgroundColor: '#ffffff',
    },
    dark: {
        backgroundColor: 'black'
    }
}
)

export default AppPro;