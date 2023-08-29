// import Image from 'next/image'
// import styles from './page.module.css'
import Header from '@/components/header';
import Footer from '../components/footer'
import PostPage from './posts/page';


export default function Home() {
  return (
    <>
    <Header/>

    <PostPage/>
      <Footer />
    </>
  );
}
