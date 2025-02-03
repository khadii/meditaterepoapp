import { View, Text, Button, StyleSheet, Dimensions } from 'react-native';
import { router } from 'expo-router';

const { height } = Dimensions.get('window');

export default function DurationModal() {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
        <Text style={styles.title}>This is a half-screen modal!</Text>
        <Button title="Close" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',  // Pushes modal to the bottom
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Semi-transparent background
  },
  modal: {
    height: height * 0.5,  // Half the screen height
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});
