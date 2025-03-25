import { View, Text, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import * as Google from 'expo-auth-session/providers/google';
import styles from "../../assets/styles/login.styles";
import { Link, Redirect, useRouter } from "expo-router";
import * as WebBrowser from 'expo-web-browser';
import AuthButton from "@/components/AuthButton";
import AsyncStorage from '@react-native-async-storage/async-storage';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const { width } = Dimensions.get("window");
  const router = useRouter();
  const [userInfo, setUserInfo] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: process.env.GOOGLE_WEB_CLIENT_ID,
  })

  useEffect(() => {
    const handleGoogleSignIn = async () => {
      if (response?.type === "success") {
        const { authentication } = response;

        // Fetch user info from Google
        const userInfoResponse = await fetch(
          "https://www.googleapis.com/userinfo/v2/me",
          {
            headers: { Authorization: `Bearer ${authentication.accessToken}` },
          }
        );
        const user = await userInfoResponse.json();

        // Store user data in AsyncStorage
        await AsyncStorage.setItem(
          "userData",
          JSON.stringify({
            id: user.id,
            email: user.email,
            name: user.name,
            picture: user.picture,
            token: authentication.accessToken,
          })
        );

        setUserInfo(user);
        setIsAuthenticated(true);
      }
    };

    handleGoogleSignIn();
  }, [response]);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const userData = await AsyncStorage.getItem("userData");
      if (userData) {
        setIsAuthenticated(true);
      }
    };
    checkLoginStatus();
  }, []);

  const handleGoogleLogin = async () => {
    await promptAsync();
  };

  if (isAuthenticated) {
    return <Redirect href="/(tabs)" />;
  }

  const moveToHOme = () => {
    return <Redirect href="/(tabs)/course" />;
  };
  return (
    <LinearGradient colors={["F8F9FF", "#F8F9FF"]} style={styles.container}>
      <View style={{ width: "90%" }}>
        <Link style={styles.skip} replace href="/(tabs)">
          skip
        </Link>
      </View>
      <View style={styles.brandingContainer}>
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ width: width * 0.75, height: 50 }}
          contentFit="contain"
        />
        <Text style={styles.subtitle}>
          Learn coding through interactive challenges
        </Text>
      </View>

      <Image
        source={require("../../assets/images/login.png")}
        style={{ width: width * 0.9, height: width * 0.9 }}
        contentFit="contain"
      />

      <View style={styles.authContainer}>
        <AuthButton
          iconName="logo-google"
          iconType="ionicons"
          label="Continue with Google"
          onPress={handleGoogleLogin}
          buttonStyle={styles.googleButton}
          textStyle={styles.buttonText}
        />
        <AuthButton
          iconName="github"
          iconType="material-community"
          label="Continue with GitHub"
          onPress={moveToHOme}
          buttonStyle={styles.githubButton}
          textStyle={[styles.buttonText, styles.githubButtonText]}
          iconColor="white"
        />
      </View>

      <Text style={styles.footerText}>
        By continuing, you agree to our Terms of Service and Privacy Policy
      </Text>
    </LinearGradient>
  );
}
