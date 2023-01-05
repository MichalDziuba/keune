import styles from './App.module.scss';

import { Header } from './components/header/header';
import { O1 } from './components/o1_section/o1';
import { O2 } from './components/o2_section/o2';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <O1 />
      {/* <O2/> */}
    </div>
  );
}

export default App;
