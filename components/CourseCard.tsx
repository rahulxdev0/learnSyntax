import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import styles from "@/assets/styles/course.styles";
import { Ionicons } from "@expo/vector-icons"; // For icons

export type  Course = {
  id: string; // Course ID
  title: string; // Course title
  instructor?: string; // Instructor name
  duration: string; // Course duration
  difficulty: string; // Course difficulty
  progress: number; // Course progress
  image?: any; // Course image (use `ImageSourcePropType` for better type safety)
}

// CourseCardProps automatically includes `rating`
export type CourseCardProps = Course & {
  onPress?: () => void;
};


const CourseCard = ({
  id,
  title,
  instructor,
  duration,
  difficulty,
  progress,
  image,
  onPress,
  }: CourseCardProps) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* Course Image */}
      <Image source={image} style={styles.image} />

      {/* Course Content */}
      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>{title}</Text>

        {/* Instructor */}
        {/* <Text style={styles.instructor}>{instructor}</Text> */}

        {/* Metadata (Duration and Difficulty) */}
        <View style={styles.metaContainer}>
          <Text style={styles.metaText}>{duration}</Text>
          <Text style={styles.metaText}>{difficulty}</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${progress * 100}%` }]} />
        </View>
      </View>
    </TouchableOpacity>
    );
  };
  

export default CourseCard;