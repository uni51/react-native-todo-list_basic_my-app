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
      <View style={styles.baseView}>
        <Image
          style={styles.profileImg}
          source={require("./assets/profile_icon.png")}
        ></Image>

        <View>
          <Text style={styles.text}>たなか たろう</Text>
          <Text style={styles.text}>趣味は読書です</Text>
        </View>

        <Button title="あいさつ" onPress={hello}></Button>
      </View>
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
  baseView: {
    flexDirection: "row",
  },
  text: {
    color: "black",
    fontSize: 20,
    // backgroundColor: "black",
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
    height: 100,
  },
});
