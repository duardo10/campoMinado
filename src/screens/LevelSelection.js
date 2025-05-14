import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from "react-native";

const LevelButton = ({ text, styleDegree, level, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, styleDegree]} onPress={() => onPress(level)}>
      <Text style={styles.buttonLabel}>{text}</Text>
    </TouchableOpacity>
  );
};

export default props => {
  return (
    <Modal onRequestClose={props.onCancel} visible={props.isVisible} animationType="slide" transparent={true}>
      <View style={styles.frame}>
        <View style={styles.container} >
          <Text style={styles.title}>Selecione o Nível</Text>
          <LevelButton
            text="Fácil"
            styleDegree={styles.bgEasy}
            level={0.1}
            onPress={props.onLevelSelected}
          />
          <LevelButton
            text="Intermediário"
            styleDegree={styles.bgNormal}
            level={0.2}
            onPress={props.onLevelSelected}
          />
          <LevelButton
            text="Difícil"
            styleDegree={styles.bgHard}
            level={0.3}
            onPress={props.onLevelSelected}
          />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  container: {
    backgroundColor: '#EEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    padding: 5,
  },
  buttonLabel: {
    fontSize: 20,
    color: '#EEE',
    fontWeight: 'bold',
  },
  bgEasy: {
    backgroundColor: '#49b65d',
  },
  bgNormal: {
    backgroundColor: '#2765F7',
  },
  bgHard: {
    backgroundColor: '#F26337'
  }
})