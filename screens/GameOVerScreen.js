import { Image, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";

const GameOverScreen = () => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summary}>
        Your phone needed <Text style={styles.highlight}>3</Text> rounds to
        guess the number
        <Text style={styles.highlight}> 4</Text>
      </Text>
      <PrimaryButton>Start New Game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWith: 3,
    borderBottomColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },

  image: {
    width: "100%",
    height: "100%",
  },
  summary: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },

  highlight: {
    color: Colors.primary500,
    fontWeight: "bold",
  },
});
