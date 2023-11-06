import Link from 'next/link'

const Navbar = () => {
    return (
        <ul className='ul'>
            <li className='li'><Link href="/">Home</Link></li>
            <li className='li'><Link href="/About">About</Link></li>
            <li className='li'><Link href="/Profil">Profil</Link></li>
        </ul>
    )
}

export default Navbar;