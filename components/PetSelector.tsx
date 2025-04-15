import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useRouter } from 'expo-router';


import breedsData from '../assets/data/breed.json';

export default function PetSelector() {
    const [species, setSpecies] = useState<'cat' | 'dog' | null>(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState<{ label: string; value: string }[]>([]);
    const router = useRouter();

    useEffect(() => {
        if (species === 'cat') {
            setItems(breedsData.cat.map((b: any) => ({ label: b.name, value: b.name })));
        } else if (species === 'dog') {
            setItems(breedsData.dog.map((b: any) => ({ label: b.name, value: b.name })));
        } else {
            setItems([]);
        }
    }, [species]);


    const handleConfirm = () => {
        if (species && value) {
            const selectedBreed = species === 'cat'
                ? breedsData.cat.find(b => b.name === value)
                : breedsData.dog.find(b => b.name === value);

            if (selectedBreed) {
                router.push({
                    pathname: '/(tabs)/temp',
                    params: { species, breedName: selectedBreed.name },
                });
            }
        } else {
            alert('Please select a pet and breed.');
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select Your Pet</Text>

            <View style={styles.imageRow}>
                <TouchableOpacity onPress={() => setSpecies('cat')} style={species === 'cat' ? styles.selected : undefined}>
                    <Image source={require('../assets/images/cathappy.png')} style={styles.petImage} />
                    <Text style={styles.label}>Cat</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setSpecies('dog')} style={species === 'dog' ? styles.selected : undefined}>
                    <Image source={require('../assets/images/doghappy.png')} style={styles.petImage} />
                    <Text style={styles.label}>Dog</Text>
                </TouchableOpacity>
            </View>

            {species && (
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder={`Select a ${species} breed`}
                    style={styles.dropdown}
                    dropDownContainerStyle={{ backgroundColor: '#fff' }}
                    textStyle={{ color: '#000' }}
                />
            )}

            <View style={{ marginTop: 20 }}>
                <Button title="Confirm" onPress={handleConfirm} disabled={!species || !value} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16,
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
    petImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    label: {
        textAlign: 'center',
        marginTop: 8,
        fontSize: 16,
        fontWeight: '500',
    },
    selected: {
        borderWidth: 2,
        borderColor: '#007aff',
        borderRadius: 10,
        padding: 4,
    },
    dropdown: {
        backgroundColor: '#f5f5f5',
        borderColor: '#ccc',
        zIndex: 1000,
    },
});
