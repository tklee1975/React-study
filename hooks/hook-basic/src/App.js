import './App.css';
import BasicCounter from './components/BasicCounter';
import ClickButton from './components/ClickButton';
import LastRenderTime from './components/LastRenderTime';
import TestStateCounter from './components/TestStateCounter';
import ColorCounter from './components/ColorCounter';
import SecondTimer from './components/SecondTimer';
import PlacerHolderTodo from './components/PlacerHolderTodo';
import TodoCard  from './components/TodoCard';  
import TodoList from './components/TodoList';
import AnotherTimer  from './components/AnotherTimer';

function App() {
  return (
    <div className="App">
      <h1>React Hook</h1>
      <hr/>
      <BasicCounter />
      <ClickButton />
      <LastRenderTime target="renderTime" />
      <TestStateCounter />
      <ColorCounter />
      <SecondTimer />
      <AnotherTimer/>
      <div style={{display:'flex', gap: '5px'}}>
      <PlacerHolderTodo todoID={1} />
      <PlacerHolderTodo todoID={2} />
      </div>
      <hr/>
      <TodoCard />
      <TodoCard />
      <TodoCard task={{title:'Title', description:'Description'}}/>
      <hr/>
      <TodoList />
    </div>
  );
}

export default App;
