import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import { useNavigation } from '@react-navigation/core'

const Login = () => {
    const navigation = useNavigation();
    const login = () => {
        navigation.navigate('Verification')
    }
    return (
        <View>
            <Text>
                Login page
            </Text>
            <Button styles={styles.button} title="Login" onPress={login}></Button>
        </View>  
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 20
    }
})

export default Login;
