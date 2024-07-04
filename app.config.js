import "dotenv/config";

export default {
  expo: {
    name: "K-store",
    slug: "expo-firebase",
    privacy: "public",
    platforms: ["android"],
    version: "1.2.0",
    orientation: "portrait",
    icon: "./assets/Logo50.png",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#FFF",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      package: "com.kstore",
      versionCode: 1,
    },
    extra: {
      eas: {
        projectId: "32d9b0b8-e347-4efa-a26c-b0f684a8099a",
      },
      apiKey: process.env.API_KEY,
      authDomain: process.env.AUTH_DOMAIN,
      projectId: process.env.PROJECT_ID,
      storageBucket: process.env.STORAGE_BUCKET,
      messagingSenderId: process.env.MESSAGING_SENDER_ID,
      appId: process.env.APP_ID,
      api: process.env.API,
    },
  },
};
