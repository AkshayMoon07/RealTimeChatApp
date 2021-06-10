import * as React from 'react';
import { StyleSheet,FlatList } from 'react-native';
import ChatListItem from '../chatListItem';
import { Text, View } from '../components/Themed';
import ChatRooms from '../data/ChatRooms';
import chatRoom from '../data/ChatRooms'
  
export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <FlatList style={{width:'100%'}}
      data={chatRoom}
      renderItem={({item}) =><ChatListItem chatRoom ={item} />}
      keyExtractor={(item) => item.id}
      />
  
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
