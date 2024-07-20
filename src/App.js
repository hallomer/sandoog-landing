import React  from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet, faDollar, faPieChart, faChartLine, faSackDollar, faLanguage, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import sig from './sig.png';
import video from './video.mp4';

function App() {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };
  const color = "#FF6B35";

  const featureBoxes = [
    { icon: faWallet, text: 'income_tracking' },
    { icon: faDollar, text: 'expenses_tracking' },
    { icon: faPieChart, text: 'budget_management' },
    { icon: faSackDollar, text: 'savings_management' },
    { icon: faChartLine, text: 'summary_graphs' },
    { icon: faLanguage, text: 'bilingual_support' },
    { icon: faUser, text: 'guest_session' }
  ];

  const repeatedFeatureBoxes = [...featureBoxes, ...featureBoxes];

  return (
    <div className={`container ${i18n.language === 'ar' ? 'rtl' : ''}`}>
      <header className="header">
        <div className="header-btn">
          <a href="/" className="logo" title="Sandoog">
            <img src={logo} alt="Sandoog logo" />
          </a>
        </div>
        <nav className="nav">
          <a href="#video">{t('watch')}</a>
          <a href="#features">{t('features')}</a>
          <div className="user-action">
          <button className="change-lang" onClick={handleLanguageChange}>
            <span className="lang-text">{i18n.language === 'en' ? 'العربية' : 'English'}</span>
          </button>
        </div>
        </nav>
      </header>
      <main>
        <div className="hero">
          <h1>{t('track_save_prosper')}</h1>
          <span>{t('take_charge')}</span>
          <div className="button">
            <a href="https://sandoog.hallomer.tech/"><button>{t('get_started')}</button></a>
          </div>
          <div id="video">
            <video controls>
            <source src={video} type="video/mp4" />
            {t("video_error")}
          </video>
          {i18n.language === 'ar' && (
            <p className="ar-video">الفيديو باللغة الإنجليزية فقط*</p>
          )}
          </div>
        </div>
        <div id="features" className={`features ${i18n.language === 'ar' ? 'rtl' : ''}`}>
          <div className="stack">
            {repeatedFeatureBoxes.map((box, index) => (
              <div
                className="box"
                key={index}
                style={{
                  borderColor: color,
                  color: color
                }}
              >
                <FontAwesomeIcon
                  icon={box.icon}
                  className="box-icon"
                  style={{ color: color + '80' }}
                />
                {t(box.text)}
              </div>
            ))}
          </div>
          <div className="features-title">{t('features_title')}</div>
        </div>
        <div className="testimonial">
          <h2>{t('happy_sandooger')}</h2>
          <div className="comment">
            ⭐️⭐️⭐️⭐️⭐️<br /><br />
            {t('testimonial_text')}<br />
            <div className="signature-container"><img src={sig} alt="Hiba signature" /></div>
          </div>
        </div>
        <div className="CTA-again">
          <h2>{t('join_sandoog_family')}</h2>
          <div className="button">
            <a href="https://sandoog.hallomer.tech/"><button>{t('get_started')}</button></a>
          </div>
        </div>
      </main>
      <footer>
        <span dir="ltr">Hiba's Portfolio Project for Holberton School.</span>
        <div>
          <span dir="ltr">&copy; {new Date().getFullYear()} Sandoog.</span> 🇸🇩
        </div>
        <div className="footer-social">
          <a href="https://github.com/hallomer/sandoog/" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:hebaaltayeb2@icloud.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://x.com/Hibathepro" aria-label="Twitter / X">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://www.linkedin.com/in/hibaeltayeb/" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https:discordapp.com/users/hallomer" aria-label="Discord">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;