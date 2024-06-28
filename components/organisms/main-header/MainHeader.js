import logoImg from '@/assets/logo.png'
import Link from 'next/link';
import Image from 'next/image';

export function MainHeader() {
    return (
        <header>
            <Link href="/">
                <Image alt="m&j in Malaga logo"
                src={logoImg}
                width={200}
                height={200}/>
            </Link>
            <h1>MJ&apos;s Kitchen</h1>
        </header>
    )
}

export default MainHeader;
