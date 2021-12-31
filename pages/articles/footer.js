import Image from 'next/image'
import style from '../../styles/articles/Footer.module.css'
import { FiMail, FiFacebook, FiTwitter, FiGithub, FiYoutube } from 'react-icons/fi';

import unicornTopLogo from '../../images/unicorn-logo-gr.png';

export default function Footer () {
  return (
    <div className={style.Container}>
      <div className={style.Wrapper}>
        <div className={style.Address}>
          <div className={style.Logo}>
            <Image
              src={unicornTopLogo}
              alt="company logo unicorn"
            />
        </div>
        <p>optimization.for-all.world</p>
        <p>Nasir Trade Center, 89 Bir Uttam, CR Dutta Rd,< br /> Dhaka 1205, Bangladesh</p>
        <div className={style.SocialMedia}>
          <a href="#" className={style.IconCircle}>
            <FiFacebook className={style.SocialIcon}/>
          </a>
          <a href="#" className={style.IconCircle}>
            <FiTwitter  className={style.SocialIcon}/>
          </a>
          <a href="#" className={style.IconCircle}>
            <FiGithub  className={style.SocialIcon}/>
          </a>
          <a href="#" className={style.IconCircle}>
            <FiYoutube  className={style.SocialIcon}/>
          </a>
        </div>
        </div>
        <div className={style.Products}>
          <h2>Products</h2>
          <p>Artificial Intelligence</p>
          <p>Blockchain solutions</p>
          <p>Industrial automatization</p>
          <p>Multi platform app dev</p>
          <p>Parsing service</p>
        </div>
        <div className={style.Products}>
          <h2>Company</h2>
          <p>About Us</p>
          <p>About Security</p>
          <p>User Guide</p>
          <p>Terms Of Services</p>
          <p>Privacy Policy</p>
        </div>
        <div className={style.Subscribe}>
          <h2>SUBSCRIBE OUR NEWSLETTER</h2>
          <div className={style.InputEmail}>
            <input type="email" id="usr" placeholder="email address" /><a href="#"><FiMail /></a>
          </div>
          <p>FOR-ALL WORLD CORPORATION</p>
          <p>© 2020</p>
        </div>
      </div>
      <div className={style.UnderFooter}>
        <p style={{color: "white", marginTop: "3rem"}}>© Copyright 2020&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Development by <a href="https://it.for-all.world" className={style.UnderFooterLink}>IT_Department</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;All Rights Reserved&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Powered by <a href="https://reactjs.org" className={style.UnderFooterLink}>React</a> with <a href="https://nextjs.org" className={style.UnderFooterLink}>NextJS</a></p>
      </div>
    </div>
  )
}