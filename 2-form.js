import"./assets/styles-BybVkJee.js";const o=document.querySelector(".feedback-form"),r=[`
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Log in</button>`].join("");o.innerHTML=r;const s=document.querySelector(".feedback-form"),n=s.elements.email,l=s.elements.message,a="feedback-form-state",e={email:"",message:""};n.addEventListener("input",i);l.addEventListener("input",u);s.addEventListener("submit",g);function i(t){e.email=t.target.value,localStorage.setItem(a,JSON.stringify(e))}function u(t){e.message=t.target.value,localStorage.setItem(a,JSON.stringify(e))}c();function c(){const t=localStorage.getItem(a);if(t){const m=JSON.parse(t);n.value=m.email||"",l.value=m.message||"",e.email=parsedData.email||"",e.message=parsedData.message||""}}function g(t){if(t.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}t.target.reset(),localStorage.removeItem(a),e.email="",e.message=""}
//# sourceMappingURL=2-form.js.map
