import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    headerTitle: "Pet Safe",
                }}
            />
            <Tabs.Screen
                name="pet-selector"
                options={{
                    headerTitle: "Pet Page",
                }}
            />
            <Tabs.Screen
                name="temp"
                options={{
                    headerTitle: "Temperature Page",
                }}
            />
            <Tabs.Screen
                name="about"
                options={{
                    headerTitle: "About Page",
                }}
            />

        </Tabs>
    );
}
