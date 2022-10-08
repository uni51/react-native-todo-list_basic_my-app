import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Hello World!!</Text> */}
      {/* <Text style={[styles.text, styles.textRed]}>たなか たろう</Text>
      <View style={styles.viewStyle}>
        <Text>てすと</Text>
      </View> */}
      <Image
        resizeMode="contain" // 短い方の辺に合わせてリサイズする
        style={styles.profileImg}
        source={require("./assets/profile_icon.png")}
      ></Image>
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
