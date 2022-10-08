import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function ProfileView({ name, profile }) {
  function hello() {
    Alert.alert("あいさつ", `こんにちは、${name}です。`, [
      {
        text: "Cancel",
        onPress: () => console.log("キャンセルボタンが押されました"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OKボタンが押されました") },
    ]);
  }

  return (
    <View style={styles.baseView}>
      <Image
        style={styles.profileImg}
        source={require("./assets/profile_icon.png")}
      ></Image>

      <View style={styles.textColumnView}>
        <Text style={styles.nameText}>{name}</Text>
        <Text style={styles.detailText}>{profile}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={hello}>
        <Text style={styles.buttonText}>あいさつ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  baseView: {
    flexDirection: "row",
    borderWidth: 2,
    width: "90%",
    height: 120,
    padding: 10,
    marginBottom: 10,
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
