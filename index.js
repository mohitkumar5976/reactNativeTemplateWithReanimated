/**
 * @format
 */
import 'react-native-gesture-handler';
import './global.css'
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';

AppRegistry.registerComponent(appName, () => App);
