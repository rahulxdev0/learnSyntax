import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import styles from "../../assets/styles/login.styles";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Link, Redirect } from "expo-router";
import AuthButton from "@/components/AuthButton";

export default function Login() {
  const { width } = Dimensions.get("window");

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
      {/* Branding Section */}
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

      {/* Logo */}
      <Image
        source={require("../../assets/images/login.png")}
        style={{ width: width * 0.9, height: width * 0.9 }}
        contentFit="contain"
      />

      {/* Auth Buttons */}
      <View style={styles.authContainer}>
        <AuthButton
          iconName="logo-google"
          iconType="ionicons"
          label="Continue with Google"
          onPress={moveToHOme}
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

      {/* Footer */}
      <Text style={styles.footerText}>
        By continuing, you agree to our Terms of Service and Privacy Policy
      </Text>
    </LinearGradient>
  );
}
