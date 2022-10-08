import { StyleSheet, View } from "react-native";
import ProfileView from "./ProfileView";

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileView name={"やまだ たろう"} profile={"趣味は映画鑑賞です"} />
      <ProfileView name={"たなか ひろし"} profile={"野球観戦が好きです"} />
      <ProfileView name={"さとう かずお"} profile={"キャンプによく行きます"} />
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
});
