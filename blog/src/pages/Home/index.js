import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

export default function Home(){
    const navigation = useNavigation();

    useEffect(() => {
        function loadData(){
            console.log('load data');
        }

        loadData();
    }, [])

    return(
        <SafeAreaView style={styles.container}>
            
            <View style={styles.header}>
                <Text style={styles.name}>DevBLog</Text>

                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Feather name="search" size={24} color="#fff" />
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#232630'
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        marginTop: 18,
        marginBottom: 24
    },
    name:{
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold'
    }
})