import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const inputs = document.querySelectorAll("#cf .form-group input, #cf .form-group textarea");
    const onFocus = (e) => e.currentTarget.parentNode.classList.add("focused");
    const onBlur = (e) => { if (!e.currentTarget.value) e.currentTarget.parentNode.classList.remove("focused"); };
    inputs.forEach((i) => { i.addEventListener("focus", onFocus); i.addEventListener("blur", onBlur); });
    return () => inputs.forEach((i) => { i.removeEventListener("focus", onFocus); i.removeEventListener("blur", onBlur); });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    setTimeout(() => {
      setShow(false);
      e.target.submit(); // preserves your original redirect/submit behavior via formsubmit
    }, 3000);
  };

  return (
    <div id="cf">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        #cf{--primary:#6366f1;--secondary:#51485a;--accent:#ec4899;--glass:rgba(255,255,255,.1);--white:#fff;}
        #cf *{box-sizing:border-box;font-family:'Inter',sans-serif}
        #cf body{background:linear-gradient(45deg,var(--primary),var(--secondary));min-height:100vh}
        #cf .wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:30px;background:linear-gradient(45deg,var(--primary),var(--secondary))}
        #cf .card{background:rgba(255,255,255,.1);backdrop-filter:blur(10px);border-radius:20px;box-shadow:0 10px 30px rgba(0,0,0,.2);max-width:720px;width:100%;padding:32px;color:#fff}
        #cf h2{font-weight:700;margin-bottom:10px}
        #cf .subtitle{opacity:.9;margin-bottom:22px}
        #cf .form-group{position:relative;margin-bottom:18px}
        #cf .form-group input,#cf .form-group textarea{width:100%;padding:14px 14px 14px 14px;border:1px solid rgba(255,255,255,.2);border-radius:12px;background:rgba(255,255,255,.06);color:#fff;outline:none}
        #cf .form-group textarea{min-height:120px;resize:vertical}
        #cf .floating-label{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:14px;color:#ddd;transition:all .2s}
        #cf .form-group.focused .floating-label,#cf .form-group input:not(:placeholder-shown)+.floating-label,#cf .form-group textarea:not(:placeholder-shown)+.floating-label{top:-8px;background:linear-gradient(45deg,var(--primary),var(--secondary));padding:0 6px;border-radius:6px;font-size:12px}
        #cf .actions{display:flex;gap:10px;margin-top:10px}
        #cf .actions .btn{padding:10px 16px;border-radius:10px;border:none}
        #cf .btn-primary{background:var(--primary);color:#fff}
        #cf .btn-secondary{background:#333;color:#fff}
        #cf .success{margin-top:16px;background:#fff;color:#000;border-radius:12px;padding:16px;text-align:center}
      `}</style>

      <div className="wrap">
        <div className="card">
          <h2>Contact Form</h2>
          <p className="subtitle">I’ll get back to you soon.</p>

          <form action="https://formsubmit.co/rikeshrikey@gmail.com" method="POST" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" required placeholder=" " />
              <label className="floating-label">Your Name</label>
            </div>
            <div className="form-group">
              <input type="email" name="email" required placeholder=" " />
              <label className="floating-label">Your Email</label>
            </div>
            <div className="form-group">
              <textarea name="message" required placeholder=" " />
              <label className="floating-label">Your Message</label>
            </div>
            <div className="actions">
              <button type="submit" className="btn btn-primary">Send Message</button>
              <Link to="/" className="btn btn-secondary">Back Home</Link>
            </div>
          </form>

          {show && (
            <div className="success">
              <h4>✅ Message Sent!</h4>
              <p>Thanks for reaching out !!. wait for captcha</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
