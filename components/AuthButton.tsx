import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

type AuthButtonProps = {
  iconName: string;
  iconType: "ionicons" | "material-community";
  label: string;
  onPress: () => void;
  buttonStyle?: object;
  textStyle?: object;
  iconColor?: string;
};
export default function AuthButton({ label, iconName, iconType, onPress, buttonStyle, textStyle, iconColor= '#2D3748', }: AuthButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]}
      onPress={onPress}
    >
      {iconType === 'ionicons' ? (
        <Ionicons name={iconName} size={24} color={iconColor} />
      ) : (
        <MaterialCommunityIcons name={iconName} size={24} color={iconColor} />
      )}
      <Text style={[styles.buttonText, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    width: '100%',
  },
  buttonText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
  },
});