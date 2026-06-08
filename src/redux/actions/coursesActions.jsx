import axiosInstance from "../../api/axiosinstance";

export const getCourseData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_COURSE_DATA_REQUEST" });
      const response = await axiosInstance.get("http://localhost:3000/courses");
      dispatch({
        type: "GET_COURSE_DATA_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      console.error(error.message);
      dispatch({
        type: "GET_COURSE_DATA_FAILED",
        payload: error,
      });
    }
  };
};

export const postCourseData = (courseData) => {
  return async (dispatch) => {
    try {
      dispatch({ type: "GET_COURSE_DATA_REQUEST" });

      const response = await axiosInstance.post(
        "http://localhost:3000/courses",
        courseData,
      );

      dispatch({
        type: "POST_COURSE_DATA_SUCCESS",
        payload: response.data,
      });
    } catch (error) {
      console.error(error.message);

      dispatch({
        type: "GET_COURSE_DATA_FAILED",
        payload: error,
      });
    }
  };
};

export const updatedCourseData = (courseData) => {
  return async (dispatch) => {
    try {
      const id = courseData.id;

      const response = await axiosInstance.put(
        `http://localhost:3000/courses/${id}`,
        courseData,
      );

      dispatch({
        type: "edit-course",
        payload: response.data,
      });
    } catch (error) {
      console.error(error.message);

      dispatch({
        type: "GET_COURSE_DATA_FAILED",
        payload: error,
      });
    }
  };
};

export const deleteCourseData = (id) => {
  return async (dispatch) => {
    try {
      await axiosInstance.delete(`http://localhost:3000/courses/${id}`);

      dispatch({
        type: "delete-course",
        payload: id,
      });
    } catch (error) {
      console.error(error.message);

      dispatch({
        type: "GET_COURSE_DATA_FAILED",
        payload: error,
      });
    }
  };
};
