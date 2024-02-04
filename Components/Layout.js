import Head from 'next/head';
import styles from '../styles/Layout.module.css'; // Import styles for layout

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Your Website Title</title>
        <meta name="description" content="Your website description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        {/* Header content goes here */}
        <h1>Header Content</h1>
      </header>

      <main className={styles.main}>
        {/* Main content (passed as children) */}
        {children}
      </main>

      <footer className={styles.footer}>
        {/* Footer content goes here */}
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default Layout;
