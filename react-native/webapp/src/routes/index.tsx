import { createStackNavigator } from '@react-navigation/stack';
import React, { FC } from 'react';
import { MainStackScreen } from './stacks/MainStack';

const RootStack = createStackNavigator();

export const RootStackScreen: FC = () => {
  return (
    <RootStack.Navigator screenOptions={{ presentation: 'modal' }}>
      <RootStack.Screen
        name="Main"
        component={MainStackScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
