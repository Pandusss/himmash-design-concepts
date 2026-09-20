'use strict';
const products = [
 {id:'line',name:'Линии грануляции вторичных полимеров',short:'Линии грануляции',category:'line',image:'00-01-696x392.webp',photos:['bg-02-1920x1080.webp','bg-01-1920x1080.webp'],description:'Полный цикл переработки: измельчение, мойка, сушка и грануляция вторичных полимеров.',detail:'Проектирование и запуск линий переработки вторичных полимеров. Конфигурация подбирается под сырьё, объём переработки и инфраструктуру площадки.',original:'prod01.html'},
 {id:'centrifuge',name:'Центрифуга для полимеров',short:'Центрифуга для обезвоживания',category:'washing',image:'00-02-696x392.webp',photos:['02-01-1200x900.webp','02-02-1200x900.webp'],description:'Механическое удаление влаги из плёночных, нитевых и измельчённых полимеров.',detail:'Удаляет влагу из полимеров перед сушкой. Для плёночных отходов, полипропиленовых нитей биг-бэгов, мешков и других измельчённых полимеров.',original:'prod02.html'},
 {id:'friction',name:'Фрикционная мойка полимеров',short:'Фрикционная мойка',category:'washing',image:'00-08-696x392.webp',description:'Глубокая очистка измельчённых полимеров за счёт интенсивного трения.',detail:'Для очистки нитей биг-бегов, мешков, плёночных, стрейч-материалов и полимерных отходов с использованием интенсивного трения и моющих средств.',original:'prod08.html'},
 {id:'feeder',name:'Шнековый питатель в экструдер',short:'Шнековый питатель',category:'systems',image:'00-04-696x392.webp',description:'Механическая подача плёнок, нитей и дроблёнки в экструдер.',detail:'Обеспечивает подачу плёнок, полипропиленовых нитей биг-бегов и дроблёнки в зону загрузки экструдера без стадии агломерации.',original:'prod04.html'},
 {id:'head',name:'Голова грануляции с водокольцевой резкой',short:'Голова грануляции',category:'granulation',image:'00-05-696x392.webp',description:'Горячий торцевой рез для формирования полимерных гранул.',detail:'Предназначена для грануляции полимеров полиолефинового ряда: ПНД, ПВД и ПП. Использует горячий торцевой рез.',original:'prod05.html'},
 {id:'water',name:'Система очистки сточных вод Т-5000',short:'Система водоочистки Т-5000',category:'systems',image:'00-12-696x392.webp',description:'Очистка стоков и возврат воды в производственный цикл.',detail:'Замкнутая водооборотная система очистки промышленных стоков линий мойки с многократным возвратом очищенной воды в производственный цикл.',original:'prod12.html'},
 {id:'dies',name:'Фильеры и плавающие ножи',short:'Фильеры и плавающие ножи',category:'granulation',image:'00-03-696x392.webp',description:'Самоцентрирующиеся фильеры и ножи для ровного среза гранул.',detail:'Самоцентрирующиеся фильеры и плавающие ножи предназначены для ровного среза и стабильного размера гранул.',original:'prod03.html'},
 {id:'flotation',name:'Флотационная машина первичной мойки',short:'Флотационная машина',category:'washing',image:'00-06-696x392.webp',description:'Первичная отмывка и отделение тяжёлых включений.',detail:'Применяется для первичной отмывки сильно загрязнённых полимеров: отделяет грязь, песок, камни и тяжёлые включения перед фрикционной мойкой.',original:'prod06.html'},
 {id:'air',name:'Системы пневмотранспорта',short:'Системы пневмотранспорта',category:'systems',image:'00-07-696x392.webp',description:'Транспортировка гранул, дроблёнки и флексы по трубопроводам.',detail:'Контактные и эжекторные вентиляторы, крыльчатки и вентиляторы охлаждения экструдера для транспортировки полимерных материалов.',original:'prod07.html'},
 {id:'vacuum',name:'Вакуумная дегазация расплава',short:'Вакуумная дегазация',category:'granulation',image:'00-09-696x392.webp',description:'Удаление газов и паров влаги из расплава полимера.',detail:'Удаляет газы и пары влаги из расплава методом вакуумирования для улучшения качества гранул.',original:'prod09.html'},
 {id:'hopper',name:'Бункер-накопитель с дозатором',short:'Бункер-накопитель',category:'systems',image:'00-10-696x392.webp',description:'Накопление сырья и дозированная подача в оборудование.',detail:'Бункер со шнековым дозатором для накопления и подачи сырья в экструдер, шнековый питатель или агломератор.',original:'prod10.html'},
 {id:'filter',name:'Шиберный фильтр непрерывной работы',short:'Шиберный фильтр',category:'granulation',image:'00-11-696x392.webp',description:'Очистка расплава без остановки экструдера.',detail:'Фильтр с четырьмя сменными элементами диаметром 200–250 мм предназначен для очистки расплава без остановки экструдера.',original:'prod11.html'},
 {id:'shafts',name:'Шнеки и валы фрикционных моек',short:'Шнеки и валы',category:'systems',image:'00-13-696x392.webp',description:'Узлы для линий переработки, в том числе из нержавеющей стали.',detail:'Отбалансированные валы фрикционных моек и конвейерные шнеки, в том числе из нержавеющей стали.',original:'prod13.html'},
 {id:'bearing',name:'Узел упорного подшипника экструдера',short:'Узел упорного подшипника',category:'systems',image:'00-14-696x392.webp',description:'Подшипниковый узел для высоких осевых нагрузок.',detail:'Узел для установки на цилиндрический редуктор экструдера заказчика, рассчитанный на высокие осевые нагрузки.',original:'prod14.html'}
];
const categories = {line:'Линии под ключ',washing:'Мойка и сушка',granulation:'Грануляция',systems:'Узлы и системы'};
const $ = id => document.getElementById(id);
const params = new URLSearchParams(location.search);
let activeFilter = Object.hasOwn(categories,params.get('category')) ? params.get('category') : 'all';
let expandedCatalog = false;
const currentProduct = products.find(p=>p.id===params.get('product'));
const grid = $('product-grid');
function renderCatalog(){
 const matches = products.filter(p=>activeFilter==='all'||p.category===activeFilter);
 const visible = expandedCatalog ? matches : matches.slice(0,6);
 grid.replaceChildren();
 for(const p of visible){
  const a=document.createElement('a');a.className='product-card';a.href='index.html?product='+p.id;
  a.innerHTML='<div class="product-image"><img loading="eager" src="assets/'+p.image+'" alt="'+p.name+'"><span class="corner" aria-hidden="true">↗</span></div><div class="product-info"><div class="eyebrow">'+categories[p.category]+'</div><h3>'+p.short+'</h3><p>'+p.description+'</p></div>';
  grid.append(a);
 }
 $('results-count').textContent=visible.length+' / '+matches.length;
 $('show-more').hidden=expandedCatalog||matches.length<=6;
 document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===activeFilter)));
}
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{activeFilter=b.dataset.filter;expandedCatalog=false;renderCatalog()}));
$('show-more').addEventListener('click',()=>{expandedCatalog=true;renderCatalog()});
renderCatalog();
if(currentProduct){
 $('home-view').hidden=true;$('product-view').hidden=false;
 document.title=currentProduct.name+' — Химмаш';
 $('breadcrumb-product').textContent=currentProduct.short;
 $('product-title').textContent=currentProduct.name;
 $('product-category').textContent=categories[currentProduct.category]+' / НПО «Химмаш»';
 $('product-description').textContent=currentProduct.detail;
 $('product-inquiry').dataset.inquiry=currentProduct.name;
 const photos=currentProduct.photos||[currentProduct.image];
 $('product-photo').src='assets/'+photos[0];$('product-photo').alt=currentProduct.name+' — общий вид';
 for(let i=0;i<photos.length;i++){
  const b=document.createElement('button');b.className='thumb';b.setAttribute('aria-label','Фотография '+(i+1));b.setAttribute('aria-pressed',String(i===0));b.innerHTML='<img src="assets/'+photos[i]+'" alt="">';
  b.addEventListener('click',()=>{$('product-photo').src='assets/'+photos[i];$('product-photo').alt=currentProduct.name+' — фотография '+(i+1);document.querySelectorAll('.thumb').forEach(t=>t.setAttribute('aria-pressed',String(t===b)))});
  $('gallery-thumbs').append(b);
 }
 $('gallery-thumbs').hidden=photos.length<2;
 if(currentProduct.id!=='centrifuge'){
  $('centrifuge-specs').hidden=true;$('product-commercial').hidden=true;
  document.querySelectorAll('.centrifuge-only').forEach(el=>el.hidden=true);
  $('generic-inquiry').hidden=false;$('detailed-specs').hidden=true;$('generic-details').hidden=false;
  $('specs-title').textContent='Задача оборудования';$('generic-description').textContent=currentProduct.detail;
  $('generic-contact').dataset.inquiry=currentProduct.name;
 }
}
const menuButton=document.querySelector('.menu-toggle');
menuButton.addEventListener('click',()=>{const isOpen=menuButton.getAttribute('aria-expanded')==='true';$('mobile-nav').hidden=isOpen;menuButton.setAttribute('aria-expanded',String(!isOpen));menuButton.setAttribute('aria-label',isOpen?'Открыть меню':'Закрыть меню');menuButton.textContent=isOpen?'☰':'×'});
$('mobile-nav').querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{$('mobile-nav').hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Открыть меню');menuButton.textContent='☰'}));
const inquiry=$('inquiry-dialog'),media=$('media-dialog');
function openInquiry(subject){
 $('inquiry-subject').textContent=subject;$('form-view').hidden=false;$('success-view').hidden=true;
 $('contact-error').textContent='';$('contact-value').removeAttribute('aria-invalid');
 $('inquiry-form').reset();inquiry.setAttribute('aria-labelledby','inquiry-title');inquiry.showModal();document.body.style.overflow='hidden';
}
document.querySelectorAll('[data-inquiry]').forEach(b=>b.addEventListener('click',()=>openInquiry(b.dataset.inquiry)));
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>$(b.dataset.close).close()));
for(const d of [inquiry,media]){
 d.addEventListener('close',()=>{document.body.style.overflow=''});
 d.addEventListener('click',event=>{if(event.target===d){const r=d.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)d.close()}});
}
function showMedia(src,caption){$('media-photo').src=src;$('media-photo').alt=caption;$('media-caption').textContent=caption;media.showModal();document.body.style.overflow='hidden'}
$('zoom-product').addEventListener('click',()=>showMedia($('product-photo').src,$('product-photo').alt));
document.querySelectorAll('[data-document]').forEach(b=>b.addEventListener('click',()=>showMedia('assets/'+b.dataset.document,b.dataset.caption)));
$('contact-value').addEventListener('input',()=>{$('contact-error').textContent='';$('contact-value').removeAttribute('aria-invalid')});
$('inquiry-form').addEventListener('submit',event=>{
 event.preventDefault();
 const field=$('contact-value'),value=field.value.trim(),digits=value.replace(/\D/g,'');
 const valid=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)||(/^[+\d\s()\-]+$/.test(value)&&digits.length>=10&&digits.length<=15);
 if(!valid){$('contact-error').textContent=value?'Проверьте телефон или email: нужен номер с кодом страны или адрес с @.':'Укажите телефон или email, чтобы инженер мог с вами связаться.';field.setAttribute('aria-invalid','true');field.focus();return}
 const button=event.submitter;button.disabled=true;button.textContent='Проверяем…';
 setTimeout(()=>{
  $('form-view').hidden=true;$('success-view').hidden=false;
  inquiry.removeAttribute('aria-labelledby');inquiry.setAttribute('aria-label','Предпросмотр подтверждения обращения');
  button.disabled=false;button.innerHTML='Связаться с инженером <span class="arrow" aria-hidden="true">↗</span>';
  $('inquiry-form').reset();$('success-view').querySelector('button').focus();
 },450);
});

