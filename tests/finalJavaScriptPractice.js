// let eLearningPlatform = {
//   platformName: "CodeMaster",
//   version: "3.0.0",
//   apiStatus: 200,
//   data: {
//     instructor: {
//       instructorId: "I001",
//       name: "Dr. Rajesh Kumar",
//       specialization: "Full Stack Development",
//       isAvailable: true,
//       rating: 4.8
//     },
//     courses: [
//       { courseId: "C001", title: "JavaScript Basics", duration: 20, level: "beginner", isPublished: true, enrollments: 1500 },
//       { courseId: "C002", title: "React Advanced", duration: 35, level: "advanced", isPublished: true, enrollments: 800 },
//       { courseId: "C003", title: "Node.js", duration: 25, level: "intermediate", isPublished: false, enrollments: 0 },
//       { courseId: "C004", title: "Python basics", duration: 15, level: "beginner", isPublished: true, enrollments: 2000 },
//       { courseId: "C005", title: "DevOps", duration: 40, level: "advanced", isPublished: false, enrollments: 0 }
//     ],
//     platform: {
//       totalStudents: 5000,
//       totalRevenue: 2500000,
//       isActive: true,
//       subscription: {
//         plan: "Enterprise",
//         isValid: true,
//         expiryYear: 2027
//       }
//     }
//   }
// };

// //Task 1: Print platformName, version and apiStatus directly.
// console.log(eLearningPlatform.platformName);
// console.log(eLearningPlatform.version);
// console.log(eLearningPlatform.apiStatus);

// console.log("===========+" + "Task" + 1 + "done" + "==================");

// //Task 2: Print name, specialization and rating from instructor.
// console.log(eLearningPlatform.data.instructor.name);
// console.log(eLearningPlatform.data.instructor.specialization);
// console.log(eLearningPlatform.data.instructor.rating);

// console.log("===========+" + "Task" + 2 + "done" + "==================");

// //Task 3: Print plan, isValid and expiryYear from the deeply nested subscription object inside platform.
// console.log(eLearningPlatform.data.platform.subscription.plan);
// console.log(eLearningPlatform.data.platform.subscription.isValid);
// console.log(eLearningPlatform.data.platform.subscription.expiryYear);

// console.log("===========+" + "Task" + 3 + "done" + "==================");

// //Task 4: Write an if/else checking all four simultaneously:
// // apiStatus === 200
// // instructor.isAvailable === true
// // platform.isActive === true
// // platform.subscription.isValid === true

// // Print "Platform fully operational" if all true, otherwise "Platform issue detected".

// const jsonPath = eLearningPlatform.data;
// if (eLearningPlatform.apiStatus === 200 && jsonPath.instructor.isAvailable === true &&
//   jsonPath.platform.isActive === true && jsonPath.platform.subscription.isValid === true) {
//   console.log("Platform fully operational");
// } else {
//   console.log("Platform issue detected");
// }

// console.log("===========+" + "Task" + 4 + "done" + "==================");

// //Task 5: Use .filter() to get only published courses (isPublished === true), then .forEach() to print:

// let publishedCourses = eLearningPlatform.data.courses.filter((course) => {
//   return course.isPublished === true;
// });

// publishedCourses.forEach((coursesPublished) => {
//   //Published: C001 - JavaScript Basics - beginner
//   console.log("Published: " + coursesPublished.courseId + " - " + coursesPublished.title + " - " + coursesPublished.level);
// });

// console.log("===========+" + "Task" + 5 + "done" + "==================");

// //Task 6: Use .filter() to get only unpublished courses, then .map() to extract just title values and print:
// //["Node.js", "DevOps"]

// let unPublishedCourses = jsonPath.courses.filter((courses) => {
//   return courses.isPublished === false;
// })
// let finalUnPublishedCourses = unPublishedCourses.map((unPublished) => {
//   return unPublished.title;
// })
// console.log(finalUnPublishedCourses);

// console.log("===========+" + "Task" + 6 + "done" + "==================");


// //Task 7: Use .map() on the full courses array to transform every course into a string like:
// //"JavaScript Basics : beginner : 20hrs"
// // /Print the resulting array.

// let resultingArray = jsonPath.courses.map((code) => {
//   return `${code.title}  : ${code.level} : ${code.duration}hrs`
// });
// console.log(resultingArray);

// console.log("===========+" + "Task" + 7 + "done" + "==================");


// //Task 8: Write a function called getCourseLevel that takes a course object and returns:
// function getCourseLevel(course) {
//   if (course.level === "beginner") {
//     return `🔰 Beginner Course`;
//   } else if (course.level === "intermediate") {
//     return `⚡ Intermediate Course`;
//   } else if (course.level === "advanced") {
//     return `🚀 Advanced Course`;
//   } else {
//     return `Unknown`
//   }
// }

// jsonPath.courses.forEach((course) => {
//   console.log(course.title + " - " + getCourseLevel(course));
// });

// console.log("===========+" + "Task" + 8 + "done" + "==================");

// //Task 9: Use Object.keys() and .forEach() to print every key and value from the platform object (not nested — just top level):

// Object.keys(eLearningPlatform.data.platform).forEach((key) => {
//   console.log(key + " : " + eLearningPlatform.data.platform[key]);
// });

// console.log("===========+" + "Task" + 9 + "done" + "==================");

// //Task 10: Write an async function called getInstructorData that:

// async function getInstructorData() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users/3");
//     if (response.status === 200) {
//       let convertedResponse = JSON.parse(response);
//       console.log(convertedResponse.instructor.name);

//       let normalJSON = JSON.stringify(convertedResponse, null, 2);
//     }
//   } catch (error) {
//     console.log("ERROR: " + error.message);
//   } finally {
//     console.log("Instructor API test complete");
//   }
// }

// getInstructorData();