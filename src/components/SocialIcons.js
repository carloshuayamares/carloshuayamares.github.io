const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://github.com/carloshuayamares" target="_blank" rel="noreferrer" >
        <i className="fa-brands fa-github" aria-hidden="true" title="Carlos Huayamares' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/carloshuayamares/" target="_blank" rel="noreferrer" >
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Carlos Huayamares' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/carlos.huaya/" target="_blank" rel="noreferrer" >
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Carlos Huayamares' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/" target="_blank" rel="noreferrer" >
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Carlos Huayamares' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
