import React, { useState } from 'react';
import Sidebar from './components/Sidebar'
import Video from './components/Video'

function App() {
  const [modules, setModules] = useState([
    {
      id: 1,
      title: "Iniciando com React",
      lessons: [
        { id: 1, title: "Primeira aula" },
        { id: 2, title: "Segunda aula" }
      ],
    },
    {
      id: 2,
      title: "Aprendendo Redux",
      lessons: [
        { id: 3, title: "Terceira aula" },
        { id: 4, title: "Quarta aula" }
      ],
    },
  ]);

  const [activeLesson, setActiveLesson] = useState(null);

  return (
    <div className="App">
      <Video activeLesson={activeLesson} />
      <Sidebar modules={modules} />
    </div>
  );
}

export default App;
