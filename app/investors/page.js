// app/investors/page.js
import styles from "../../styles/investorsPage.module.css";
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import InvestorsPage from '../components/investors/InvestorsPage';

export default function Investors() {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <InvestorsPage />
      </main>
      <Footer />
    </div>
  );
}