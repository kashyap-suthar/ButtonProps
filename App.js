import React, {useRef} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const App = () => {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const input5Ref = useRef(null);

  const handleButtonClick = () => {
    input3Ref.current.focus();
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TextInput
          ref={input1Ref}
          style={styles.input}
          placeholder="Input 1"
          placeholderTextColor="#888"
          nextFocusLeft={input2Ref}
          nextFocusRight={input5Ref}
        />
        <TextInput
          ref={input2Ref}
          style={styles.input}
          placeholder="Input 2"
          placeholderTextColor="#888"
          nextFocusLeft={input3Ref}
          nextFocusRight={input1Ref}
          nextFocusUp={input4Ref}
        />
        <TextInput
          ref={input3Ref}
          style={styles.input}
          placeholder="Input 3"
          placeholderTextColor="#888"
          nextFocusLeft={input4Ref}
          nextFocusRight={input2Ref}
          nextFocusUp={input5Ref}
          nextFocusDown={input2Ref}
        />
      </View>
      <View style={styles.row}>
        <TextInput
          ref={input4Ref}
          style={styles.input}
          placeholder="Input 4"
          placeholderTextColor="#888"
          nextFocusLeft={input5Ref}
          nextFocusRight={input3Ref}
          nextFocusUp={input2Ref}
          nextFocusDown={input3Ref}
        />
        <TextInput
          ref={input5Ref}
          style={styles.input}
          placeholder="Input 5"
          placeholderTextColor="#888"
          nextFocusLeft={input1Ref}
          nextFocusRight={input4Ref}
          nextFocusUp={input3Ref}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Focus Input 3"
          onPress={handleButtonClick}
          color="#007AFF"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 80,
    height: 40,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: '#555',
    color: '#fff',
  },
  button: {
    marginTop: 20,
  },
});

export default App;
