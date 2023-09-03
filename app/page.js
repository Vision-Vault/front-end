// import Image from 'next/image'
// import styles from './page.module.css'
import Header from '@/components/header';
import Footer from '../components/footer'
import PostPage from './posts/page';
import Hhead from '@/components/pagehead';

export default function Home() {
  return (
    <>
      <Hhead data='start page' />
      <Header />

      <PostPage />

      <Footer />
    </>
  );
}
