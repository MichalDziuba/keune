import { useState } from 'react';
import styles from './App.module.scss';
import { Header } from './components/header/header';
import { O1 } from './components/o1_section/o1';
import { O2 } from './components/o2_section/o2';


const App = () => {

  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <div className={styles.App}>
      <Header isDark={darkTheme} />
   
      <O1 isDark={darkTheme} setIsDark={setDarkTheme} />
      <O2/>
    </div>
  );
}

export default App;
