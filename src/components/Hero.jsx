import React, { useState } from 'react';
import DecryptedText from './DecryptedText';

const Hero = ({ isLanding, onClick }) => {
    const [visibleIndex, setVisibleIndex] = useState(0);


    return (
        <div
            className="hero"
            onClick={onClick}
            style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: isLanding ? '100svh' : '85svh',
                height: 'auto',
                cursor: isLanding ? 'pointer' : 'default',
                transition: 'min-height 0.5s ease-in-out'
            }}
        >
            {/* <LaserFlow
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                color="#ed333b"
                wispDensity={0.6}
                flowSpeed={0.05}
                verticalSizing={0.5}
                horizontalSizing={0.4}
                fogIntensity={0.45}
                fogScale={0.6}
                wispSpeed={15}
                wispIntensity={5}
                flowStrength={0.25}
                decay={1.1}
                horizontalBeamOffset={0}
                verticalBeamOffset={-0.4}
            // color="#8b1319"
            /> */}
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
                <h1
                    className="CodeX"
                    style={{
                        opacity: isLanding ? 0 : 1,
                        maxHeight: isLanding ? '0' : '18rem',
                        margin: '0', // Remove default h1 margins completely
                        overflow: 'hidden',
                        transform: isLanding ? 'translateY(20px)' : 'translateY(0)',
                        transition: 'max-height 0.8s ease-out, opacity 0.8s ease-out, margin 0.8s ease-out, transform 0.8s ease-out',
                        pointerEvents: isLanding ? 'none' : 'auto'
                    }}
                >
                    Code<span style={{ color: '#d20000' }}>{'{x}'}</span>
                </h1>

                <div
                    className="programming-club"
                    style={{
                        opacity: isLanding ? 0 : 1,
                        maxHeight: isLanding ? '0' : '4rem',
                        overflow: 'hidden',
                        fontFamily: '"Bruno Ace", sans-serif',
                        fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                        color: '#d20000',
                        transform: isLanding ? 'translateY(20px)' : 'translateY(0)',
                        transition: 'max-height 0.8s ease-out 0.2s, opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s',
                        pointerEvents: 'none'
                    }}
                >
                    The Programming Club
                </div>

                <p
                    className={`hero-content ${!isLanding ? 'all-decoded' : ''}`}
                    style={{
                        marginTop: isLanding ? '0' : '1rem',
                        transition: 'margin-top 0.8s ease-out',
                        animation: 'fadeInSlow 2s ease-out forwards'
                    }}
                >
                    <DecryptedText
                        text="Code. "
                        speed={50}
                        maxIterations={5}
                        className="inline-block revealed-on-hover"
                        autoStart={true}
                        onScrambleComplete={() => setVisibleIndex(prev => Math.max(prev, 1))}
                    />
                    {visibleIndex >= 1 && (
                        <DecryptedText
                            text="Create. "
                            speed={50}
                            maxIterations={5}
                            className="inline-block revealed-on-hover"
                            autoStart={true}
                            onScrambleComplete={() => setVisibleIndex(prev => Math.max(prev, 2))}
                        />
                    )}
                    {visibleIndex >= 2 && (
                        <DecryptedText
                            text="Innovate. "
                            speed={50}
                            maxIterations={5}
                            className="inline-block revealed-on-hover"
                            autoStart={true}
                        />
                    )}
                </p>
                <div
                    className="hero-social-icons"
                    style={{
                        opacity: isLanding ? 0 : 1,
                        transform: isLanding ? 'translateY(20px)' : 'translateY(0)',
                        transition: 'opacity 0.8s ease-out 0.2s, transform 0.8s ease-out 0.2s', // Added delay for staggered effect
                        pointerEvents: isLanding ? 'none' : 'auto',
                        display: 'flex'
                    }}
                >
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-linkedin-square"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                </div>
            </div>
        </div>
    );
};

export default Hero;
