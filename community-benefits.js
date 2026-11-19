document.addEventListener('DOMContentLoaded', () => {
  const courseDetail = document.getElementById('course-detail');
  if (!courseDetail) return;

  const highlightCommunity = () => {
    const mainBenefit = courseDetail.querySelector('.main-benefit');
    if (mainBenefit && mainBenefit.dataset.enhanced !== 'true') {
      mainBenefit.dataset.enhanced = 'true';
      mainBenefit.innerHTML = '<span class="community-kicker">COMUNIDAD IKARUGA</span><strong>No aprendés sola: avanzás acompañada.</strong><p>Docente, grupo de tu nivel y práctica guiada para sostener tu ritmo de aprendizaje.</p><div class="community-points"><span>Clases en vivo</span><span>Grupo por nivel</span><span>Acompañamiento</span></div>';
    }

    const detailColumn = courseDetail.querySelector('.course-detail-grid > div');
    const quickSummary = detailColumn?.querySelector('.quick-summary');
    if (mainBenefit && detailColumn && quickSummary && mainBenefit.parentElement !== detailColumn) {
      quickSummary.after(mainBenefit);
    }

    const benefitsTitle = courseDetail.querySelector('.benefits h3');
    if (benefitsTitle && benefitsTitle.textContent !== 'Todo lo que incluye') benefitsTitle.textContent = 'Todo lo que incluye';

    const programTitle = courseDetail.querySelector('.program-details summary');
    if (programTitle && programTitle.textContent !== 'Lo que vas a aprender') programTitle.textContent = 'Lo que vas a aprender';

    const extraBenefits = courseDetail.querySelector('.community');
    if (extraBenefits && extraBenefits.dataset.enhanced !== 'true') {
      extraBenefits.dataset.enhanced = 'true';
      const label = extraBenefits.querySelector('span');
      const title = extraBenefits.querySelector('strong');
      if (label) label.textContent = 'BENEFICIOS QUE SUMA TU NIVEL';
      if (title) title.textContent = 'Más apoyo para que avances';
    }
  };

  new MutationObserver(highlightCommunity).observe(courseDetail, { childList: true, subtree: true });
  highlightCommunity();

  document.querySelectorAll('#contact, #mobile-contact').forEach((contact) => {
    contact.textContent = 'Quiero confirmar esta opción con Isa';
  });
});
