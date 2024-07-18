import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "../app.jsx";

// 确保目标容器存在
const rootElement = document.getElementById("root");

if (rootElement) {
  // 使用 hydrateRoot 进行激活模式
  hydrateRoot(rootElement, 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
} else {
  console.error('Target container is not a DOM element.');
}
