import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

export default function App() {
  function hello() {
    Alert.alert("あいさつ", "こんにちは、田中太郎です。", [
      {
        text: "Cancel",
        onPress: () => console.log("キャンセルボタンが押されました"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OKボタンが押されました") },
    ]);
  }

  return (
    <View style={styles.container}>
      <Button title="あいさつ" onPress={hello}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    backgroundColor: "black",
    padding: 10,
  },
  textRed: {
    color: "red",
    fontWeight: "bold",
  },
  viewStyle: {
    width: 200,
    height: 100,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  profileImg: {
    width: 100,
    height: 50,
  },
});
