import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';
import Liens from './components/Liens';
import { BrowserRouter as Router } from 'react-router-dom';


function App(props) {
  return (

    <Router>
        <Liens />
    </Router>


    // <div className="todoapp stack-large">
    //   <h1>TodoMatic</h1>
    //   <form>
    //     <h2 className="label-wrapper">
    //       <label htmlFor="new-todo-input" className="label__lg">
    //         Qu'y a-t-il à faire&nbsp;?
    //       </label>
    //     </h2>
    //     <input
    //       type="text"
    //       id="new-todo-input"
    //       className="input input__lg"
    //       name="text"
    //       autoComplete="off"
    //     />
    //     <button type="submit" className="btn btn__primary btn__lg">
    //       Ajouter
    //     </button>
    //   </form>
    //   <div className="filters btn-group stack-exception">
    //     <button type="button" className="btn toggle-btn" aria-pressed="true">
    //       <span className="visually-hidden">Montrer </span>
    //       <span>Toutes</span>
    //       <span className="visually-hidden"> les tâches</span>
    //     </button>
    //     <button type="button" className="btn toggle-btn" aria-pressed="false">
    //       <span className="visually-hidden">Montrer </span>
    //       <span className="visually-hidden">les tâches </span>
    //       <span>Actives</span>
    //     </button>
    //     <button type="button" className="btn toggle-btn" aria-pressed="false">
    //       <span className="visually-hidden">Montrer </span>
    //       <span className="visually-hidden">les tâches </span>
    //       <span>Terminées</span>
    //     </button>
    //   </div>
    //   <h2 id="list-heading">3 tâches restantes</h2>
    //   <ul
    //     role="list"
    //     className="todo-list stack-large stack-exception"
    //     aria-labelledby="list-heading">
        
    //     <Todo name="Manger" completed={true} id="todo-0" />
    //     <Todo name="Dormir" completed={false} id="todo-1" />
    //     <Todo name="Recommencer" completed={false} id="todo-2" />

    //   </ul>
    // </div>
  );
}


export default App;
