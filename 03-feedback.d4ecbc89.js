!function(){var e,t=document.querySelector(".feedback-form"),a=document.querySelector('input[name="email"]'),r=document.querySelector('textarea[name="message"]'),n={},o="feedback-form-state";t.addEventListener("input",(function(e){n[e.target.name]=e.target.value,console.log(n),localStorage.setItem(o,JSON.stringify(n))})),t.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem(o),e.currentTarget.reset()})),e={},localStorage.getItem(o)&&(e=JSON.parse(localStorage.getItem(o)),r.textContent=e.message,a.value=e.email)}();
//# sourceMappingURL=03-feedback.d4ecbc89.js.map