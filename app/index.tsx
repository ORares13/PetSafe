import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { defaultThresholds, breedThresholds, AnimalType } from "../constants/thresholds";

export default function HomeScreen() {
  const [selectedAnimal, setSelectedAnimal] = useState<AnimalType>("dog");
  const [selectedBreed, setSelectedBreed] = useState<string>(
    Object.keys(breedThresholds.dog)[0]
  );

  const breeds = Object.keys(breedThresholds[selectedAnimal]);
  const thresholds = breedThresholds[selectedAnimal][selectedBreed] ||
    defaultThresholds[selectedAnimal];

  return (
    <View style={styles.container}>
      {/* Animal Picker */}
      <Text style={styles.label}>Animal:</Text>
      <Picker
        selectedValue={selectedAnimal}
        onValueChange={(itemValue) => {
          setSelectedAnimal(itemValue as AnimalType);
          setSelectedBreed(Object.keys(breedThresholds[itemValue])[0]);
        }}
        style={styles.picker} // Set text color here
        itemStyle={styles.pickerItem} // Style for dropdown items
      >
        <Picker.Item label="Dog" value="dog" />
        <Picker.Item label="Cat" value="cat" />
      </Picker>

      {/* Breed Picker */}
      <Text style={styles.label}>Breed:</Text>
      <Picker
        selectedValue={selectedBreed}
        onValueChange={(itemValue) => setSelectedBreed(itemValue)}
        style={styles.picker} // Set text color here
        itemStyle={styles.pickerItem} >

        {breeds.map((breed) => (
          <Picker.Item key={breed} label={breed} value={breed} />
        ))}
      </Picker>

      {/* Thresholds Display */}
      <Text style={styles.sectionTitle}>Thresholds:</Text>
      <Text style={styles.thresholdText}>
        Temperature: <Text style={styles.valueText}>
          {thresholds.temperature.min}°C - {thresholds.temperature.max}°C
        </Text>
      </Text>
      <Text style={styles.thresholdText}>
        Humidity: <Text style={styles.valueText}>
          {thresholds.humidity.min}% - {thresholds.humidity.max}%
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5', // Light gray background
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Dark gray for labels
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50', // Dark blue for section titles
    marginTop: 20,
    marginBottom: 10,
  },
  thresholdText: {
    fontSize: 16,
    color: '#7f8c8d', // Gray for static text
    marginVertical: 5,
  },
  valueText: {
    color: '#e74c3c', // Red for values to make them stand out
    fontWeight: '600',
  },
  picker: {
    color: 'black', // Selected item text color
    backgroundColor: 'white', // Optional: set background
  },
  pickerItem: {
    color: 'black', // Dropdown items text color
    fontSize: 16,   // Optional: adjust font size
  },
});