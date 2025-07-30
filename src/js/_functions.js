import Swiper, { Navigation, Pagination, Scrollbar, Mousewheel } from "swiper";
import { listener } from "./functions/listener";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";



Swiper.use([Navigation, Pagination, Scrollbar, Mousewheel]);

Fancybox.bind('[data-fancybox="gallery"]', {
});

Fancybox.bind('[data-fancybox="gallery-sertificate"]', {
});

function initCounter () {
  const counterNumbers = document.querySelectorAll('[data-counter]');

  
  if (!counterNumbers) return;


  counterNumbers.forEach((number, index) => {
    let count = Number(number.dataset.counter);
    let span = number.querySelector('span');
    let countIndex = 0;

    const countUpdate = setInterval(() => {
      countIndex++;
      span.innerHTML = countIndex;

      if (countIndex === Number(count)) {
        clearInterval(countUpdate);
      }
    },10)
    
  });

}


initCounter()

const dev_swiper_team = new Swiper('.dev-team-swiper', {
  slidesPerView: 4,
  spaceBetween: 24,

  navigation: {
    prevEl: '.dev-team-slider .prev',
    nextEl: '.dev-team-slider .next'
  },


  speed: 1500
})


const dev_swiper_sertificate = new Swiper('.team-sertificate-swiper', {
  slidesPerView: 5,
  spaceBetween: 20,

  navigation: {
    prevEl: '.dev-team-sertificate-slider .prev',
    nextEl: '.dev-team-sertificate-slider .next'
  },


  speed: 1500
})




const devSwiper = new Swiper('.swiper-dev', {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1000,
  direction: 'vertical',
  mousewheel: {
    enabled: true,
    sensitivity: 1.5, 
    forceToAxis: true, 
    thresholdDelta: 10,
  },
  keyboard: {
    enabled: false,
  },
});

const devSection = document.querySelector('.dev');
let isSwiperActive = false;

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.body.style.overflow = 'hidden';
        isSwiperActive = true;
        devSwiper.mousewheel.enable();
      } else {
        document.body.classList.remove('dis-scroll');
        isSwiperActive = false;
        devSwiper.mousewheel.disable();
      }
    });
  },
  {
    threshold: 0.6, 
    rootMargin: '0px',
  }
);

observer.observe(devSection);

devSwiper.on('slideChange', () => {
  if (devSwiper.isEnd && isSwiperActive) {
    devSwiper.mousewheel.disable();
    document.body.classList.remove('dis-scroll');
    isSwiperActive = false;
  } else if (devSwiper.isBeginning && isSwiperActive) {
    document.body.classList.remove('dis-scroll');
    isSwiperActive = false;
    devSwiper.mousewheel.disable();
  }
});

// Обработка событий wheel для тачпадов
document.addEventListener('wheel', (event) => {
  if (isSwiperActive) {
    event.preventDefault();
    if (devSwiper.isEnd && event.deltaY > 0) {
      document.body.classList.remove('dis-scroll');
      isSwiperActive = false;
      devSwiper.mousewheel.disable();
    } else if (devSwiper.isBeginning && event.deltaY < 0) {
      document.body.classList.remove('dis-scroll');
      isSwiperActive = false;
      devSwiper.mousewheel.disable();
    }
  }
}, { passive: false }); 



  const stepsData = [
  {
    id: 'analyze',
    title: 'Исследование и анализ потребностей',
    desc: 'Мы начинаем с анализа вашего бизнеса и рынка, чтобы понять, что важно для ваших клиентов. Это поможет нам правильно сформировать стратегию, которая будет работать для вас.',
    list: ['Анализ целевой аудитории', 'Выявление уникальных преимуществ и конкурентных особенностей', 'Оценка ожиданий и болей клиентов', 'Постановка бизнес-целей сайта']
  },
  {
    id: 'proto',
    title: 'Проектирование структуры и прототипа',
    desc: 'После анализа создаем структуру сайта, разрабатываем прототипы ключевых страниц и согласуем навигацию. Важно, чтобы сайт был удобным для пользователей и соответствовал маркетинговой стратегии.',
    list: ['Разработка структуры сайта', 'Создание прототипов страниц', 'Определение ключевых точек захвата пользователей', 'Проработка UX/UI для оптимального пользовательского опыта']
  },
  {
    id: 'design',
    title: 'Разработка дизайна',
    desc: 'Переносим дизайн из Figma в реально работающий сайт, который уже можно посмотреть.',
    list: ['Разработка макета главной страницы', 'Дизайн внутренних страниц и элементов интерфейса', 'Адаптивный дизайн для мобильных устройств', 'Подбор шрифтов, цветовой схемы и визуальных элементов, соответствующих бренду']
  },
  {
    id: 'front',
    title: 'Верстка сайта',
    desc: 'Переносим дизайн из Figma в реально работающий сайт, который уже можно посмотреть.',
    list: ['Верстка шапки, футера и главной страницы', 'Верстка внутренних страниц сайта', 'Адаптация для любых экранов', 'Реализация анимаций и переходов']
  },
  {
    id: 'back',
    title: 'Натяжка верстки',
    desc: 'Подключаем вёрстку к движку сайта: настраиваем админку, формы, фильтры и всё, что нужно, чтобы сайт заработал как система.',
    list: ['Разделение верстки на компоненты', 'Создание полей в админ-панели', 'Вывод информации из админ-панели на сайт', 'Реализация логики работы форм, калькуляторов и кнопок']
  },
  {
    id: 'content',
    title: 'Разработка контента',
    desc: 'Мы работаем над созданием уникального и продающего контента, который будет не только информировать, но и мотивировать ваших посетителей к действию.',
    list: ['Написание продающих текстов', 'Создание графических и мультимедийных материалов', 'Размещение материалов на сайте', 'Разработка призывов к действию и кнопок']
  },
  {
    id: 'seo',
    title: 'Техническая настройка и SEO-оптимизация',
    desc: 'На этом этапе проводим техническую настройку сайта, обеспечиваем быструю загрузку страниц и проводим SEO-оптимизацию для лучшего позиционирования в поисковых системах.',
    list: ['Установка и настройка систем аналитики (Google Analytics, Yandex Metrica)', 'SEO-оптимизация метатегов, URL-структуры и карт сайта', 'Настройка скорости загрузки и мобильной версии', 'Перелинковка страниц']
  },
  {
    id: 'start',
    title: 'Тестирование и запуск',
    desc: 'После разработки мы тестируем сайт на разных устройствах и браузерах, устраняем все ошибки и запускаем сайт в эксплуатацию.',
    list: ['Тестирование всех функциональных элементов (формы, кнопки, слайды)', 'Проверка совместимости с различными браузерами и устройствами', 'Устранение багов и оптимизация производительности', 'Подготовка сайта к запуску и настройка хостинга']
  }
];

