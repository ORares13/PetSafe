import { View } from 'react-native';
import TempViewer from '../../components/TempViwer';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

export default function TempScreen() {
    const { species, breedName } = useLocalSearchParams();

    if (!species || !breedName) return null;

    return (
        <View style={{ flex: 1, padding: 20, justifyContent: 'center' }}>
            <TempViewer
                breed={breedName as string}
                species={species as 'cat' | 'dog'}
            />
        </View>
    );
}
