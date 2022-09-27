import { Text, View } from "react-native";

const GameScreen = () => {
  return (
    <View>
      <Text>Opponent's Guess</Text>
      {/* Guess */}
      <View>
        <Text>Higher or Lower</Text>
        {/* +- */}
      </View>
      {/* <View>Log Rounds</View> */}
    </View>
  );
};

export default GameScreen;
