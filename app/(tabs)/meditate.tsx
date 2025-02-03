import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function Meditate() {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Link href="/(modal)/duration" style={styles.link}>
        Open modal
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    paddingTop: 20,
    fontSize: 20,
  },
});
