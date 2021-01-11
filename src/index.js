/* eslint-disable no-unused-vars */
import LazyLoading from './app/modules/LazyLoading';
import MobileMenu from './app/modules/MobileMenu';
import RevealOnScroll from './app/modules/RevealOnScroll';
import StickyHeader from './app/modules/StickyHeader';
import Modal from './app/modules/Modal';
import './scss/styles.scss';

import smile from './assets/icons/smile.svg';
import skill from './assets/icons/skill.svg';
import html5 from './assets/icons/html5.svg';
import css3 from './assets/icons/css3.svg';
import sass from './assets/icons/sass.svg';
import js from './assets/icons/js.svg';
import react from './assets/icons/react.svg';
import files from './assets/icons/files.svg';
import php from './assets/icons/php.svg';
import database from './assets/icons/database.svg';
import wordpress from './assets/icons/wordpress.svg';
import sketch from './assets/icons/sketch.svg';
import webpack from './assets/icons/webpack.svg';
import nodejs from './assets/icons/nodejs.svg';
import gulp from './assets/icons/gulp.svg';
import grunt from './assets/icons/grunt.svg';
import pdf from './assets/icons/pdf.svg';
import email from './assets/icons/email.svg';
import linkedin from './assets/icons/linkedin.svg';
import github from './assets/icons/github.svg';
import jira from './assets/icons/jira.svg';
import docker from './assets/icons/docker.svg';
import linux from './assets/icons/linux.svg';

const lazyLoading = new LazyLoading();
const mobileMenu = new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), '85%');
new RevealOnScroll(document.querySelectorAll('.experience'), '65%');
const stickyHeader = new StickyHeader();
const modal = new Modal();