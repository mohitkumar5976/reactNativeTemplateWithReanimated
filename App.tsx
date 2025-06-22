import * as React from 'react';
import './global.css';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar, Menu, Provider } from 'react-native-paper';
import { theme } from './src/theme';

const App = () => {
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <>
      <Provider theme={theme}>
        {/* Header */}
        <Appbar.Header>
          <Appbar.Content title="My Header" />
          <View style={{ position: 'relative' }}>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={
                <Appbar.Action
                  icon="dots-vertical"
                  color="black"
                  onPress={openMenu}
                />
              }
            >
              <Menu.Item onPress={() => {}} title="Option 1" />
              <Menu.Item onPress={() => {}} title="Option 2" />
              <Menu.Item onPress={() => {}} title="Option 3" />
            </Menu>
          </View>
        </Appbar.Header>

        {/* Content */}
        <View className="flex-1 items-center justify-center bg-white">
          <Text className="text-xl font-bold text-blue-500">
            Hello NativeWind!
          </Text>
        </View>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
