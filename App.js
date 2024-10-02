import { Text, View, SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <Text>Current Weather</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
  },
});
