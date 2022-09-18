import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Homepage from '@scenes/Homepage';
import WebViewPage from '@scenes/WebView';
import * as React from 'react';
import { FC } from 'react';

const MainStack = createStackNavigator();

export const MainStackScreen: FC = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={Homepage}
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
      <MainStack.Screen
        name="Browser"
        component={WebViewPage}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};
