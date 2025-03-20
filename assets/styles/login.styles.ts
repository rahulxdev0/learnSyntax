import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      justifyContent: "space-between",
      alignItems: "center",
    },
    brandingContainer: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
      gap: 16,
    },
    subtitle: {
      fontSize: 16,
      color: "#2D3748",
      textAlign: "center",
      fontWeight: "300",
    },
    authContainer: {
      width: "100%",
      gap: 16,
      marginBottom: 40,
    },
    authButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      paddingVertical: 16,
      borderRadius: 16,
      gap: 12,
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 4,
    },
    googleButton: {
      backgroundColor: "white",
    },
    githubButton: {
      backgroundColor: "#4F46E5",
    },
    buttonText: {
      fontSize: 16,
      fontWeight: "600",
      color: "#1F2937",
    },
    githubButtonText: {
      color: "white",
    },
    footerText: {
      color: "#2D3748",
      textAlign: "center",
      fontSize: 12,
      marginBottom: 20,
      maxWidth: 300,
    },
  });

  export default styles;