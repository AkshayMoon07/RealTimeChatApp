import * as React from 'react';
import { StyleSheet } from 'react-native';
import ChatListItem from '../chatListItem';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <ChatListItem chatRoom ={{lastMessage :{content : "Changed?"}}}/>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
