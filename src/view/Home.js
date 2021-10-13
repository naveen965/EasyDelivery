import React, {useState, useEffect} from 'react'
import MapView, { Circle, Marker } from 'react-native-maps';
import * as Location from 'expo-location'
import { StyleSheet, View, Dimensions } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const Home = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [pin, setPin] = useState({
    latitude: location != null ? location.coords.latitude : 0,
    longitude: location != null ? location.coords.longitude : 0,
  })

  useEffect(() => {
      (async () => {
      
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setPin(location.coords)
      })();
  }, []);


  console.log(location);
  return (
      <View style={styles.googlePlacesAutoComplete}>
        <GooglePlacesAutocomplete
          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log("*************pky***********")
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyAwGI8UBd2Ev6M6XFWa9AFLbZSX0PHUL50',
            language: 'en',
          }}
          styles={{
            container:{flex:0,position:"absolute",width:"100%",zIndex:1},
            listView:{backgroundColor:"white"},
          }}
        />
          <MapView 
            style={styles.map}  
            region={{
              latitude: location != null ? location.coords.latitude : 0,
              longitude: location != null ? location.coords.longitude : 0,
              latitudeDelta:0.015,
              longitudeDelta:0.0121
            }} 
          >
            <Marker
              coordinate={
              {
                latitude: pin != null ? pin.latitude : 0,
                longitude: pin != null ? pin.longitude : 0,
              }}
              pinColor="black"
              draggable={true}
              onDragStart={(e) => {
                console.log("Drag start", e.nativeEvent.coordinate)
              }}
              onDragEnd={(e) => {
                setPin(e.nativeEvent.coordinate)
              }}
            >
              <EvilIcons name="arrow-up" size={50} color="blue" />
            </Marker>
            <Circle
              center={{
                latitude: pin != null ? pin.latitude : '',
                longitude: pin != null ? pin.longitude : '',
              }}
              radius={500}
            />
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
  googlePlacesAutoComplete: {
    marginTop:50 , flex:1, marginLeft:10, marginRight:10
  }
});

export default Home;