const btnSteps = document.querySelectorAll('.dev-steps-btn');
const titleElement = document.querySelector('.dev-content-title');
const descElement = document.querySelector('.dev-content-desc');
const listContainer = document.querySelector('.dev-steps .list');
const stepsImages = document.querySelectorAll('.dev-visually-images img');

function updateContent(step) {
  titleElement.textContent = step.title;
  descElement.textContent = step.desc;
  
  listContainer.innerHTML = '';
  step.list.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    listContainer.appendChild(li);
  });
}

btnSteps.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    const id = e.currentTarget.dataset.step;
    const step = stepsData.find(item => item.id === id);
    if (step) updateContent(step);

    const activeBtn = document.querySelector('.dev-steps-btn._active');
    if (activeBtn) activeBtn.classList.remove('_active');
    e.target.classList.add('_active');

    const activeimg = document.querySelector('.active-img');
    const animateImg = document.querySelector('.fade-up-img');
    activeimg.classList.remove('active-img');
    animateImg.classList.remove('fade-up-img')
    stepsImages[index].classList.add('active-img')

    setTimeout(() => {
      stepsImages[index].classList.add('fade-up-img')
    },200)

  });

  

  
});


const lineSteps = document.querySelectorAll('[data-step-number]');
const lineStepsContainer = document.querySelector('.dev-trusted-steps .container');

