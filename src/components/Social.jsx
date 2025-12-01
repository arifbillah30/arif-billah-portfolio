import React from "react";

const SocialShare = [
  {
    iconName: "fa fa-github",
    link: "https://github.com/arifbillah30",
    name: "GitHub"
  },
  { 
    iconName: "fa fa-linkedin", 
    link: "https://www.linkedin.com/in/mrarifbillah",
    name: "LinkedIn"
  },
  {
    iconName: "fa fa-twitter",
    link: "https://x.com/imarifb",
    name: "Twitter"
  },
  { 
    iconName: "fa fa-graduation-cap", 
    link: "https://www.researchgate.net/profile/Arif-Billah-13",
    name: "ResearchGate"
  },
];

const Social = ({ align = 'center' }) => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: align === 'center' ? 'center' : 'flex-start', 
      gap: '20px', 
      marginTop: '20px',
      marginBottom: '20px',
      flexWrap: 'nowrap',
      alignItems: 'center'
    }}>
      {SocialShare.map((val, i) => (
        <a 
          key={i}
          href={val.link} 
          target="_blank" 
          rel="noreferrer"
          className="social-link"
          style={{ 
            textDecoration: 'none', 
            color: '#999',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '5px',
            transition: 'all 0.3s ease',
            padding: '5px',
            minWidth: '60px',
            flex: '0 0 auto'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#ffb400';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#999';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <i className={val.iconName} style={{ fontSize: '18px' }}></i>
          <span style={{ fontSize: '9px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px', whiteSpace: 'nowrap' }}>{val.name}</span>
        </a>
      ))}
    </div>
  );
};

export default Social;
