import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png'
import styles from './main-header.module.css';

export function MainHeader() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logo}>
                <Image alt="m&j in Malaga logo"
                src={logoImg.src}
                width={200}
                height={200}/>
            <h1 className={styles.heading}>MJ&apos;s Kitchen</h1>
            </Link>
        </header>
    )
}

export default MainHeader;
