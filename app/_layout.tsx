import { Slot, Stack } from "expo-router";

export default function RootLayout(){
return(
    
    <Stack>
        <Stack.Screen name="(tabs)" options={{headerShown:false}}/>
        <Stack.Screen name="index" options={{headerShown:false}}/>
        <Stack.Screen name="meditate" options={{headerShown:false}}/>
        <Stack.Screen
        name="(modal)/duration"
        options={{
          headerShown: false,
          animation:'fade_from_bottom',
          presentation: 'transparentModal',  // Ensures it presents as a modal
        }}
      />

    </Stack>
)
}