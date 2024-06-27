const form=document.forms.feedback;

const fullname=form.elements.fullname;
const email=form.elements.email;
const type=form.elements.type;
const desc=form.elements.description;
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(fullname.value,email.value,type.value,desc.value);
    console.log([...new FormData(form)]);
    alert(`Mr/Mrs: ${fullname.value}💌 We got your Feedback. `);
});
