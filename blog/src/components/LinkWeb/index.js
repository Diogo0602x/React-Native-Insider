import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import { Feather } from '@expo/vector-icons';

import { WebView } from 'react-native-webview';

export default function LinkWeb({link, title, closeModal}){
    return(       
        <>
            <TouchableOpacity style={styles.button} onPress={closeModal}>
                <Feather name='x'  size={25} color='#FFF' />
                <Text style={styles.name}>{title}</Text>
            </TouchableOpacity>
            <WebView
                source={{uri: link}}
            />
        </>
    )
}

const styles = StyleSheet.create({
    button:{
        padding: 10,
        backgroundColor: '#232630',
        marginTop: 60,
        flexDirection: 'row',
        alignItems: 'center',
    },
    name:{
        color: '#FFF',
        marginLeft: 8,
        fontSize: 18,
        fontWeight: 'bold',
    }
})