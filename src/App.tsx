import styles from './App.module.scss';

import { Header } from './components/header/header';

function App() {
  return (
    <div className={styles.app}>
  <Header/>
    </div>
  );
}

export default App;
