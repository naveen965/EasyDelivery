import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import { useNavigation } from '@react-navigation/core'

const Welcome = () => {

    const navigation = useNavigation();

    const signin = () => {
        navigation.navigate('Login')
    }

    return (
        <View>
            {/* <View style={{ backgroundColor: '#000000', width: 400, height: 300, alignItems: 'center' }}>
                <Image 
                    source={{uri: 'https://reactjs.org/logo-og.png'}}
                    style={{width: 400, height: 400}} 
                />
            </View> */}
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
    viewBottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
        alignItems: 'center',
        paddingTop: 600
    },
    buttonContinue: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    textContinue: {
        color: '#000000',
        alignItems: 'center'
    }
})

export default Welcome;
