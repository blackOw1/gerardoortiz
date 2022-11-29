import styles from './windows.module.css';
import CodeEditor from './code-editor';
import Browser from './browser';

const Windows = () => {
  return (
    <div className={styles.aboutWindows}>
      <CodeEditor />
      <Browser />
    </div>
  );
};

export default Windows;
