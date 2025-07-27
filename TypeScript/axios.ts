// import axios, { AxiosResponse } from "axios";

// interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const fetchData = async () => {
//   try {
//     const response: AxiosResponse<Todo> = await axios.get(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );
//     console.log("Todo", response.data);
//   } catch (error: any) {
//     if (axios.isAxiosError(error)) {
//       console.log("Axios Error", error.message);

//       if (error.response) {
//         console.log("Status", error.response.status);
//         console.log("Data", error.response.data);
//       }
//     } else {
//       console.log("Error", error.message);
//     }
//   }
// };

// fetchData();

// interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/todos/1"
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data: Todo = await response.json();

//     console.log("Todo:", data);
//   } catch (error: unknown) {
//     if (error instanceof Error) {
//       console.error("Fetch Error:", error.message);
//     } else {
//       console.error("Unexpected Error:", error);
//     }
//   }
// };

// fetchData();

import axios from "axios";

axios.get("https://api.example.com/data").then((response) => {
  console.log(response.data);
});
