import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/core'

const Welcome = () => {

    const navigation = useNavigation();

    const login = () => {
        navigation.navigate('Login')
    }

    return (
        <View>
            {/* <View>
                <Image source={require('../assets/images/welcome.jpg')} />
            </View> */}
            <View style={styles.viewBottom}>
                <TouchableOpacity onPress={login}>
                    <View style={styles.buttonContinue}>
                        <Text style={styles.textContinue}>Login</Text>
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
