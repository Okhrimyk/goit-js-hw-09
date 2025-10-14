import"./assets/styles-BybVkJee.js";const o=document.querySelector(".feedback-form"),l=[`
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Log in</button>`].join("");o.innerHTML=l;const m=document.querySelector(".feedback-form"),n=m.elements.email,r=m.elements.message,s="feedback-form-state",a={email:"",message:""};c();m.addEventListener("input",i);m.addEventListener("submit",u);function i(e){(e.target.name==="email"||e.target.name==="message")&&(a[e.target.name]=e.target.value,localStorage.setItem(s,JSON.stringify(a)))}function c(){const e=localStorage.getItem(s);if(e){const t=JSON.parse(e);n.value=t.email||"",r.value=t.message||"",a.email=t.email||"",a.message=t.message||""}}function u(e){if(e.preventDefault(),!a.email.trim()||!a.message.trim()){alert("Fill please all fields");return}console.log(a),e.target.reset(),localStorage.removeItem(s),a.email="",a.message=""}
//# sourceMappingURL=2-form.js.map
