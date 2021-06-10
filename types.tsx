/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Status: undefined;
  Chats: undefined;
  Calls: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type User ={
  id:String;
  name:String;
  imageuri:String;
}

export type Message ={
  id: String;
  content:String;
  createdAt:String;
}

export type ChatRoom ={
 id:String;
 user:[User];
 lastMessage:Message;

};
