/* eslint-disable no-unused-vars */
import MobileMenu from './app/modules/MobileMenu';
import RevealOnScroll from './app/modules/RevealOnScroll';
import StickyHeader from './app/modules/StickyHeader';
import Modal from './app/modules/Modal'
import './scss/styles.scss';

const mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), '85%');
new RevealOnScroll(document.querySelectorAll('.experience'), '60%');
const stickyHeader = new StickyHeader();
const modal = new Modal();