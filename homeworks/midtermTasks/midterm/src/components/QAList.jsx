import React from "react";

const QAList = () => {
  const answers = [
    { question: "Что такое компонент в React?", answer: "Функция, которая возвращает JSX." },
    { question: "Как правильно передавать props в компонент?", answer: "{props.name}." },
    { question: "Чем useState отличается от обычной переменной?", answer: "useState вызывает повторный рендер при изменении." },
    { question: "Как можно обновить состояние, используя useState?", answer: "setState(prev => prev + 1) или setState(value => value + 1)." },
    { question: "Когда вызывается useEffect(() => {...}, [])?", answer: "Только при монтировании." },
    { question: "Как передать props в функциональный компонент?", answer: "<Component name='React' />." },
    { question: "Что делает return () => {...} внутри useEffect?", answer: "Очищает эффект при размонтировании компонента." },
    { question: "Какие зависимости useEffect нужно передавать, если он должен срабатывать только при изменении count?", answer: "[count]." },
    { question: "Как можно остановить эффект useEffect, работающий с setInterval?", answer: "Использовать clearInterval в cleanup." },
    { question: "Можно ли обновлять props внутри дочернего компонента? Почему?", answer: "Нет, props передаются только сверху вниз." },
    { question: "В чем разница между useState и useRef?", answer: "useState вызывает ререндер, useRef — нет." },
    { question: "В каком порядке выполняются эффекты, если у нас два useEffect в одном компоненте?", answer: "В порядке объявления." },
    { question: "Какой метод используется для передачи состояния из дочернего компонента в родительский?", answer: "callback-функция." },
    { question: "Почему важно указывать зависимости в useEffect?", answer: "Чтобы предотвратить лишние вызовы эффекта." },
    { question: "Можно ли использовать useEffect без зависимостей? Что произойдет?", answer: "Да, эффект будет выполняться при каждом рендере." },
    { question: "Как можно передать обработчик клика (onClick) в дочерний компонент?", answer: "Через props: <Child onClick={handleClick} />." },
    { question: "Как правильно передать несколько props в компонент?", answer: "<Component title='React' subtitle='Hooks' />." },
    { question: "Какой хук React позволяет отслеживать изменения состояния?", answer: "useState." },
    { question: "Как правильно использовать useEffect для загрузки данных из API при монтировании компонента?", answer: "useEffect(() => { fetch(...); }, []);" },
    { question: "Какой основной принцип работы с useState при обновлении состояния на основе предыдущего значения?", answer: "Использовать функцию обратного вызова prevState => newState." },
  ];

  return (
    <div style={{ maxWidth: "600px", margin: "auto", fontFamily: "Arial, sans-serif" }}>
      <h1>Ответы на вопросы</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {answers.map((item, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <strong>{item.question}</strong>
            <p>{item.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QAList;
