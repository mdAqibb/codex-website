import React from 'react';

const Navbar = () => {
    return (
        <div id="navthing">
            <div className="logo">
                <img src="/assets/codex_dark_theme.png" height="30" alt="CodeX Logo" />
            </div>
            <ul className="nav-links">
                <li><a href="#"><span className="opening_flower">{`{`}</span> HOME <span className="closing_flower">{`}`}</span></a></li>
                <li><a href="#about"><span className="opening_flower">{`{`}</span> ABOUT <span className="closing_flower">{`}`}</span></a></li>
                <li><a href="#team"><span className="opening_flower">{`{`}</span> TEAM <span className="closing_flower">{`}`}</span></a></li>
                <li><a href="#events"><span className="opening_flower">{`{`}</span> EVENTS <span className="closing_flower">{`}`}</span></a></li>
                <li><a href="#projects"><span className="opening_flower">{`{`}</span> PROJECTS <span className="closing_flower">{`}`}</span></a></li>
            </ul>
        </div>
    );
};

export default Navbar;
