import "./style.css";
import { buildUI } from "./ui.js";
import { router } from "./router.js";
import { initDashboard } from "./components/Dashboard.js";
import { initCourses } from "./components/Courses.js";
import { initArticles } from "./components/Articles.js";
import { initNotFound } from "./components/Notfound.js";
import { initSignIn } from "./components/SignIn.js";

document.addEventListener("DOMContentLoaded", () => {
  const { main } = buildUI(document.body);

  router.init(
    [
      {
        path: "/",
        component: () => initCourses(),
      },
      {
        path: "/dashboard",
        component: () => initDashboard(),
      },
      {
        path: "/courses",
        component: () => initCourses(),
      },
      {
        path: "/articles",
        component: () => initArticles(),
      },
      {
        path: "*",
        component: () => initNotFound(),
      },
      {
        path: "/login",
        component: () => initSignIn(),
      },
    ],
    main,
  );
});
