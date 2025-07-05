## 📦 React Native CLI – Essential Packages

This project is built using **React Native CLI**. Below are the core dependencies, development tools, and helpful automation for efficient development and deployment.

---

### ✅ Production Dependencies

Install these packages using:

```bash
npm install
```

| Package                                     | Purpose                                          |
| ------------------------------------------- | ------------------------------------------------ |
| `@react-navigation/native`                  | Navigation (core)                                |
| `@react-navigation/stack`                   | Stack-based navigation                           |
| `react-native-screens`                      | Optimized navigation screen handling             |
| `react-native-safe-area-context`            | Safe area handling for notched devices           |
| `react-native-gesture-handler`              | Gesture support for navigation and UI            |
| `react-native-reanimated`                   | Smooth animations and gesture-based interactions |
| `nativewind`                                | Tailwind CSS styling for React Native            |
| `react-native-vector-icons`                 | Icon support (FontAwesome, Material, etc.)       |
| `react-native-paper`                        | Material design components                       |
| `@react-native-async-storage/async-storage` | Local key-value storage                          |
| `axios`                                     | HTTP client for API requests                     |
| `react-native-config`                       | Environment variables management                 |
| `react-native-device-info`                  | Device and OS information                        |
| `react-native-permissions`                  | Handle native permission requests                |
| `react-native-fs`                           | File system access                               |
| `react-native-mmkv` (optional)              | High-performance local storage                   |
| `realm` (optional)                          | Local offline database                           |

---

### 🛠️ Development Dependencies

Install these packages using:

```bash
npm install --save-dev
```

| Package                                                              | Purpose                   |
| -------------------------------------------------------------------- | ------------------------- |
| `typescript`, `@types/react`, `@types/react-native`                  | TypeScript support        |
| `tailwindcss`                                                        | Required for NativeWind   |
| `prettier`, `prettier-plugin-tailwindcss`                            | Code formatting           |
| `babel-plugin-react-native-reanimated`                               | Required for Reanimated 2 |
| `@testing-library/react-native`, `jest`, `babel-jest`, `@types/jest` | Testing tools             |
| `eslint`, `eslint-config-prettier`, `eslint-plugin-react`            | Linting & code quality    |

---

### ⚙️ Additional Setup

#### 🔧 Babel Configuration (`babel.config.js`)

```js
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};
```

#### 🧵 Tailwind Initialization

```bash
npx tailwindcss init
```

#### 🍎 iOS Setup

```bash
cd ios && pod install
```

---

### 🚀 Offline Debug APK Installation (Without Metro)

To bundle your JavaScript and install the debug APK **without running the Metro server**, create the following PowerShell script:

#### 📄 `android-offline.ps1`

```powershell

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


```

> Make sure the `android/app/src/main/assets/` folder exists. If not, create it manually.

---

#### ✅ One-Time Script Execution Setup (Windows)

Allow PowerShell to execute scripts:

```powershell
Set-ExecutionPolicy RemoteSigned
```

> Run this once using **PowerShell as Administrator**.

---

#### 🔄 Optional NPM Script

You can add this command to `package.json` for quick access:

```json
"scripts": {
  "android:offline": "powershell -ExecutionPolicy Bypass -File ./android-offline.ps1"
}
```

Now just run:

```bash
npm run android:offline
```

---

### 📁 Notes

* This setup assumes you're using **React Native CLI**, not Expo.
* After installing any native dependency, you must rebuild the app:

  * `npx react-native run-android` or `npx react-native run-ios`
* This offline setup is perfect for testing builds **without Metro** or demonstrating apps without a dev server.

---

Happy Coding! 💻📱🚀
