import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layouts/Layout.jsx";
import Home from "./Components/Home.jsx";
import AddPost from "./Components/AddPost.jsx";
import UpdatePost from "./Components/UpdatePost.jsx";
import PostDetails from "./Components/PostDetails.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import PrivateRoute from "./Routes/PrivateRoute.jsx";
import AuthProvider from "./Contexts/AuthProvider.jsx";
import Myposts from "./Components/Myposts.jsx";
import AllPosts from "./Components/AllPosts.jsx";
import NotFound from "./Components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        loader: () => {
          const data = fetch("http://localhost:3000/posts");
          return data;
        },
        Component: Home,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "/addPost",
        element: (
          <PrivateRoute>
            <AddPost></AddPost>
          </PrivateRoute>
        ),
      },
      {
        path: "/myposts",
        element: (
          <PrivateRoute>
            <Myposts></Myposts>
          </PrivateRoute>
        ),
        errorElement: <NotFound></NotFound>,
      },
      {
        path: "/updatePost/:id",
        loader: ({ params }) => {
          const data = fetch(`http://localhost:3000/posts/${params.id}`);
          return data;
        },
        element: (
          <PrivateRoute>
            <UpdatePost></UpdatePost>
          </PrivateRoute>
        ),
      },
      {
        path: "/allposts",
        loader: () => {
          const data = fetch(`http://localhost:3000/posts`);
          return data;
        },
        element: <AllPosts></AllPosts>,
        errorElement: <NotFound></NotFound>,
      },
      {
        path: "/postDetails/:id",
        loader: ({ params }) => {
          const data = fetch(`http://localhost:3000/posts/${params.id}`);
          return data;
        },
        element: (
          <PrivateRoute>
            <PostDetails></PostDetails>
          </PrivateRoute>
        ),
        errorElement: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
