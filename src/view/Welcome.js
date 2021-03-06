import React, {useState, useEffect} from 'react'
import * as Location from 'expo-location'
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import { useNavigation } from '@react-navigation/core'

const Welcome = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    const navigation = useNavigation();

    const signin = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image 
                    source={require("../../assets/welcome.png")}
                    style={{height: 200}} 
                    resizeMode= "contain"
                />
                {/* <View style={styles.containerTwo}>
                    <Text style={styles.paragraph}>{text}</Text>
                </View> */}
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
    containerTwo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
        paragraph: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black'
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
