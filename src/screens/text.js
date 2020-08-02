import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BoldAndBeautiful = () => {
    return (
        <View>
      <Text style={styles.baseText}>
        I am bold
        <Text style={styles.innerText}> and red</Text>
      </Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    baseText: {
      fontWeight: 'bold'
      paddingTop: 40
    },
    innerText: {
      color: 'red'
      paddingTop: 40
    }
  });
  
  export default BoldAndBeautiful;
