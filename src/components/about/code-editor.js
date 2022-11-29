import styles from './code-editor.module.css';
import { Typography } from 'components/ui';

const CodeEditor = () => {
  return (
    <div className={styles.aboutCodeEditor}>
      <header className={styles.aboutCodeEditorHeader}>
        <Typography variant="p" className={styles.aboutCodeEditorHeading}>
          awesome-app.js
        </Typography>
      </header>
      <pre className={styles.codeContainer}>
        <code className={styles.code}>
          <span className={styles.codeLine}>
            <span className={styles.declaration}>import</span>
            <span>&nbsp;</span>
            <span className={styles.identifier}>express</span>
            <span>&nbsp;</span>
            <span className={styles.declaration}>from</span>
            <span>&nbsp;</span>
            <span className={styles.quote}>'</span>
            <span className={styles.string}>express</span>
            <span className={styles.quote}>'</span>
            <span className={styles.semicolon}>;</span>
          </span>
          <span className={styles.codeLine}>
            <span className={styles.variable}>const</span>
            <span>&nbsp;</span>
            <span className={styles.variableName}>app</span>
            <span>&nbsp;</span>
            <span className={styles.operator}>=</span>
            <span>&nbsp;</span>
            <span className={styles.functionName}>express</span>
            <span className={styles.parenthesis}>()</span>
            <span className={styles.semicolon}>;</span>
          </span>
          <span className={styles.codeLine}>
            <span className={styles.variable}>const</span>
            <span>&nbsp;</span>
            <span className={styles.variableName}>PORT</span>
            <span>&nbsp;</span>
            <span className={styles.operator}>=</span>
            <span>&nbsp;</span>
            <span className={styles.object}>process</span>
            <span className={styles.period}>.</span>
            <span className={styles.objectAlt}>env</span>
            <span className={styles.period}>.</span>
            <span className={styles.variableName}>PORT</span>
            <span>&nbsp;</span>
            <span className={styles.operator}>||</span>
            <span>&nbsp;</span>
            <span className={styles.number}>3003</span>
            <span className={styles.semicolon}>;</span>
          </span>
          <span className={styles.codeLine}>
            <span>&nbsp;</span>
          </span>
          <span className={styles.codeLine}>
            <span className={styles.object}>app</span>
            <span className={styles.period}>.</span>
            <span className={styles.functionName}>listen</span>
            <span className={styles.operator}>(</span>
            <span className={styles.variableName}>PORT</span>
            <span className={styles.operator}>)</span>
            <span className={styles.semicolon}>;</span>
          </span>
        </code>
      </pre>
    </div>
  );
};

export default CodeEditor;
