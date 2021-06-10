import moment from 'moment';
import React from 'react'
import { View,Text,Image } from 'react-native'
import { ChatRoom } from '../types';
import styles from './style';

export type ChatListItemProp ={
    chatRoom:ChatRoom
}

const ChatListItem = (props :ChatListItemProp) =>{
    const {chatRoom} = props;
    const user=chatRoom.user[1];

    return(
        <View style={styles.container}>
            <View style={styles.leftContainer}>
            <Image source={{uri:user.imageuri}} style={styles.avatar} />
            <View style={styles.midContainer}>
            <Text style={styles.username}>{user.name}</Text>
            <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
            </View>
            </View>
           
           
            <Text style={styles.time}>
               {moment(chatRoom.lastMessage.createdAt).format("DD/MM/YYYY")}
            </Text>
        </View>
    )
}

export default ChatListItem;