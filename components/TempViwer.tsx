import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import breedsData from '../assets/data/breed.json';

type TempViewerProps = {
    breed: string;
    species: 'dog' | 'cat';
};

type BreedData = {
    name: string;
    optimalTemperature: string;
    minTemperature: string;
    maxTemperature: string;
    minHumidity: string;
    maxHumidity: string;
};

const TempViewer: React.FC<TempViewerProps> = ({ breed, species }) => {
    const [data, setData] = useState<BreedData | null>(null);
    const [sensorData, setSensorData] = useState<{ temperature: number; humidity: number } | null>(null);
    const [isCritical, setIsCritical] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Track loading state

    // Fetch sensor data from Raspberry Pi and update it periodically
    useEffect(() => {
        const fetchSensorData = async () => {
            try {
                const response = await fetch('http://<raspberry_pi_ip>:5000/current');
                const result = await response.json();
                if (response.ok) {
                    setSensorData({
                        temperature: result.temperature,
                        humidity: result.humidity,
                    });
                } else {
                    console.error('Failed to fetch sensor data');
                    setSensorData(null); // Set to null on failure
                }
            } catch (error) {
                console.error('Error fetching sensor data:', error);
                setSensorData(null); // Set to null on error
            } finally {
                setIsLoading(false); // Stop loading after attempt
            }
        };

        // Initial fetch
        fetchSensorData();

        // Set up polling every 5 seconds
        const interval = setInterval(fetchSensorData, 5000);

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(interval);
    }, []);

    // Fetch breed-specific data
    useEffect(() => {
        const breedList = breedsData[species];
        const found = breedList.find((b) => b.name === breed);
        setData(found || null);
    }, [breed, species]);

    // Compare the sensor data with the breed-specific data
    useEffect(() => {
        if (sensorData && data) {
            const { temperature, humidity } = sensorData;
            const { minTemperature, maxTemperature, minHumidity, maxHumidity } = data;

            // Check if the sensor data is out of bounds
            if (
                temperature < parseFloat(minTemperature) ||
                temperature > parseFloat(maxTemperature) ||
                humidity < parseFloat(minHumidity) ||
                humidity > parseFloat(maxHumidity)
            ) {
                setIsCritical(true);
            } else {
                setIsCritical(false);
            }
        }
    }, [sensorData, data]);

    const imageSource = isCritical
        ? (species === 'dog' ? require('../assets/images/dogsad.png') : require('../assets/images/catsad.png'))
        : (species === 'dog' ? require('../assets/images/doghappy.png') : require('../assets/images/cathappy.png'));

    // If data is not yet fetched or there is no data, show loading or N/A
    if (!data || isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" />
                <Text>Loading breed info...</Text>
            </View>
        );
    }

    const displayTemp = sensorData ? `${sensorData.temperature}°C` : 'N/A';
    const displayHumidity = sensorData ? `${sensorData.humidity}%` : 'N/A';

    return (
        <View style={[styles.container, isCritical ? styles.criticalContainer : {}]}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.title}>{breed}</Text>
            <Text style={styles.label}>🌡️ Current Temp: <Text style={styles.value}>{displayTemp}</Text></Text>
            <Text style={styles.label}>💧 Current Humidity: <Text style={styles.value}>{displayHumidity}</Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: '#f2f2f2',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        marginVertical: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
    },
    criticalContainer: {
        backgroundColor: 'red',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 16,
        borderRadius: 50,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    label: {
        fontSize: 16,
        marginBottom: 6,
        color: '#333',
    },
    value: {
        fontWeight: '600',
        color: '#000',
    },
});

export default TempViewer;
