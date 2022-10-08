import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

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

        <View style={styles.textColumnView}>
          <Text style={styles.nameText}>たなか たろう</Text>
          <Text style={styles.detailText}>趣味は読書です</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={hello}>
          <Text style={styles.buttonText}>あいさつ</Text>
        </TouchableOpacity>
        {/* <Button title="あいさつ" onPress={hello}></Button> */}
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
    borderWidth: 2,
    width: "90%",
    height: 120,
    padding: 10,
  },
  profileImg: {
    flex: 1,
    width: 100,
    height: 100,
  },
  textColumnView: {
    flex: 2,
    flexDirection: "column",
  },
  nameText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
  detailText: {
    color: "black",
    fontSize: 16,
    paddingLeft: 15,
  },
  button: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    alignSelf: "center",
    height: 36,
    borderRadius: 18,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
