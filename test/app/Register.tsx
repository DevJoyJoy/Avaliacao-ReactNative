import { Image } from 'expo-image';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import {router} from 'expo-router';
import { app } from '../firebaseConfig'
import { useState, useEffect } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2'


export default function Regsiter() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setPassword2] = useState("")

    const login = async () => {
        return router.navigate('/')
    }

    const minPassword = 6
    const auth = getAuth(app)


    const signUp = async () => {
        if(password.length >= minPassword) {
        if (password == confirmPassword) {
            try {
            await createUserWithEmailAndPassword(auth, email, password)
            Swal.fire({
                icon: "success",
                title: "Sucess",
                text: "Created with sucess!"
            });
            return router.navigate('/')
            } catch(e){
            return Swal.fire({
                icon: "error",
                title: "Error",
                text: "The passwords are different!" + e,
            });        
        }
        } else {
            return Swal.fire({
            icon: "error",
            title: "Erro",
            text: "Something went wrong!",
            });
        }
        }
    }


    useEffect(() => {
        console.log(email, password, confirmPassword)
    }, [email, password, confirmPassword])

    return (
        <>
        <View style={{flex: 1, alignItems: 'center', backgroundColor: 'lightcyan'}}>
            <Text style={styles.title}>Register</Text>
            <View style={{flex: 1, justifyContent: 'center' }}>
            <TextInput placeholder='Name' onChangeText={(name) => setName(name)} style={styles.box}></TextInput>
                <TextInput placeholder='E-mail' onChangeText={(email) => setEmail(email)} style={styles.box}></TextInput>
                <TextInput placeholder='Password' onChangeText={(password) => setPassword(password)} style={styles.box}></TextInput>
                <TextInput placeholder='Confirm Password' onChangeText={(confirmPassword) => setPassword2(confirmPassword)} style={styles.box}></TextInput>
                <TouchableOpacity onPress={signUp} style={styles.loginButton}>
                    <View>
                        Create
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 15}}>
                <TouchableOpacity onPress={login} style={styles.button}>
                    <View>Already have an account?</View>
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
    width: 185,
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
