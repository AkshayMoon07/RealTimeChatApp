import React from 'react'
import { View,Text } from 'react-native'
import { ChatRoom } from '../types';

export type ChatListItemProp ={
    chatRoom:ChatRoom
}

const ChatListItem = (props :ChatListItemProp) =>{
    const {chatRoom} = props;
    return(
        <View>
            <Text>{chatRoom.lastMessage.content}</Text>
        </View>
    )
}

export default ChatListItem;