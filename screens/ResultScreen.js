import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import lose from "../assets/images/loser.gif";
import win from "../assets/images/win.gif";

const ResultScreen = ({ result }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    handleImage();
  }, []);

  const handleImage = () => {
    if (result === "win") {
      setImage(win);
      return;
    }
    setImage(lose);
  };

  return (
    <View style={styles.container}>
      <Card>
        <Text>{`you ${result}`}</Text>
      </Card>
      <Image style={styles.imageContainer} source={image} />
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    height: 160,
    width: 160,
    marginTop: 100,
  },
});
