//const openModalButton = document.querySelector("#openModal");
const closeModalButton = document.querySelector("#closeModal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

fade.addEventListener("click", () => toggleModal());

    personagem1 = {
        nome: "Lindinha",
        sobre: `Ingênua e carinhosa, mas também é muitas vezes irresponsável e teimosa. No entanto, se Townsville está ameaçada, ela não hesitará em lutar para protegê-la. É apaixonada pelo seu bichinho de pelúcia Polvi.`
    };

    personagem2 = {
        nome: "Florzinha",
        sobre: "Inteligente e amorosa, Florzinha é a líder das meninas. Sendo a mais inteligente das irmãs, gosta muito de estudar e é focada em tirar notas altas. Também tem uma paixão pelo teatro."
    };
    personagem3 = {
        nome: "Docinho",
        sobre: "Docinho, apesar de se mostrar muito durona, é muito sensível, principalmente quando o assunto é sua família. Adora derrotar os vilões e competir em competições de patins."
    };
    personagem4 = {
        nome: "Macaco Louco",
        sobre: "Um dos principais vilões do desenho, o Macaco Louco era antes o companheiro do Professor Utônio em seu laboratório, mas se tornou vilão ao ser atingido pelo elemento X junto com as meninas SuperPoderosas."
    };
    personagem5 = {
        nome: "Ele",
        sobre: "Ele é o vilão mais perigoso já enfrentado pelas meninas. Possui inúmeros poderes, incluindo de transformação, confundindo várias vezes as meninas."
    };
    personagem6 = {
        nome: "Utônio",
        sobre: "Professor Utônio é o criador(pai) das meninas. Ama ciência e dedica sua vida em experiências cientìficas. Sua maior e mais orgulhosa criação foram as meninas. Ama sua família e faz de tudo por ela."
    };






function verMais(personagem){
    modal_titulo.innerHTML = personagem.nome;
    div_infos.innerHTML = personagem.sobre;
    toggleModal();
}