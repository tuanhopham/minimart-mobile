import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { AppRouter } from "./src/components/layout/layout";

export default function App() {
  return (
    <View style={styles.container}>
      <AppRouter />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
