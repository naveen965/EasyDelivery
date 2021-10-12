import React, {useState, useEffect} from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location'
import { StyleSheet, View, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const Home = () => {
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

    console.log(location);
  return (
      <View style={styles.container}>
          <MapView 
            style={styles.map}  
            region={{
              latitude: location != null ? location.coords.latitude : '',
              longitude: location != null ? location.coords.longitude : '',
              latitudeDelta:0.015,
              longitudeDelta:0.0121
            }} 

          
          >
           <Marker
            coordinate={{
              latitude: location != null ? location.coords.latitude : 0,
              longitude: location != null ? location.coords.longitude : 0,
            }}
           >
             <EvilIcons name="arrow-up" size={50} color="red" />
             </Marker>
          </MapView>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Home;
