import React, { useEffect, useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const desktopBreakpoint = 1024;

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= desktopBreakpoint && isOpen) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [desktopBreakpoint, isOpen]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    const handleToggle = () => setIsOpen((prev) => !prev);
    const handleLinkClick = () => setIsOpen(false);

    return (
        <nav id="navthing" aria-label="Primary">
            <div className="nav-header">
                <div className="logo">
                    <img
                        src="/assets/codex_dark_theme.png"
                        alt="CodeX Logo"
                        style={{ height: '2.25rem', width: 'auto' }}
                    />
                </div>
                <button
                    type="button"
                    className={`nav-toggle${isOpen ? ' open' : ''}`}
                    aria-label="Toggle navigation"
                    aria-expanded={isOpen}
                    aria-controls="site-navigation"
                    onClick={handleToggle}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
            <ul id="site-navigation" className={`nav-links${isOpen ? ' open' : ''}`}>
                <li><a href="#" onClick={handleLinkClick}><span className="opening_flower">{`{`}</span> HOME <span className="closing_flower">{`}`}</span></a></li>
                <li><a href="#about" onClick={handleLinkClick}><span className="opening_flower">{`{`}</span> ABOUT <span className="closing_flower">{`}`}</span></a></li>
                <li><a href="#events" onClick={handleLinkClick}><span className="opening_flower">{`{`}</span> EVENTS <span className="closing_flower">{`}`}</span></a></li>
                <li><a href="#team" onClick={handleLinkClick}><span className="opening_flower">{`{`}</span> TEAM <span className="closing_flower">{`}`}</span></a></li>
                <li><a href="#contact" onClick={handleLinkClick}><span className="opening_flower">{`{`}</span> CONTACT US <span className="closing_flower">{`}`}</span></a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
