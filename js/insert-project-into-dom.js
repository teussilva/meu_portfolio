const projetosInfo = document.querySelector('[data-js="projetos-info"]');


const insertInfoToDom = info => {
  const data = listInfoOfProjects.map(({ img, projetoData }) => `
    <div class="info-projeto mt-32">
      <div class="projeto-img">
        <img src="${img}" alt="">
        <div class="data-info-bg">
          <div class="data-projeto">${projetoData}</div>
          <div class="btn-projeto">
            <a href="#projetos">Ver mais</a>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  info.innerHTML = data;
  
  // const allLinks = info.querySelectorAll('.info-projeto .btn-projeto a')
};

insertInfoToDom(projetosInfo);
