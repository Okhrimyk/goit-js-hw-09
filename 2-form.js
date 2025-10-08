import"./assets/styles-BYxOEeQl.js";const n=document.querySelector(".page-form"),r=[`
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Log in</button>
</form> `].join("");n.innerHTML=r;const s=document.querySelector(".feedback-form"),o=s.elements.email,l=s.elements.message,t="feedback-form-state",e={email:"",message:""};o.addEventListener("input",i);l.addEventListener("input",u);s.addEventListener("submit",f);function i(a){e.email=a.target.value,localStorage.setItem(t,JSON.stringify(e))}function u(a){e.message=a.target.value,localStorage.setItem(t,JSON.stringify(e))}c();function c(){const a=localStorage.getItem(t);if(a){const m=JSON.parse(a);o.value=m.email||"",l.value=m.message||"",e.email=parsedData.email||"",e.message=parsedData.message||""}}function f(a){if(a.preventDefault(),!e.email.trim()||!e.message.trim()){alert("Fill please all fields");return}a.target.reset(),localStorage.removeItem(t),e.email="",e.message=""}
//# sourceMappingURL=2-form.js.map
