import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleInput = (text) => {
    setInput(text);
  };

  const calculate = () => {
    try {
      setOutput(eval(input).toString());
    } catch (e) {
      setOutput('Error');
    }
  };

  const clear = () => {
    setInput('');
    setOutput('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.outputContainer}>
        <Text style={styles.output}>{output}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={handleInput}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.numbersContainer}>
          <View style={styles.numberRow}>
            <TouchableOpacity style={styles.numberButton} onPress={() => handleInput('1')}>
              <Text style={styles.numberButtonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButton} onPress={() => handleInput('2')}>
              <Text style={styles.numberButtonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numberButton} onPress={() => handleInput('3')}>
              <Text style={styles.numberButtonText}>3</Text>
            </TouchableOpacity>
          </View>
          {/* Add more number rows and buttons here */}
        </View>
        <View style={styles.operationsContainer}>
          <TouchableOpacity style={styles.operationButton} onPress={calculate}>
            <Text style={styles.operationButtonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.operationButton} onPress={() => handleInput('+')}>
            <Text style={styles.operationButtonText}>+</Text>
          </TouchableOpacity>
          {/* Add more operation buttons here */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  outputContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    
  }
})