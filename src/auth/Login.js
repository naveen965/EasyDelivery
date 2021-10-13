// import { NavigationContainer } from '@react-navigation/native';
import React, {useState, useRef, useEffect} from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    KeyboardAvoidingView, 
    TextInput, 
    TouchableOpacity, 
    Modal, 
    FlatList, 
    TouchableWithoutFeedback
} from 'react-native'
import { useNavigation } from '@react-navigation/core'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Countries } from './Countries';

const Login = () => {
    const navigation = useNavigation();
    let textInput = useRef(null);
    const defaultCodeCountry = "+94";
    const defaultMaskCountry = "456 321 789";
    const [phoneNumber, setPhoneNumber] = useState();
    const [focusInput, setFocusInput] = useState(true);
    const [modalVisible, setModalVisible] = useState(true);
    const [dataCountries, setDataCountries] = useState(Countries);
    const [codeCountry, setCodeCountry] = useState(defaultCodeCountry);
    const [placeholder, setPlaceholder] = useState(defaultMaskCountry);
    // const login = () => {
    //     navigation.navigate('Verification')
    // }

    const onShowHideModal = () => {
        setModalVisible(!modalVisible)
    }

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

    const onCountryChange = (item) => {
        setCodeCountry(item.dialCode)
        setPlaceholder(item.mask)
        onShowHideModal()
    }

    const filterCountries = (value) => {
        if (value) {
            const countryData = dataCountries.filter((obj) => 
            (obj.en.indexOf(value) > -1 || obj.dialCode.indexOf(value) > -1))
            setDataCountries(countryData)
        } else {
            setDataCountries(Countries)
        }
    }

    let renderModal = () => {
        return (
            <Modal animationType="slide" transparent={false} visible={modalVisible}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={styles.modalContainer}>
                        <View style={styles.filterInputContainer}>
                            <TextInput
                                autoFocus={true}
                                onChangeText={filterCountries}
                                placeholder={'Fliter'}
                                focusable={true}
                                style={styles.filterInputStyle}
                            />
                        </View>
                        <FlatList
                        style={{flex: 1}}
                        data={dataCountries}
                        extraData={dataCountries}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={
                            ({item}) => (
                                <TouchableWithoutFeedback onPress={() => onCountryChange(item)}>
                                    <View style={styles.countryModalStyle}>
                                        <View style={styles.modalItemContainer}>
                                            <Text style={styles.modalItemName}>{item.en}</Text>
                                            <Text style={styles.modalItemDialCode}>{item.dialCode}</Text>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        }
                    />
                    </View>
                    <TouchableOpacity onPress={onShowHideModal} style={styles.closeButtonStyle}>
                        <Text style={styles.closeTextStyle}>{'CLOSE'}</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </Modal>
        )
    }

    return (
        <View style={styles.container}>
            <KeyboardAvoidingView 
                keyboardVerticalOffset={20}
                style={styles.containerAvoiddingView}
            >
                <Text style={{fontSize: 25, marginTop: 50}}>Register</Text>
                <Text style={styles.textTitle}>{"Please input your mobile phone number"}</Text>
                <View style={[
                    styles.containerInput,
                    {
                        borderBottomColor: focusInput ? '#244DB7' : '#ffffff'
                    }
                ]}>
                    <TouchableOpacity onPress={onShowHideModal}>
                        <View style={styles.openDialogView}>
                            <Text>{codeCountry + " |"}{renderModal()}</Text>
                        </View>
                    </TouchableOpacity>
                    <TextInput
                        ref={(input) => textInput = input}
                        style={styles.phoneInputStyle}
                        placeholder={placeholder}
                        keyboardType="numeric"
                        value={phoneNumber}
                        onChangeText={onChangePhone}
                        secureTextEntry={false}
                        onFocus={onChangeFocus}
                        onBlur={onChangeBlur}
                        autoFocus={focusInput}
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
    },
    modalContainer: {
        paddingTop: 15,
        paddingLeft: 25,
        paddingRight: 25,
        flex: 1,
        backgroundColor: 'white'
    },
    filterInputStyle: {
        flex: 1,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#ffffff',
        color: '#424242'
    },
    countryModalStyle: {
        flex: 1,
        borderColor: 'black',
        borderTopWidth: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    modalItemContainer: {
        flex: 1,
        paddingLeft: 5,
        flexDirection: 'row'
    },
    modalItemName: {
        flex: 1,
        fontSize: 16
    },
    modalItemDialCode: {
        fontSize: 16
    },
    filterInputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeButtonStyle: {
        padding: 12,
        alignItems: 'center'
    },
    closeTextStyle: {
        padding: 5,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold'
    }
})

export default Login;
