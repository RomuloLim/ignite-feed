import { Header } from './Components/Header/Header';
import { Post } from './Components/Post/Post';
import { Sidebar } from './Components/Sidebar/Sidebar';

import styles from './App.module.css';

import './global.css';


function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar 
          name="Rômulo Lima"
          profission="Fullstack Developer"
          cover="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        />

        <main>
          <Post 
            author="Rômulo Lima"
            content="lorem ipsum dolor sit amet consectetur adipisicing elit."
          />   

          
          <Post 
            author="Nycolas Cruz"
            content="Post legal 😊."
          />
        </main>
      </div>
    </div>
  )
}

export default App
