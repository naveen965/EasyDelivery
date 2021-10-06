// import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react'
import { View, Text, StyleSheet, Button, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/core'

const Login = () => {
    const navigation = useNavigation();
    let textInput = useRef(null);
    const [phoneNumber, setPhoneNumber] = useState();
    const [focusInput, setFocusInput] = useState(true);
    // const login = () => {
    //     navigation.navigate('Verification')
    // }
    const onChangePhone = (number) => {
        setPhoneNumber(number)
    }
    const onPressContinue = () => {
        if (phoneNumber) {
            navigation.navigate('Verification')
        }
    }
    const onChangeFocus = () => {
        setFocusInput(true)
    }
    const onChangeBlur = () => {
        setFocusInput(false)
    }
    useEffect(() => {
        textInput.focus()
    },[])
    return (
        <View style={styles.container}>
            <KeyboardAvoidingView 
                keyboardVerticalOffset={50}
                behavior={'padding'}
                style={styles.containerAvoiddingView}
            >
                <Text style={styles.textTitle}>{"Please input your mobile phone number"}</Text>
                <View style={[
                    styles.containerInput,
                    {
                        borderBottomColor: '#244DB7'
                    }
                ]}>
                    <View>
                        <Text>{"+94 |"}</Text>
                    </View>
                    <TextInput
                        ref={(input) => textInput = input}
                        style={styles.phoneInputStyle}
                        placeholder="773 355 999"
                        keyboardType="numeric"
                        value={phoneNumber}
                        onChangeText={onChangePhone}
                        secureTextEntry={false}
                        onFocus={onChangeFocus}
                        onBlur={onChangeBlur}
                    />
                </View>
                <View style={styles.viewBottom}>
                    <TouchableOpacity onPress={onPressContinue}>
                        <View style={[
                            styles.buttonContinue,
                            {
                                backgroundColor: phoneNumber ? '#244DB7' : 'gray'
                            }
                        ]}>
                            <Text style={styles.textContinue}>Continue</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            {/* <Button styles={styles.button} title="Login" onPress={login}></Button> */}
        </View>  
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 20
    }
    ,container: {
        flex: 1
    },containerAvoiddingView: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    textTitle: {
        marginBottom: 50,
        marginTop: 50,
        fontSize: 15
    }
    ,containerInput: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        borderBottomColor: 1.5
    },
    openDialogView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    phoneInputStyle: {
        marginLeft: 5,
        flex: 1,
        height: 50
    },
    viewBottom: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
        alignItems: 'center'
    },
    buttonContinue: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContinue: {
        color: '#ffffff',
        alignItems: 'center'
    }
})

export default Login;
