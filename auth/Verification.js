import React, {useState, useRef, useEffect} from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/core'

const Verification = () => {
    const navigation = useNavigation();
    let textInput = useRef(null)
    let clockCall = null
    const lengthInput = 6;
    const defaultCountdown = 30;
    const [internalVal, setInternalVal] = useState("")
    const [countdown, setCountdown] = useState(defaultCountdown)
    const [enableResend, setEnableResend] = useState(false)
    const data = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 }
    ];

    useEffect(() => {
        clockCall = setInterval(() => {
            decrementClock();
        }, 1000)
        return () => {
            clearInterval(clockCall)
        }
    })

    const decrementClock = () => {
        if (countdown === 0) {
            setEnableResend(true)
            setCountdown(0)
            clearInterval(clockCall)
        } else {
            setCountdown(countdown - 1)
        }
    }

    const onResendOTP = () => {
        if (enableResend) {
            setCountdown(defaultCountdown)
            setEnableResend(false)
            clearInterval(clockCall)
            clockCall = setInterval(() => {
                decrementClock()
            }, 1000)
        }
    }

    const onChangeNumber = () => {
        setInternalVal("")
    }

    const onChangeText = (val) => {
        setInternalVal(val)
        if (val.length === lengthInput) {
            navigation.navigate('Home')
        }
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
                <Text style={styles.textTitle}>{"Input your OTP code sent via SMS"}</Text>
                <View>
                    <TextInput
                        ref={(input) => textInput = input}
                        onChangeText={onChangeText}
                        style={{width: 0, height: 0}}
                        value={internalVal}
                        maxLength={lengthInput}
                        returnKeyType="done"
                        keyboardType="numeric"
                    />
                    <View style={styles.containerInput}>
                        {/* {
                            Array(lengthInput).fill().map((data, index) => {
                                <View 
                                    key={index}
                                    style={[
                                        styles.cellView,
                                        {
                                            borderBottomColor: index === internalVal.length ? '#FB6C6A' : '#234DB7'
                                        }
                                    ]}
                                >
                                    <Text 
                                        style={styles.cellText}
                                        onPress={() => textInput.focus()}
                                    >
                                        54554{internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                                    </Text>
                                </View>
                            })
                        } */}

                        {
                            data.map((item, index) => (
                                <View 
                                    key={index}
                                    style={[
                                        styles.cellView,
                                        {
                                            borderBottomColor: index === internalVal.length ? '#FB6C6A' : '#234DB7'
                                        }
                                    ]}
                                >
                                    <Text 
                                        style={styles.cellText}
                                        onPress={() => textInput.focus()}
                                    >
                                        11{internalVal && internalVal.length > 0 ? internalVal[index] : ""}
                                    </Text>
                                </View>
                            ))
                        }  
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity onPress={onChangeNumber}>
                        <View style={styles.buttonChangeNumber}>
                            <Text style={styles.textChange}>Change number</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onResendOTP}>
                        <View style={styles.buttonResend}>
                            <Text style={[
                                styles.textResend,
                                {
                                    color: enableResend ? '#234DB7' : 'gray'
                                }
                            ]}>Resend OTP ({countdown})</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
            {/* <Button styles={styles.button} title="Verification" onPress={() => navigation.navigate('Home')}></Button> */}
        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerAvoiddingView: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    textTitle: {
        marginBottom: 50,
        marginTop: 50,
        fontSize: 16
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cellView: {
        paddingVertical: 11,
        width: 40,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1.5
    },
    cellText: {
        textAlign: 'center',
        fontSize: 16
    },
    bottomView: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
        alignItems: 'center'
    },
    buttonChangeNumber: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    textChange: {
        color: '#234DB7',
        alignItems: 'center'
    },
    buttonResend: {
        width: 150,
        height: 50,
        borderRadius: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    textResend: {
        alignItems: 'center'
    }
})

export default Verification;
