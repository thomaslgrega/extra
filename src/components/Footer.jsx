import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='second-band-background'>
        <div className='second-band'>
          <div className='second-band-left'>
            <div className='second-band-left-div'>
              <span className='left-div-title'>SOCIAL</span>
              <a href="https://www.linkedin.com/in/thomas-grega-4931711b6/" target="_blank" className="footer-personal-link">Connect on LinkedIn</a>
              <a href="https://angel.co/u/thomas-grega" target="_blank" className="footer-personal-link">Connect on AngelList</a>
              <a href="https://github.com/thomaslgrega/extra" target="_blank" className="footer-personal-link">GitHub Repo</a>
            </div>
            <div className='second-band-left-div'>
              <span className='left-div-title'>QUICK LINKS</span>
              <Link to='/summary' className='footer-quick-links'>Summary</Link>
              <Link to='/transactions' className='footer-quick-links'>Transactions</Link>
              <Link to='/report' className='footer-quick-links'>Reports</Link>
            </div>
          </div>
          <div className='second-band-right'>
            <span className='second-band-right-title'>PERSONAL LINKS</span>
            <div className='second-band-right-links'>
              <a href="https://github.com/thomaslgrega" target="_blank" className="fab fa-github-square right-band-link"></a>
              <a href="https://www.linkedin.com/in/thomas-grega-4931711b6/" target="_blank" className="fab fa-linkedin right-band-link"></a>
              <a href="https://angel.co/u/thomas-grega" target="_blank" className="fab fa-angellist right-band-link-angellist"></a>
            </div>
          </div>
        </div>
      </div>
      <div className='third-band'>
        <span>Created by Thomas Grega</span>
      </div>
    </footer>
  )
}
