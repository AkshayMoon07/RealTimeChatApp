/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainsTabNavigator from './MainsTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';
import Colors  from '../constants/Colors';
import { View } from '../components/Themed';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
       headerStyle: {
         backgroundColor:Colors.light.tint,
         shadowOpacity:0,
         elevation:0,
       } ,
       headerTintColor: Colors.light.background,
       headerTitleAlign:'left',
       headerTitleStyle:{
         fontWeight:'bold',
       }
       }}>
      <Stack.Screen name="Root"
       component={MainsTabNavigator} 
       options={{
         title:'WhatsApp',
         headerRight:() =>(
           <View style={{
             flexDirection:'row',
             width:60,
             justifyContent:'space-around',
             marginRight:10
           }}>
              <Octicons name="search" size={24} color={'black'} />
              <MaterialCommunityIcons name="dots-vertical" size={24} color={'black'} />
           </View>
         )
       }}
       />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
