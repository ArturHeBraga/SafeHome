import React, { useEffect, useState } from 'react';
import { useFonts, BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { Text, View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const New: React.FC = () => {
    const [fontLoaded] = useFonts({
        BebasNeue_400Regular,
    });


    

    if (!fontLoaded) {
        return null;
    }
  }

export default New;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontFamily: 'BebasNeue_400Regular',
        marginBottom: 16,
    },
    item: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    text: {
        fontSize: 16,
    },
});
