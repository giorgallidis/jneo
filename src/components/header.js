import React, {useState} from "react"
import {FaTwitterSquare, FaYoutube, FaLinkedinIn} from 'react-icons/fa'
import Logo from './logo'

function Header(siteTitle, siteSubTitle)
{
const [isToggled, setToggled] = useState(false);
const toggleTrueFalse = () => setToggled(!isToggled);

return(  
<>
<div id="canvasWrapper">
<div id="canvas">
<div id="mobileNav" className={isToggled? 'menu-open' : ''} style={{height: isToggled ? '378px' : '0px'}}>
   <div className="wrapper">
      <nav className="main-nav mobile-nav">
         <ul>
            <li className="page-collection active-link">
               <a href="/">Home</a>
            </li>
         </ul>
      </nav>
      <nav className="main-nav mobile-nav">
         <ul>
            <li className="page-collection">
                <a href="/essays">Essays</a>
             </li>
             <li className="page-collection">
                <a href="/projects">Projects</a>
             </li>
             <li className="page-collection">
                <a href="/causes">Causes</a>
             </li>
             <li className="page-collection">
                <a href="/giveaways">Giveaways</a>
             </li>
             <li className=" external-link">
               <a href="https://jurgen.substack.com/">Newsletter</a>
            </li>
         </ul>
      </nav>
   </div>
</div>
<div id="headerWrapper">
   <header id="header">
      <div id="topNavMobile">
         <nav id="mobileMenuLink" className="main-nav clear">
            <ul>
               <li className="active-link" onClick={toggleTrueFalse}><a>Menu</a></li>
            </ul>
         </nav>
      </div>
      <div id="logo" data-content-field="site-title">
         <div className="site-title" data-shrink-original-size="18">
            <a href="/" aria-label="home">
              <Logo/>
            </a>
         </div>
         
      </div>
      <div id="topNav" data-content-field="navigation">
         <nav id="secondaryNavigation" className="main-nav dropdown-click desktop-nav">
            <ul>
               <li className="page-collection" style={{marginBottom: '0px'}}>
                  <a href="/essays">Essays</a>
               </li>
               <li className="page-collection" style={{marginBottom: '0px'}}>
                  <a href="/projects">Projects</a>
               </li>
               <li className="page-collection" style={{marginBottom: '0px'}}>
                  <a href="/causes">Causes</a>
               </li>
               <li className="page-collection" style={{marginBottom: '0px'}}>
                  <a href="/giveaways">Giveaways</a>
               </li>
            </ul>
         </nav>
         <nav id="mainNavigation" className="main-nav dropdown-click desktop-nav">
            <ul>
               <li className=" external-link">
                  <a href="https://jurgen.substack.com/"><b>Newsletter</b></a>
               </li>
            </ul>
         </nav>
      </div>
      <div className="sqs-layout sqs-grid-1 columns-1 empty" data-layout-label="Header Content" data-type="block-field" data-updated-on="1424578230900" id="headerBlocks">
         <div className="row sqs-row">
            <div className="col sqs-col-1 span-1"></div>
         </div>
      </div>
      <div id="footerBlocks-2" className="social-links sqs-svg-icon--list" data-content-field="connected-accounts">
         
         <a href="https://twitter.com/georgall" title="twitter" aria-label="twitter" target="_blank" rel="noreferrer" className="sqs-svg-icon--wrapper twitter" style={{color: 'black', borderRadius: '0px'}}>
            <div>
              <FaTwitterSquare />
            </div>
         </a>

         <a href="https://youtube.com/" title="youtube" aria-label="youtube" target="_blank" rel="noreferrer" className="sqs-svg-icon--wrapper youtube" style={{color: 'black', borderRadius: '0px'}}>
            <div>
              <FaYoutube />
            </div>
         </a>

         <a href="https://www.linkedin.com/in/george-georgallides/" title="linkedin" aria-label="linkedin" target="_blank" rel="noreferrer" className="sqs-svg-icon--wrapper linkedin" style={{color: 'black', borderRadius: '0px'}}>
            <div>
              <FaLinkedinIn />
            </div>
         </a>
        
      </div>
   </header>
</div>
</div>
</div>
</>
)
}


export default Header
