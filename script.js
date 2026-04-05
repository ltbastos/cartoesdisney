gsap.registerPlugin(ScrollTrigger);

//  Olá, meus amigos! Espero de coração que tenham gostado do evento, ele foi pensado com muito carinho pra realmente ajudar vocês a darem os próximos passos na carreira.
// Se decidirem entrar pra comunidade, será um prazer enorme tê-los com a gente! Só não deixem pra depois… as vagas serão encerradas em breve, e as próximas turmas terão um valor mais alto. 

// MAPEAMENTO
const botaoNext = document.querySelector(".botaoNext");
const botaoPrev = document.querySelector(".botaoPrev");
const slides = document.querySelectorAll(".slide");
const bullets = document.querySelectorAll(".bullets li");

const imgsNext = document.querySelectorAll(".imgNext"); // 4 IMAGENS

let i = 0;

function animacaoTexto() {
  const text = new SplitType(".slide.active h1", { types: "words, chars" });
  gsap.from(text.chars, {
    y: "100%",
    opacity: 0,
    duration: 0.5,
    stagger: { each: 0.05, overlap: 0.1 },
    delay: 0.3,
  });
}

// função -> máquina -> ação

function passarSlide() {
  slides[i].classList.remove("active");
  bullets[i].classList.remove("active");
  if (i === slides.length - 1) {
    i = 0;
  } else {
    i++;
  }
  slides[i].classList.add("active");
  bullets[i].classList.add("active");
  animacaoTexto();
}

function voltarSlide() {
  slides[i].classList.remove("active");
  bullets[i].classList.remove("active");
  if (i === 0) {
    i = slides.length - 1;
  } else {
    i--;
  }
  slides[i].classList.add("active");
  bullets[i].classList.add("active");
  animacaoTexto();
}

botaoNext.onclick = () => {
  passarSlide();
};

imgsNext.forEach((imgNext) => {
  imgNext.onclick = () => {
    passarSlide();
  };
});

bullets.forEach((bullet, index) => {
  bullet.onclick = () => {
    slides[i].classList.remove("active");
    bullets[i].classList.remove("active");
    i = index;
    slides[i].classList.add("active");
    bullets[i].classList.add("active");
    animacaoTexto();
  };
});

botaoPrev.onclick = () => {
  voltarSlide();
};

// FAIXA ANIMADA
gsap.to("textPath", {
  attr: { startOffset: "-20%" },
  scrollTrigger: {
    trigger: ".marquee-inner",
    start: "top 70%",
    end: "bottom top",
    scrub: 2,
  },
});

// LINHA VETORIAL
const linhaPath = document.querySelector(".linhaVetorial svg path");
const linhaComprimento = linhaPath.getTotalLength();

const timeline = gsap.timeline({
  scrollTrigger: {
      trigger: ".secao2",
      start: "30% 80%",
      end: "bottom+=320 40%",
      scrub: 3,
    }
});



gsap.set(linhaPath, {
  strokeDasharray: linhaComprimento,
  strokeDashoffset: linhaComprimento,
});

timeline.fromTo(
  linhaPath,
  {
    strokeDashoffset: linhaComprimento,
  },
  {
    strokeDashoffset: 0,
    duration: 5,
  }
);

gsap.to(".secao3", {
  backgroundColor: "rgba(255, 255, 255, 1)",
  ease: "none",
  scrollTrigger: {
    trigger: ".secao3",
    start: "top 58%",
    end: "top 20%",
    scrub: 2,
  },
});

// LATAS

gsap.to(".laranja .lataEtapa", {
  rotate: "0deg",
  y: -80,
  scrollTrigger: {
    trigger: ".laranja",
    start: "top 70%",
    end: "bottom top",
    scrub: 2,
  },
});

gsap.to(".azul .lataEtapa", {
  rotate: "10deg",
  y: -30,
  scrollTrigger: {
    trigger: ".azul",
    start: "top 70%",
    end: "bottom top",
    scrub: 2,
  },
});

gsap.to(".verde .lataEtapa", {
  rotate: "0deg",
  y: 100,
  scrollTrigger: {
    trigger: ".verde",
    start: "top 70%",
    end: "bottom top",
    scrub: 2,
  },
});
