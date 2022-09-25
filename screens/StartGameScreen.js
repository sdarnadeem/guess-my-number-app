import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = ({ onConfirm }) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(text) {
    setEnteredNumber(text);
  }

  function resetInputString() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber, 10);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 90) {
      Alert.alert(
        "Invalid Number!",
        "Number has to be a number between 0 and 99",
        [{ text: "Okay", style: "destructive", onPress: resetInputString }]
      );
      return;
    }
    onConfirm(chosenNumber);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonGroup}>
        <View style={styles.button}>
          <PrimaryButton onPress={resetInputString}>Reset</PrimaryButton>
        </View>
        <View style={styles.button}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    backgroundColor: "#4e0329",
    elevation: 4,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 60,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    textAlign: "center",
    marginVertical: 8,
    fontWeight: "bold",
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flex: 1,
  },
});
