import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, Button} from 'react-native'
import { useNavigation } from '@react-navigation/core'

const Welcome = () => {

    const navigation = useNavigation();

    const signin = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image 
                    source={require("../assets/welcom.jpg")}
                    style={{height: 200}} 
                    resizeMode= "contain"
                />
            </View>
            <View style={styles.viewBottom}>
                <TouchableOpacity onPress={signin}>
                    <View style={styles.buttonContinue}>
                        <Text style={styles.textContinue}>Sign In</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: "column"
    },
    viewBottom: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 100
    },
    buttonContinue: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        borderColor: 'black',
        borderWidth: 2
    },
    textContinue: {
        color: '#000000',
        alignItems: 'center'
    },
    imageView: {
        flex: 3,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'flex-end',
        
    }
})

export default Welcome;
