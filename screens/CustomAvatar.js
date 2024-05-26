import React from 'react';
import { Image } from 'react-native';

const CustomAvatar = (props) => {
  const { currentMessage } = props
  const { user } = currentMessage
  const isBotMessage = user._id === 0

  const avatarSource = isBotMessage ? require('../assets/SpuddyAvatar.png') : require('../assets/UserAvatar.png')

  return (
    <Image
      source={avatarSource} // Replace with the actual path to your image
      style={{ width: 55, height: 55, borderRadius: 30 }}
    />
  );
};

export default CustomAvatar;