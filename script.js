
// Scroll fade-in
const faders = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show'); });
},{ threshold:.2 });
faders.forEach(f => io.observe(f));

// WhatsApp form
function sendWhatsApp(e){
  e.preventDefault();
  const n=document.getElementById('name').value;
  const em=document.getElementById('email').value;
  const m=document.getElementById('message').value;
  const phone='265XXXXXXXXX'; // replace
  const url=`https://wa.me/${phone}?text=${encodeURIComponent(`Name: ${n}\nEmail: ${em}\nMessage: ${m}`)}`;
  document.getElementById('success').style.display='block';
  window.open(url,'_blank');
}
