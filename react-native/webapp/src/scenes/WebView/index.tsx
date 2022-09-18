import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Animated,
  Keyboard,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import WebView from 'react-native-webview';

const WebViewPage = () => {
  const inset = useSafeAreaInsets();
  const urlOffset = React.useRef(new Animated.Value(0)).current;
  const [isEdit, setIsEdit] = React.useState(false);
  const [pageTitle, setPageTitle] = React.useState('');
  const [currentUrl, setCurrentUrl] = React.useState('https://www.google.com');
  const [targetUrl, setTargetUrl] = React.useState('https://www.google.com');
  const [history, setHistory] = React.useState<string[]>([]);
  const webViewRef = React.useRef<WebView>(null);

  const loadHistory = React.useCallback(async () => {
    const history = await AsyncStorage.getItem('history');
    if (history) {
      setHistory(JSON.parse(history));
    }
  }, []);

  React.useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  const handleSearch = React.useCallback(() => {
    setCurrentUrl(targetUrl);
    // 최근 검색어 20개 까지
    const uniqueHistory = new Set([targetUrl, ...history]);
    const newHistory = [...uniqueHistory].splice(0, 20);
    AsyncStorage.setItem('history', JSON.stringify(newHistory)).then(() => {
      setIsEdit(false);
      setHistory(newHistory);
    });
  }, [targetUrl, history]);

  const moveTo = React.useCallback((url: string) => {
    return () => {
      setTargetUrl(url);
      setCurrentUrl(url);
      setIsEdit(false);
    };
  }, []);

  const urlHeaderHeight = urlOffset.interpolate({
    inputRange: [0, 200],
    outputRange: [inset.top + 20, 0],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.header, { paddingTop: inset.top, height: urlHeaderHeight }]}>
        <TouchableOpacity style={styles.urlWrapper} onPress={() => setIsEdit(true)} activeOpacity={0.8}>
          <Text style={styles.url}>{pageTitle}</Text>
        </TouchableOpacity>
      </Animated.View>
      <WebView
        source={{ uri: currentUrl }}
        style={{ flex: 1 }}
        ref={webViewRef}
        onNavigationStateChange={event => {
          const { url, title } = event;
          setPageTitle(title);
          setCurrentUrl(url);
          setTargetUrl(url);
        }}
        onScroll={syntheticEvent => {
          const { contentOffset } = syntheticEvent.nativeEvent;
          const { y } = contentOffset;
          urlOffset.setValue(y);
        }}
      />
      <Modal visible={isEdit} animationType={'slide'} onRequestClose={() => setIsEdit(false)}>
        <View style={styles.container}>
          <View style={[styles.modalHeader, { paddingTop: inset.top }]}>
            <TextInput
              style={styles.input}
              value={targetUrl}
              onChangeText={setTargetUrl}
              returnKeyType="search"
              autoFocus
              onSubmitEditing={handleSearch}
              autoCapitalize={'none'}
            />
            <TouchableOpacity
              onPress={() => {
                setIsEdit(false);
                Keyboard.dismiss();
              }}
            >
              <Text style={styles.cancel}>취소</Text>
            </TouchableOpacity>
          </View>
          <ScrollView keyboardShouldPersistTaps={'handled'}>
            {history.map((url, idx) => (
              <TouchableOpacity key={idx} activeOpacity={0.8} style={styles.historyItem} onPress={moveTo(url)}>
                <Text>{url}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default WebViewPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'white',
  },
  urlWrapper: {
    width: '100%',
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  url: {
    fontSize: 11,
    marginBottom: 6,
  },
  inputHeader: {
    paddingHorizontal: 20,
    marginBottom: 6,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    height: 40,
    borderRadius: 40,
  },
  cancel: {
    color: 'blue',
    marginRight: 10,
  },
  historyItem: {
    marginHorizontal: 20,
    paddingVertical: 10,
    borderBottomColor: '#CCCCCC',
    borderBottomWidth: 1,
  },
});
