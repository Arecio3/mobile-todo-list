import React from "react";
import { View, Text, StyleSheet} from "react-native";

const Task = ({ text }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{text}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
  },
  itemLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
  },
  square: {
      width: 25,
      height: 24,
      backgroundColor: '#55BCF6',
      opacity: 0.4,
      borderRadius: 5,
      marginRight: 10,
  },
  itemText: {
      maxWidth: '80%',

  },
  circle: {
      width: 12,
      height: 12,
      borderColor: '#55BCF6',
      borderWidth: 2,
      borderRadius: 5,
  },
});
export default Task;
