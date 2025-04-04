import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import styles from './Home.module.scss';

export function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <h1>Hello world!</h1>
      </div>
      <Welcome />
      <ColorSchemeToggle />
    </div>
  );
}
