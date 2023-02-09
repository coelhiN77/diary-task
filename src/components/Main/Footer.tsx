import React from 'react';
import styles from "../styles/FooterS.module.css";
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <p>Created with <FaHeart className={styles.social_list} /> by <span className={styles.span2}>coelhiN</span><span className={styles.span}>Dev</span> - &copy; 2023
      </p>
    </footer>
  );
};

export default Footer;