const lineStepsData = [
  {
    id: '1',
    title: 'Валидный код',
    desc: 'Безупречная верстка и соответствие мировым стандартам.',
    list: ['Валидный код по международным стандартам W3C', 'Полная кроссбраузерность – сайт работает даже в старых версиях браузеров', 'Оптимизированная архитектура для высокой скорости загрузки', 'Контроль качества на всех этапах разработки']
  },
  {
    id: '2',
    title: 'Быстрая скорость загрузки',
    desc: 'Загрузка за доли секунды – не теряйте клиентов из-за медленного сайта.',
    list: ['Композитные технологии для ускоренной работы', 'Оптимизация изображений и кода для максимальной скорости', 'Настройка кэширования и минимизация запросов', 'Высокая производительность серверов']
  },
  {
    id: '3',
    title: 'Защита от атак и спама',
    desc: 'Ваш сайт – под надежной защитой от атак и взломов.',
    list: ['Полная адаптация под мобильные и планшеты', 'Удобная навигация на всех разрешениях', 'Отображение без ошибок на разных браузерах', 'Оптимизированный UX/UI для лучшего взаимодействия']
  },
  {
    id: '4',
    title: 'SEO-факторы для продвижения',
    desc: 'Готовность к продвижению – ваш сайт уже на шаг впереди конкурентов.',
    list: ['Полная адаптация под мобильные и планшеты', 'Оптимизированные мета-теги и заголовки', 'Автоматическая генерация и обновление XML-карт сайта', 'Улучшенные поведенческие факторы для роста позиций']
  },
  {
    id: '5',
    title: 'Адаптивность для мобильных устройств',
    desc: 'Корректное отображение на любых устройствах – от смартфона до большого экрана.',
    list: ['Полная адаптация под мобильные и планшеты', 'Удобная навигация на всех разрешениях', 'Отображение без ошибок на разных браузерах', 'Оптимизированный UX/UI для лучшего взаимодействия']
  },
  {
    id: '6',
    title: 'Удобство управления',
    desc: 'Легкая и понятная админка — редактируйте сайт без программиста!',
    list: ['Интуитивно понятная CMS', 'Простое добавление товаров и контента', 'Возможность расширения функционала без сложных изменений', 'Обучение работе с сайтом']
  },
  {
    id: '7',
    title: 'Автоматизация процессов',
    desc: 'Сократите время на управление сайтом и сосредоточитесь на бизнесе.',
    list: ['Автоматическая публикация контента в соцсетях', 'Настройка регулярных обновлений и бекапов сайта', 'Интеграция с почтовыми рассылками и CRM-системами', 'Оптимизация процессов управления товарным каталогом и заказами']
  },
  {
    id: '8',
    title: 'Удобство для пользователей',
    desc: 'Каждый посетитель найдет на вашем сайте то, что ему нужно, без лишних усилий.',
    list: ['Интуитивно понятная навигация, доступность всех разделов', 'Быстрая загрузка страниц даже при большом количестве контента', 'Проработка всех деталей для удобства пользователей', 'Простой процесс оформления заказа или заявки без лишних шагов']
  },
   {
    id: '9',
    title: 'Уникальный дизайн',
    desc: 'Создаем визуально привлекательные сайты, которые выделяют ваш бизнес. 1',
    list: ['Дизайн, соответствующий вашему бренду', 'Современные тренды UX/UI', 'Проработка всех деталей для удобства пользователей', 'Разработка без шаблонов – только уникальные решения']
  },
 
]



lineSteps.forEach((dot, index) => {
  dot.addEventListener('click', (e) => {
    e.stopPropagation();
    let parent = e.target.closest('g');
    let id = parent.dataset.stepNumber;
    const rect = e.target.getBoundingClientRect();
    const containerRect = lineStepsContainer.getBoundingClientRect();
    const contentBlock = document.querySelector('.dev-trusted-content-step');
    const title = contentBlock.querySelector('.t');
    const desc = contentBlock.querySelector('.d');
    const listEl = contentBlock.querySelector('.list-reset');

    const isActive = contentBlock.classList.contains('_active');
    const activeIndex = contentBlock.dataset.activeIndex;

    if (isActive && activeIndex == index) {
      contentBlock.classList.remove('_active');
      contentBlock.dataset.activeIndex = '';
      return;
    }


    const data = lineStepsData[index];

    title.textContent = data.title;
    desc.textContent = data.desc;

    listEl.innerHTML = '';
    data.list.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      listEl.appendChild(li);
    });
    if (id == 1) {
      const left = rect.left - containerRect.left + rect.width / 5;
      const top = rect.top - containerRect.top + (containerRect.top / 2);
      contentBlock.style.left = left + 'px';
      contentBlock.style.top = -top + 'px';
    } else if (id == '8' || id == '9') {
      const left = rect.left - containerRect.left + rect.width - 400 ;
      const top = rect.top - containerRect.top + (containerRect.top / 2 + 40);
      contentBlock.style.left = left + 'px';
      contentBlock.style.top = -top + 'px';
      console.log(left)
    } else {
      const left = rect.left - containerRect.left + rect.width / 5;
      const top = rect.top - containerRect.top + (containerRect.top / 2 + 40);
      contentBlock.style.left = left + 'px';
      contentBlock.style.top = -top + 'px';
    }

    
    
    

    contentBlock.dataset.activeIndex = index;
    contentBlock.classList.add('_active');
  });
});






  // -----------------------------------------------------------------

const structureBtns = document?.querySelectorAll('[data-structure-btn]');

if (structureBtns) {
  structureBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      changeStructureTab(e.target);
    })
  })

  function changeStructureTab(target) {
    let id = target.dataset.structureBtn;
    let block = document.querySelector(`[data-structure-block="${id}"]`);
    let activeBlock = document.querySelector('.dev-about-structure .block._active');
    const fadeUp = document.querySelector('.dev-about-structure .block.fade-up');

    if (!block) return;

    activeBlock.classList.remove('_active');
    fadeUp.classList.remove('fade-up');

    block.classList.add('_active');
    
    if (!block.classList.contains('fade-up')) {
      setTimeout(() => {
        block.classList.add('fade-up')
      },200)
    }

  }


}


// CRM BLOCK

const crmButtons = document.querySelectorAll('.derm-crm-item');

crmButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); 

    document.querySelectorAll('.crm-item-block._active').forEach((block) => {
      if (!btn.contains(block)) {
        block.classList.remove('_active');
      }
    });

    const block = btn.querySelector('.crm-item-block');
    if (!block) return;

    block.classList.toggle('_active');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.crm-item-block._active').forEach((block) => {
    block.classList.remove('_active');
  });
});
