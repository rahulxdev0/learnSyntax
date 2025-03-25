import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F8F9FF',
      paddingHorizontal: 16,
      paddingTop: 24,
    },
    headerTitle: {
      fontSize: 28,
      fontFamily: 'Inter_700Bold',
      color: '#2D3748',
      marginBottom: 24,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 12,
      paddingVertical: 14,
      paddingHorizontal: 16,
      marginBottom: 24,
      elevation: 2,
      shadowColor: '#2D3748',
      shadowOpacity: 0.1,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
    },
    searchInput: {
      fontFamily: 'Inter_500Medium',
      color: '#64748b',
      marginLeft: 12,
      fontSize: 16,
    },
    cardContainer: {
      backgroundColor: 'white',
      borderRadius: 16,
      marginBottom: 20,
      elevation: 2,
      shadowColor: '#2D3748',
      shadowOpacity: 0.1,
      shadowRadius: 8,
      shadowOffset: { width: 0, height: 2 },
    },
    courseImage: {
      width: '100%',
      height: 160,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    cardContent: {
      padding: 16,
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 12,
    },
    difficultyBadge: {
      backgroundColor: '#6E3AFF20',
      color: '#6E3AFF',
      fontSize: 12,
      fontFamily: 'Inter_700Bold',
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderRadius: 20,
    },
    courseTitle: {
      fontSize: 18,
      fontFamily: 'Inter_700Bold',
      color: '#2D3748',
      marginBottom: 4,
    },
    courseDescription: {
      fontSize: 14,
      fontFamily: 'Inter_500Medium',
      color: '#64748b',
      lineHeight: 20,
      marginBottom: 16,
    },
    metaContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 16,
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#E5E7EB',
    },
    metaItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    metaText: {
      fontSize: 12,
      fontFamily: 'Inter_500Medium',
      color: '#2D3748',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    progressContainer: {
      flex: 1,
      marginRight: 16,
    },
    progressLabel: {
      fontSize: 12,
      fontFamily: 'Inter_500Medium',
      color: '#64748b',
      marginBottom: 4,
    },
    progressBar: {
      height: 6,
      backgroundColor: '#E5E7EB',
      borderRadius: 3,
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      borderRadius: 3,
    },
    price: {
      fontSize: 16,
      fontFamily: 'Inter_700Bold',
      fontWeight: '700',
    },
    listContent: {
      paddingBottom: 40,
    },
    image: {
      width: "100%",
      height: 150, // Adjust height as needed
    },
    content: {
      padding: 12, // Adjust padding as needed
    },
    title: {
      fontSize: 16, // Adjust font size as needed
      fontWeight: "600",
      color: "#1E293B",
      marginBottom: 8,
    },
    description: {
      fontSize: 14, // Adjust font size as needed
      color: "#64748B",
      marginBottom: 12,
    },
    horizontalContainer: {
      paddingBottom: 16, // Add padding to avoid cutting off the last item
    },
    
  });

export default styles;