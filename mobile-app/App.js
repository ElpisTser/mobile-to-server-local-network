import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';


export default function App() {
  const [count, setCount] = useState(0);
  
  const handleIncrease = () => {
    setCount(prevValue => prevValue + 1);
  }

  const handleDecrease= () => {
    setCount(prevValue => prevValue - 1);
  }


  return (
    <View style={styles.container}>
      <Button 
        title='press to increase number'
        onPress={handleIncrease}
      />
      <Button 
        title='press to decreasee number'
        onPress={handleDecrease}
      />      
      <Text>{count}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
