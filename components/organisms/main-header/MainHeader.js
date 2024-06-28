import logoImg from '@/asset/logo.png'
import {Link, Image} from "next"
export default function MainHeader() {

    return (
        <header>
            <Link href="/">
                <Image alt="m&j in Malaga logo"
                src={logoImg}/>
            </Link>
            <h1>MJ&aposs Kitchen</h1>
        </header>
    )
}
