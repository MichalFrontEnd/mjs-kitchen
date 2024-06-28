import Link from 'next/link';
import Image from 'next/image';
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css';

export function MainHeader() {
    return (
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
                <Image alt="m&j in Malaga logo"
                src={logoImg}
                width={200}
                height={200}/>
            <h1 className={classes.heading}>MJ&apos;s Kitchen</h1>
            </Link>
        </header>
    )
}

export default MainHeader;
