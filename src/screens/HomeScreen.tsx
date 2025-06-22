import React from 'react';
import { View, Text, Button } from 'react-native';
import { Appbar, Menu } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Home" />
        <Menu
          visible={visible}
          onDismiss={() => setVisible(false)}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              color="black"
              onPress={() => setVisible(true)}
            />
          }
        >
          <Menu.Item onPress={() => {}} title="Option 1" />
          <Menu.Item onPress={() => {}} title="Option 2" />
        </Menu>
      </Appbar.Header>

      <View className="flex-1 items-center justify-center space-y-4 bg-white">
        <Text className="text-xl font-bold text-blue-500">
          Hello NativeWind!
        </Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </>
  );
};

export default HomeScreen;
