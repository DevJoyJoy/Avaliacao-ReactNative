import { Image } from 'expo-image';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {router} from 'expo-router';


export default function Login() {
  
  const signIn = async () => {
    return router.navigate('/Login')
  }

  
  const register = async () => {
    return router.navigate('/Register')
  }

  return (
    <>
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'lightcyan'}}>
        <Text style={styles.title}>Timer mode</Text>
        <View style={{flex: 1, justifyContent: 'center' }}>
          <Image style={styles.image} source={require('../assets/images/lofi1.jpg')}></Image>
        </View>
        <View style={{flex: 1}}>
          <View style={styles.line}></View>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 15}}>

              <TouchableOpacity onPress={signIn} style={styles.button}>
                <View>Sign-in</View>
              </TouchableOpacity>
              <TouchableOpacity onPress={register} style={styles.button}>
                <View>Register</View>
              </TouchableOpacity>
            </View>

          </View>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',
    fontWeight: '200',
    margin: 0,
    padding: 0,
  },
  image: {
    height: 200,
    width: 200,
    borderRadius: 8,
    justifyContent: 'center'
  },
  line: {
    height: 6,
    width: 250,
    borderRadius: 8,
    backgroundColor: 'darkslategray',
  },
  dot: {
    height: 12,
    width: 12,
    backgroundColor: 'darkslategray',
    borderRadius: 15,
  },
  button: {
    height: 30,
    width: 65,
    margin: 8,
    padding: 8,
    backgroundColor: 'darkcyan',
    borderRadius: 8
  }
});
