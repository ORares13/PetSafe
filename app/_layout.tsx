import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Pet Safe",
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          headerTitle: "About Page",
        }}
      />
    </Stack>
  );
}
