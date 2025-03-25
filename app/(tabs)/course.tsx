import { View, Text, Dimensions, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import styles from "../../assets/styles/course.styles";
import React from 'react'
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import CourseCard, {CourseCardProps} from '@/components/CourseCard';

const { width } = Dimensions.get('window');

const courses: CourseCardProps[] = [
  {
    id: '1',
    title: 'Laravel Fundamentals',
    instructor: 'Archana Kumari',
    duration: '6 Hours',
    difficulty: 'Beginner',
    image: require('../../assets/images/laraveli.webp'),
  },
  {
    id: '2',
    title: 'Laravel Fundamentals',
    instructor: 'Archana Kumari',
    duration: '8 Hours',
    difficulty: 'Intermediate',
    image: require('../../assets/images/mern.avif'),
  },
];

export default function course() {
  const renderCourseCard = ({ item } : any) => (
    <TouchableOpacity style={styles.cardContainer}>
      <Image
        source={item.image}
        style={styles.courseImage}
        contentFit="cover"
      />
      
      <View style={styles.cardContent}>
        <View style={styles.headerRow}>
          <Text style={styles.difficultyBadge}>{item.difficulty}</Text>
          <Ionicons name="heart-outline" size={20} color="#64748b" />
        </View>

        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseDescription}>{item.description}</Text>

        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Ionicons name="time" size={16} color="#6E3AFF" />
            <Text style={styles.metaText}>{item.duration}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="person" size={16} color="#6E3AFF" />
            <Text style={styles.metaText}>{item.instructor}</Text>
          </View>
          <View style={styles.metaItem}>
            <Ionicons name="book" size={16} color="#6E3AFF" />
            <Text style={styles.metaText}>{item.lessons} Lessons</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Featured Courses</Text>
      
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#64748b" />
        <Text style={styles.searchInput}>Search courses...</Text>
      </View>

      <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={renderCourseCard}
        keyExtractor={(item) => item.id}
        horizontal={true} // Set horizontal to true
        showsHorizontalScrollIndicator={false} // Hide the horizontal scroll indicator
        contentContainerStyle={styles.horizontalContainer} // Style for the container
      />
    </View>
    </View>
  )
}


