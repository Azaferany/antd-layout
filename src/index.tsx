import React from "react";
import { createRoot } from "react-dom/client";
import Demo from "./demo";
import { ConfigProvider } from "antd";

createRoot(document.getElementById("container")).render(
  <ConfigProvider direction="rtl">
    <Demo />
  </ConfigProvider>
);
