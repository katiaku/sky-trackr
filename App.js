import { View, StyleSheet } from "react-native";
// import CurrentWeather from "./src/components/CurrentWeather";
// import UpcomingWeather from "./src/screens/UpcomingWeather";
import City from "./src/screens/City";

export default function App() {
  return (
    <View style={styles.container}>
      <City />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
