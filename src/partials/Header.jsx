export default function Header() {

    return (
        <header className="header">
            <div className="__logo">
                <a href="/">Firebits</a>
            </div>

            <nav className="__nav">
                <a href="/" className='navText'>Home</a>
                <a href="/about" className='navText'>About</a>
                <a href="/contact" className='navText'>Services</a>
                <a href="/projects" className='navText'>Projects</a>
                <a href="/reviews" className='navText'>Reviews</a>
                <a href="/blog" className='navText'>Blog</a>
                <a href="/contact" className='navText'>Contact</a>
            </nav>
        </header>
    );
}