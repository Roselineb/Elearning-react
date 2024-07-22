import React, { useState } from 'react';
import './Quiz.css';

const quizQuestions = [
  { question: 'What is React?', options: ['Library', 'Framework', 'Language'], answer: 'Library' },
  { question: 'Which company developed React?', options: ['Google', 'Facebook', 'Microsoft'], answer: 'Facebook' },
  { question: 'What is the command to create a new React app?', options: ['npx create-react-app', 'npm start', 'npm install'], answer: 'npx create-react-app' },
  { question: 'What does JSX stand for?', options: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Extra'], answer: 'JavaScript XML' },
  { question: 'Which hook is used to handle state in a functional component?', options: ['useEffect', 'useState', 'useContext'], answer: 'useState' },
  { question: 'What is the purpose of useEffect hook?', options: ['To handle state', 'To handle side effects', 'To handle context'], answer: 'To handle side effects' },
  { question: 'What is the virtual DOM?', options: ['A copy of the actual DOM', 'A lightweight representation of the DOM', 'A different version of the DOM'], answer: 'A lightweight representation of the DOM' },
  { question: 'How do you pass data between components?', options: ['Props', 'State', 'Context'], answer: 'Props' },
  { question: 'Which method is used to render React elements?', options: ['render()', 'ReactDOM.render()', 'React.createElement()'], answer: 'ReactDOM.render()' },
  { question: 'What is a React component?', options: ['A JavaScript function', 'A JavaScript object', 'A JavaScript class'], answer: 'A JavaScript function' },
  { question: 'What are props in React?', options: ['Arguments passed into components', 'Methods in components', 'Hooks in components'], answer: 'Arguments passed into components' },
  { question: 'What is a state in React?', options: ['A built-in hook', 'A built-in object', 'A built-in method'], answer: 'A built-in object' },
  { question: 'How do you update the state in a functional component?', options: ['setState()', 'useState()', 'this.setState()'], answer: 'useState()' },
  { question: 'What is the difference between state and props?', options: ['State is internal and props are external', 'State is external and props are internal', 'No difference'], answer: 'State is internal and props are external' },
  { question: 'What does the useContext hook do?', options: ['Handles state', 'Handles side effects', 'Accesses context'], answer: 'Accesses context' },
  { question: 'What is the purpose of a key in React?', options: ['Identify unique elements', 'Style elements', 'Bind elements'], answer: 'Identify unique elements' },
  { question: 'What is React Router used for?', options: ['State management', 'Side effects', 'Navigation'], answer: 'Navigation' },
  { question: 'What is the useReducer hook used for?', options: ['Managing complex state', 'Handling side effects', 'Creating context'], answer: 'Managing complex state' },
  { question: 'What is a higher-order component (HOC)?', options: ['A component that returns another component', 'A hook', 'A method'], answer: 'A component that returns another component' },
  { question: 'What is the purpose of the useRef hook?', options: ['Manage state', 'Reference a DOM element', 'Handle side effects'], answer: 'Reference a DOM element' },
  { question: 'What is the useMemo hook used for?', options: ['Memoizing expensive calculations', 'Managing state', 'Handling context'], answer: 'Memoizing expensive calculations' },
  { question: 'What is the purpose of the useCallback hook?', options: ['Memoizing functions', 'Handling state', 'Handling side effects'], answer: 'Memoizing functions' },
  { question: 'How do you create a context in React?', options: ['React.createContext()', 'React.createState()', 'React.createHook()'], answer: 'React.createContext()' },
  { question: 'What is the purpose of the componentDidMount lifecycle method?', options: ['To execute code after the component is rendered', 'To execute code before the component is rendered', 'To update the state'], answer: 'To execute code after the component is rendered' },
  { question: 'What does SPA stand for?', options: ['Single Page Application', 'Simple Page Application', 'Structured Page Application'], answer: 'Single Page Application' },
  { question: 'What is React.Fragment used for?', options: ['To return multiple elements', 'To create a fragment', 'To handle state'], answer: 'To return multiple elements' },
  { question: 'What is the purpose of the componentDidUpdate lifecycle method?', options: ['To execute code after the component updates', 'To execute code before the component updates', 'To unmount the component'], answer: 'To execute code after the component updates' },
  { question: 'What does SSR stand for?', options: ['Server-Side Rendering', 'State-Side Rendering', 'Static-Side Rendering'], answer: 'Server-Side Rendering' },
  { question: 'What does CSR stand for?', options: ['Client-Side Rendering', 'Component-Side Rendering', 'Context-Side Rendering'], answer: 'Client-Side Rendering' },
  { question: 'What is a controlled component?', options: ['A component that controls its own state', 'A component controlled by a parent', 'A component controlled by React'], answer: 'A component controlled by a parent' },
  { question: 'What is an uncontrolled component?', options: ['A component that controls its own state', 'A component controlled by a parent', 'A component controlled by React'], answer: 'A component that controls its own state' },
  { question: 'How do you handle forms in React?', options: ['Using controlled components', 'Using uncontrolled components', 'Using both controlled and uncontrolled components'], answer: 'Using both controlled and uncontrolled components' },
  { question: 'What is the purpose of the useLayoutEffect hook?', options: ['To handle DOM updates before the browser repaints', 'To handle state updates', 'To manage context'], answer: 'To handle DOM updates before the browser repaints' },
  { question: 'What is JSX?', options: ['A syntax extension for JavaScript', 'A JavaScript library', 'A JavaScript framework'], answer: 'A syntax extension for JavaScript' },
  { question: 'What is the purpose of the render method in a class component?', options: ['To render the component', 'To update the state', 'To handle side effects'], answer: 'To render the component' },
  { question: 'What is the useImperativeHandle hook used for?', options: ['Customizing the instance value', 'Handling side effects', 'Managing state'], answer: 'Customizing the instance value' },
  { question: 'What is the purpose of the componentWillUnmount lifecycle method?', options: ['To execute code before the component is unmounted', 'To execute code after the component is unmounted', 'To update the state'], answer: 'To execute code before the component is unmounted' },
  { question: 'What is the purpose of React.memo?', options: ['To memoize a component', 'To handle state', 'To manage context'], answer: 'To memoize a component' },
  { question: 'How do you handle errors in React components?', options: ['Using error boundaries', 'Using try-catch', 'Using useEffect'], answer: 'Using error boundaries' },
  { question: 'What is the purpose of useDebugValue hook?', options: ['To display a label in React DevTools', 'To manage state', 'To handle side effects'], answer: 'To display a label in React DevTools' },
  { question: 'What is the difference between a controlled and uncontrolled component?', options: ['Controlled components rely on state, uncontrolled components rely on refs', 'No difference', 'Controlled components rely on props, uncontrolled components rely on state'], answer: 'Controlled components rely on state, uncontrolled components rely on refs' },
  { question: 'How do you optimize performance in a React application?', options: ['Using memoization techniques', 'Using more state', 'Using more props'], answer: 'Using memoization techniques' },
  { question: 'What is Redux?', options: ['A state management library', 'A React hook', 'A React component'], answer: 'A state management library' },
  { question: 'What is the purpose of the useEffect hook?', options: ['To handle side effects', 'To manage state', 'To manage context'], answer: 'To handle side effects' },
  { question: 'How do you create a class component in React?', options: ['Extending React.Component', 'Using React.createClass', 'Using a JavaScript function'], answer: 'Extending React.Component' },
  { question: 'What is the purpose of the constructor method in a class component?', options: ['To initialize state', 'To handle side effects', 'To create props'], answer: 'To initialize state' },
  { question: 'What is a pure component in React?', options: ['A component that renders the same output for the same props and state', 'A component without state', 'A component without props'], answer: 'A component that renders the same output for the same props and state' },
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === quizQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= quizQuestions.length) {
    return <p>Your score: {score}</p>;
  }

  return (
    <div className="quiz">
      <h2>{quizQuestions[currentQuestion].question}</h2>
      <ul>
        {quizQuestions[currentQuestion].options.map(option => (
          <li key={option} onClick={() => handleAnswer(option)} className="quiz-option">{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quiz;
