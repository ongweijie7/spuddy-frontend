import { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView, Text } from 'react-native'
import { UserContext } from '../UserContext.js';
import { GiftedChat, Send } from 'react-native-gifted-chat';
import { onStartRecord, onStopRecord } from '../AudioRecorder.js';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import Icon from "react-native-vector-icons/Entypo";
import { Audio } from 'expo-av';
import { getMessages, postAudioMessage, postUserMessage } from '../api/MessageAPI.js';
import CustomBubble from './CustomBubble.js';
import CustomAvatar from './CustomAvatar.js';

const Chat = ({ route }) => {
  const { user, setUser } = useContext(UserContext)
  const [messages, setMessages] = useState([])
  const [recording, setRecording] = useState();
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  useEffect(() => {
    if (user) {
      const response = getMessages(user.username).then(response => {
        const messages = response.map(message => {
        return {
          _id: message._id,
          text: message.text,
          translation: message.translation,
          romanization: message.romanization,
          createdAt: new Date(),
          user: {
            _id: message.userId,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
          audio: message.audioUrl,
        }
      })
      setMessages(messages)
    })
  }}, [user])

  const playAudio = async (audioUrl) => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync({ uri: audioUrl })
      await soundObject.playAsync()
    } catch (error) {
      console.error("Error loading or playing sound", error);
    }
  }

  const onPressButton = async () => {
    console.log('Start recording...');
    onStartRecord(setRecording, permissionResponse, requestPermission)
  }

  const createNewMessage = (messageId, text, audio, userId, translation, romanization) => {
    const message = {
      _id: messageId,
      text: text,
      romanization: romanization,
      translation: translation,
      createdAt: new Date(),
      user: {
        _id: userId,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
      audio: audio,
    }

    setMessages(previousMessages => {
      return GiftedChat.append(previousMessages, message) 
    })
    return message
  }

  const onReleaseButton = async () => {
    console.log('Stop recording and send...')
    const audioUri = await onStopRecord(recording, setRecording)
    const response =  await postAudioMessage(audioUri, user.username)

    inputTextDetected = response?.messageText || 'Failed to detect text please try again'
    inputTextAudio = response?.messageAudioUrl || ''

    const newMessage = createNewMessage(uuidv4(), inputTextDetected, inputTextAudio, 1)

    getLLMReply(newMessage)
  }

  //API call to chatbot
  const getLLMReply = async (userMessage) => {
    try {
      const latestMessages = [userMessage,...getLatestMessages(3)]
      
      const response = await postUserMessage(latestMessages, user.username)
      const text = response?.text || 'Hello'
      const romanization = response?.romanization || ''
      const translation = response?.translation || ''
      const audioUrl = response?.audioUrl || ''
      

      createNewMessage(uuidv4(), text, audioUrl, 0, translation, romanization)
      playAudio(audioUrl)
    } catch (error) {
      console.error(error)
    }
  }

  const getLatestMessages = (count) => {
    const toTake = Math.min(count, messages.length)
    return messages.slice(0, toTake)
  }

  const renderMessageAudio = (props) => {
    const { currentMessage } = props;
    return (
      <TouchableOpacity onPress={() => playAudio(currentMessage.audio)}>
        <View style={styles.audioMessageContainer}>
          <Text style={styles.audioMessageText}>🔊 Play Audio</Text>
        </View>
      </TouchableOpacity>
    )
  }

  const renderSend = (props) => {
    props = {
      ...props, alwaysShowSend: true
    }
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <TouchableOpacity
            onPressIn={onPressButton}
            onPressOut={onReleaseButton}
          >
            <Icon name="mic" size={32} color="#000" />
          </TouchableOpacity>
        </View>
      </Send>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <GiftedChat
        messages={messages}
        // onSend={messages => onSend(messages)}
        showUserAvatar={true}
        user={{
          _id: 1,
        }}
        renderAvatar={(props) => <CustomAvatar {...props}/>}
        renderSend={renderSend}
        renderMessageAudio={renderMessageAudio}
        renderBubble={(props) => <CustomBubble {...props} />}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'white',
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 5,
  },
  composerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  micButton: {
    marginLeft: 10,
  },
});

export default Chat;