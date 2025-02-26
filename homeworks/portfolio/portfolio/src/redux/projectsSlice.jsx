import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    {
      id: 1,
      title: "VirtualAssist",
      description: "Интеллектуальный ассистент на React",
      github: "https://github.com/example/virtualassist",
    },
    {
      id: 2,
      title: "Canvas LMS Monitor",
      description: "Система мониторинга LMS Canvas",
      github: "https://github.com/example/canvas-monitor",
    },
  ],
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
});

export default projectsSlice.reducer;
