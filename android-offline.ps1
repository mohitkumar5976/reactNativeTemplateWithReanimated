
adb uninstall com.reactnativetemplate

mkdir android/app/src/main/assets -Force

npx react-native bundle `
  --platform android `
  --dev false `
  --entry-file index.js `
  --bundle-output android/app/src/main/assets/index.android.bundle `
  --assets-dest android/app/src/main/res

cd android
./gradlew assembleDebug
cd ..

adb install -r android/app/build/outputs/apk/debug/app-debug.apk
