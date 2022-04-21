import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

import AsyncStorage from "@react-native-async-storage/async-storage";
const Riwayat = () => {


    const [Data, setData] = useState([]);

    const saveData = async (Data) => {
        try {
            await AsyncStorage.setItem('riwayat', JSON.stringify(Data))
        } catch (error) {
            console.log('Save error', error)
        }
    }

    const clearAllData = async () => {
        try {
            await AsyncStorage.clear()
            setData([])
        } catch (error) {
            console.log('Error clear', error)
        }
    }
    const getData = async () => {
        try {
            let isi_data = await AsyncStorage.getItem('riwayat')
            isi_data = JSON.parse(isi_data);
            if (isi_data !== null) {
                setData(isi_data)
            }
        } catch (error) {
            console.log('Save error', error)
        }
    }
    // const deleteData = (Index) => {
    //     Data.splice(Index, 1)
    //     setData(Data)
    //     saveData(Data)
    //     // getData()

    // }
    // const removeAppKeys = async () => {
    //     let keys = []
    //     try {
    //         keys = await AsyncStorage.getAllKeys()
    //         console.log(`Keys: ${keys}`) // Just to see what's going on
    //         await AsyncStorage.multiRemove(keys)
    //         setData([])
    //     } catch (e) {
    //         console.log(e)
    //     }
    //     console.log('Done')
    // }

    useEffect(() => {

        getData();
    }, [])

    return (
        <ScrollView style={styles.content}>
            <View >
                <View style={styles.baris}>
                    <TouchableOpacity
                        style={styles.tombol2}
                        onPress={() => {
                            getData()
                        }}
                    >
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }} >Refresh</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.tombol}
                        onPress={() => {
                            saveData([])
                            setData([])
                        }}
                    >
                        <Text style={{ color: 'white', fontWeight: '700', fontSize: 14 }} >Clear</Text>
                    </TouchableOpacity>
                </View>

                {Data.map((item, index) => (

                    <View key={index} style={styles.wrap}>
                        <Text> {item.judul} </Text>
                        <Text> {item.isi}</Text>
                        <Text>Dengan lama waktu {item.jam} jam, {item.menit} menit, {item.detik} detik.</Text>


                    </View>
                ))
                }
            </View>
        </ScrollView >
    )
}

export default Riwayat

const styles = StyleSheet.create({
    tombol: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#cf9100',
        borderRadius: 5,
        width: 100,
        marginVertical: 10
    },
    tombol2: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#004fd6',
        borderRadius: 5,
        width: 100,
        marginVertical: 10
    },
    content: {
        backgroundColor: 'white',
        borderColor: 'black',
        flex: 1,
        paddingHorizontal: 20,
        width: '94%',
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 4,
        borderRadius: 9,
        alignSelf: 'center'
    },
    wrap: {
        backgroundColor: '#f7f7f7',
        marginVertical: 5,
        padding: 5,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 4,
    },
    baris: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})