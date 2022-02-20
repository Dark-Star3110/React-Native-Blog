import React, { useState } from "react";
import { View, Image, Text, Button, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const Hello = () => {
  const [url, setUrl] = useState(
    "https://reactnative.dev/docs/assets/p_cat2.png"
  );

  const toggleImg = () => {
    const newUrl =
      url === "https://reactnative.dev/docs/assets/p_cat2.png"
        ? "https://appstickers-cdn.appadvice.com/1319211662/825103166/0fe855875fd6aacd4a4d43a25b7788c9-8.png"
        : "https://reactnative.dev/docs/assets/p_cat2.png";
    setUrl(newUrl);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: url,
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.text}>Hello React Native!</Text>
      <Text style={{ marginBottom: 5, fontSize: 16 }}>
        xin chao <Text style={[styles.text, { fontSize: 16 }]}>Van</Text>
      </Text>
      <Button
        onPress={toggleImg}
        // style={{ marginTop: 8 }}
        title="CHANGE IMAGE"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: "#1cbcff",
  },
});

export default Hello;
