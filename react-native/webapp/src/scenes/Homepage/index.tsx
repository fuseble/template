import CSafeAreaView from '@components/CSafeAreaView';
import { useNetInfo } from '@react-native-community/netinfo';
import { useNavigation } from '@react-navigation/native';
import { GenericNavigationProps } from '@routes/types';
import { Button, Icon, ScrollView, Text } from 'native-base';
import React, { FC, memo, useLayoutEffect } from 'react';
import { Alert, Image } from 'react-native';

const Home: FC = () => {
  const navigation = useNavigation<GenericNavigationProps>();
  const { setOptions } = useNavigation<GenericNavigationProps>();
  const netInfo = useNetInfo();

  useLayoutEffect(() => {
    setOptions({
      headerLeft: () => <></>,
      headerTitle: () => (
        <Image source={require('@assets/images/logo.png')} resizeMode={'contain'} style={{ width: 100 }} />
      ),
    });
  }, [setOptions]);

  const onMove = React.useCallback(() => {
    if (!netInfo.isInternetReachable) {
      console.log('Network Is Not Connected', { netInfo });
      Alert.alert('No internet connection');
    } else {
      console.log('Network Is Connected', { netInfo });
      navigation.navigate('Browser');
    }
  }, [netInfo, navigation]);

  return (
    <CSafeAreaView>
      <ScrollView
        backgroundColor="pageBackground"
        _contentContainerStyle={{
          alignItems: 'center',
          flex: 1,
          flexGrow: 1,
          justifyContent: 'center',
          padding: '15px',
        }}
      >
        <Text
          color="WHITE"
          fontFamily="body"
          fontWeight={700}
          fontStyle="normal"
          fontSize="3xl"
          paddingBottom="20px"
          textAlign="center"
        >
          Fuseble WebApp
        </Text>

        <Button
          alignSelf="center"
          backgroundColor="TRANSPARENT"
          borderColor="ALIZARIN"
          borderWidth={1}
          marginTop={15}
          onPress={onMove}
        >
          <Text color="WHITE" fontFamily="body" fontStyle="normal">
            Test
          </Text>
        </Button>
      </ScrollView>
    </CSafeAreaView>
  );
};

export default memo(Home);
