
import axios from "axios";

const API_BASE_URL = "https://your-api-endpoint.com"; 

export const addCourse = async (course: {
  name: string;
  description: string;
  hours: string;
  level: string;
  link: string;
}) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/courses`, course);
    return response.data;
  } catch (error) {
    console.error("Error adding course:", error);
    throw error;
  }
};

export const getCourses = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/courses`);
    return response.data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    throw error;
  }
};