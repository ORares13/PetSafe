import { View, Text, StyleSheet } from 'react-native';
import PetSelector from '../../components/PetSelector';
import React from 'react';

export default function PetSelectorScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Choose Your Pet</Text>
            <PetSelector />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
});
