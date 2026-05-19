const initialCourseState = {
  courses: [],
};

const courseReducer = (courseState = initialCourseState, action) => {
  switch (action.type) {
    case "add-course":
      return {
        ...courseState,
        courses: [...courseState?.courses, action.payload],
      };

    case "edit-course":
      const { payload } = action;
      return {
        ...courseState,
        courses: courseState?.courses?.map((course) =>
          course.id === payload?.id ? payload : course,
        ),
      };

    case "delete-course":
      return {
        ...courseState,
        courses: courseState?.courses?.filter(
          (course) => course?.id !== action.payload,
        ),
      };

    default:
      return courseState;
  }
};

// const [courseState, dispatchCourse] = useReducer(
//   courseReducer,
//   initialCourseState,
// );

export default courseReducer;
