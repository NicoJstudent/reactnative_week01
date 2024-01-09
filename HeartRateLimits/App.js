import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState(0);

  function calculate() {
    const Lower = (220-age) * 0.65;
    const Upper = (220-age) * 0.85;
    setLimits(Lower + ' - ' + Upper);
  }

    return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput style={styles.field} value={age}onChangeText={age => setAge(age)}
      keyboardType='default'/>
      <Text style={styles.field}>Limits</Text>
      <Text style={styles.field}>{limits}</Text>
      <Button onPress={calculate} title="Calculate" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginLeft: 10,
  },
  field: {
    marginBottom: 10,
  }
});