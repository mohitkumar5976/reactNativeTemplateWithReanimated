import React from 'react';
import { View, Text, Button } from 'react-native';
import { Appbar } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Details" />
      </Appbar.Header>

      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-xl font-bold text-green-500">Details Screen</Text>
      </View>
    </>
  );
};

export default DetailsScreen;
