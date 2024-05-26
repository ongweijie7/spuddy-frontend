import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomBubble = (props) => {
  const { currentMessage } = props
  const { user } = currentMessage
  const isBotMessage = user._id === 0
  
  if (isBotMessage) {
    return (
    <View style={styles.botBubbleContainer}>
      {props.renderMessageAudio && props.renderMessageAudio(props)}
      <Text style={styles.mainText}>
        {currentMessage.text}
      </Text>
      <Text style={styles.romanization}>
        {currentMessage.romanization}
      </Text>
      <Text style={styles.translationText}>
        {currentMessage.translation}
      </Text>
  </View>)
  }
  return (
    <View style={styles.userBubbleContainer}>
      <Text style={styles.mainText}>
        {currentMessage.text}
      </Text>
  </View>)
  
  
};

const styles = StyleSheet.create({
  userBubbleContainer: {
    backgroundColor: 'rgb(253, 237, 235)',
    borderRadius: 12,
    padding: 10,
    maxWidth: 300,
  },
  botBubbleContainer: {
    backgroundColor: 'rgb(241, 241, 241)',
    borderRadius: 12,
    padding: 10,
    maxWidth: 300,
  },
  mainText: {
    fontSize: 18,
    color: '#000',
  },
  romanization: {
    fontSize: 13,
    color: '#666',
    marginTop: 5,
  },
  translationText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
})

export default CustomBubble;