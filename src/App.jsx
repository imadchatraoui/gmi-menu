import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { MenuContent } from './YmhsContent';
import './ymhs.css';



function MenuFigure({children, className, reverse}) {
  const root = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({target:root, offset:['start end','end start']});
  const progress = useSpring(scrollYProgress,{stiffness:100,damping:28});
  const sign = reverse ? -1 : 1;
  const rotate = useTransform(progress,[0,1],reduced ? [0,0] : [-3 * sign,3 * sign]);
  const y = useTransform(progress,[0,1],reduced ? [0,0] : [12 * sign,-12 * sign]);
  return <div ref={root} className={className}><motion.div className="scroll-figure-motion" style={{rotate,y}}>{children}</motion.div></div>;
}

export default function App() {
  return <>
    <a className="menu-skip-link" href="#main">Vai al menu</a>
    <header className="ymhs-header"><div className="ymhs-header-inner ymhs-wrap">
      <a className="ymhs-brand" href="#menu" aria-label="GMI Torino, inizio del menu"><img src="/media/gmi-torino.png" alt="" width="449" height="556" /><span><strong>GMI TORINO</strong><small>GIOVANI MUSULMANI D’ITALIA</small></span></a>
      <nav aria-label="Navigazione principale"><a className="ymhs-nav-extra" href="#evento">L’evento</a><a className="ymhs-nav-extra" href="mailto:gmitorino@gmail.com">Contatti</a><a className="ymhs-nav-menu" href="#menu" aria-label="Menu dello Youth Mental Health Summit">Menu<span className="ymhs-wide-label">YMHS ↗</span></a></nav>
    </div></header>
    <MenuContent Figure={MenuFigure} />
    <footer className="ymhs-footer"><div className="ymhs-wrap ymhs-footer-inner"><p>© {new Date().getFullYear()} GMI Torino · La nostra città. La nostra comunità.</p><nav aria-label="Collegamenti nel footer"><a href="https://instagram.com/gmi.torino" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="/privacy.html">Privacy e informazioni</a><a href="mailto:gmitorino@gmail.com">Contatti</a></nav></div></footer>
  </>;
}
