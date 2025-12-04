import { Image } from 'expo-image';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {router} from 'expo-router';
import { app } from '../firebaseConfig'
import { useState, useEffect } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function HomeScreen() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  const register = async () => {
    return router.navigate('/Register')
  }

  const auth = getAuth(app)

  const signIn = async () => {
    await signInWithEmailAndPassword(auth, email, password)
    router.navigate('/Home') 
  }
  
  return (
    <>
      <View style={{flex: 1, alignItems: 'center', backgroundColor: 'lightcyan'}}>
        <Text style={styles.title}>Login</Text>
        <View style={{flex: 1, justifyContent: 'center' }}>
            <TextInput placeholder='E-mail' onChangeText={(email) => setEmail(email)} style={styles.box}></TextInput>
            <TextInput placeholder='Password' onChangeText={(password) => setPassword(password)} style={styles.box}></TextInput>
            <TouchableOpacity onPress={signIn} style={styles.loginButton}>
                <View>
                    Login
                </View>
            </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 15}}>
              <TouchableOpacity onPress={register} style={styles.button}>
                <View>Don't have an account? Create one!</View>
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
    height: 35,
    width: 244,
    margin: 8,
    padding: 8,
    backgroundColor: 'darkcyan',
    borderRadius: 8
  },
  loginButton: {
    height: 35,
    width: 60,
    margin: 10,
    padding: 8,
    borderRadius: 8,
    backgroundColor: 'darkcyan',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  box: {
    backgroundColor: "cyan",
    width: 270,
    height: 35,
    margin: 10,
    borderRadius: 10,
    padding: 8
  },
});