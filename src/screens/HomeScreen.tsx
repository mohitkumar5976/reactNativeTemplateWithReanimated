import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';
import { Appbar } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Camera, useCameraDevices } from 'react-native-vision-camera';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const [useFrontCamera, setUseFrontCamera] = useState(false);

  const devices = useCameraDevices();
  const backCamera = devices[0];
  const frontCamera = devices[1];
  const device = useFrontCamera ? frontCamera : backCamera;
  const cameraRef = useRef<Camera>(null);

  useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission();
      setHasPermission(status === 'granted');
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Camera permission is required.');
      }
    })();
  }, []);

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="Home" />
      </Appbar.Header>

      {!showCamera ? (
        <View className="flex-1 items-center justify-center space-y-4 bg-white">
          <Text className="text-xl font-bold text-blue-500">
            Hello NativeWind!
          </Text>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
          {hasPermission && (
            <>
              <Button
                title="Open Back Camera"
                onPress={() => {
                  setUseFrontCamera(false);
                  setShowCamera(true);
                }}
                color="#6200ee"
              />
              <Button
                title="Open Front Camera"
                onPress={() => {
                  setUseFrontCamera(true);
                  setShowCamera(true);
                }}
                color="#03dac5"
              />
            </>
          )}
        </View>
      ) : device ? (
        <View style={{ flex: 1 }}>
          <Camera
            ref={cameraRef}
            style={{ flex: 1 }}
            device={device}
            isActive={true}
          />
          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 40,
              alignSelf: 'center',
              backgroundColor: '#000',
              padding: 12,
              borderRadius: 25,
              opacity: 0.7,
            }}
            onPress={() => setUseFrontCamera(prev => !prev)}
          >
            <Text style={{ color: '#fff' }}>
              Switch to {useFrontCamera ? 'Back' : 'Front'} Camera
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View className="flex-1 items-center justify-center bg-white">
          <Text>Loading camera...</Text>
        </View>
      )}
    </>
  );
};

export default HomeScreen;
