import { StyleSheet, Text } from "react-native";

function InstructionText() {
  return <Text style={styles.instructionText}>Input a Number</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
  },
});

export default InstructionText;
