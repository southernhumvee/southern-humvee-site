
document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.arrow').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const dir = btn.classList.contains('left') ? -1 : 1;
      const track = btn.closest('.carousel-wrap').querySelector('.carousel');
      const card = track.querySelector('.slide');
      const step = card ? card.getBoundingClientRect().width + 14 : 300;
      track.scrollBy({left: dir * step, behavior:'smooth'});
    });
  });
});
