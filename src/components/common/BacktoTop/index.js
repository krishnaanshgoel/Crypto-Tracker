import React, { useEffect, useRef } from 'react';
import "./style.css";
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';

function BacktoTop() {
  const buttonRef = useRef(null);

  useEffect(() => {
    function scrollFunction() {
      if (buttonRef.current) {
        if (window.scrollY > 20) {
          buttonRef.current.style.display = "flex";
        } else {
          buttonRef.current.style.display = "none";
        }
      }
    }

    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="top-btn" ref={buttonRef} onClick={topFunction} style={{ display: "none" }}>
      <ArrowUpwardRoundedIcon style={{ color: "var(--blue)" }} />
    </div>
  );
}

export default BacktoTop;
