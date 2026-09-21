const projectDetails = {
  mellow: {
    title: "Mellow Coffee",
    description: "나만의 커피 취향을 발견하고 매달 새로운 원두를 만나는 구독 경험을 설계했습니다. 브랜드의 따뜻한 무드를 디지털 화면 전반에 일관되게 담았습니다.",
    tags: ["Brand Strategy", "Web Design", "Development"]
  },
  orbit: {
    title: "Orbit Finance",
    description: "복잡하게 느껴지는 투자 정보를 누구나 이해할 수 있도록 시각화하고, 사용자의 첫 투자부터 꾸준한 관리까지 이어지는 흐름을 만들었습니다.",
    tags: ["UX Research", "Product Design", "Design System"]
  },
  sori: {
    title: "Sori Archive",
    description: "소리를 통해 기억을 기록하는 모바일 아카이브입니다. 소리의 감정을 시각 언어로 번역해 차분하고 몰입감 있는 탐색 경험을 구현했습니다.",
    tags: ["Identity", "Mobile App", "Prototyping"]
  }
};

const modal = document.querySelector("#project-modal");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalTags = document.querySelector("#modal-tags");

function openProject(projectKey) {
  const project = projectDetails[projectKey];
  if (!project) return;
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;
  modalTags.replaceChildren(...project.tags.map((tag) => {
    const element = document.createElement("span");
    element.textContent = tag;
    return element;
  }));
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.querySelectorAll(".project-card").forEach((card) => {
  card.querySelector(".project-link").addEventListener("click", () => openProject(card.dataset.project));
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeProject);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeProject();
});

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const status = document.querySelector(".form-status");
  status.textContent = "메시지가 준비되었습니다. 곧 연락드릴게요!";
  event.target.reset();
});
