import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import { useNavigation } from '@react-navigation/core'

const Verification = () => {
    const navigation = useNavigation();
    return (
        <View>
            <Text>
                Verification page
            </Text>
            <Button styles={styles.button} title="Verification" onPress={() => navigation.navigate('Home')}></Button>
        </View>
        
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 20
    }
})

export default Verification;
