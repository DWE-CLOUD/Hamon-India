export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3 }
};

export const navItemHover = {
  transition: { duration: 0.2 },
  hover: { scale: 1.05, color: "#ffffff" }
};

export const logoSpin = {
  hover: { rotate: 180 },
  transition: { duration: 0.6, ease: "easeInOut" }
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const heroText = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const heroButton = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  hover: { 
    scale: 1.05,
    backgroundColor: "rgba(255, 255, 255, 1)",
    color: "rgba(0, 0, 0, 1)"
  }
};

export const partnersContainer = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.5
    }
  }
};

export const partnerLogo = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3 }
  },
  hover: { 
    scale: 1.1,
    transition: { duration: 0.2 }
  }
};