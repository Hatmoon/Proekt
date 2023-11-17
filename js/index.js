
const articles = [
    {
        article_category: "Новости",
        title: "Профилактика мобильного мошенничества",
        release_time: "1 день",
        subtitle: "14.11.2023г. в общежитии и 15.11.2023г. в актовом зале БИИК СибГУТИ состоялась встреча студентов с заместителем начальника отдела полиции №2 Управления МВД России по г. Улан-Удэ подполковником полиции Данеевым И.В. и старшим оперуполномоченным Управления уголовного розыска МВД по Республике Бурятия майором полиции Цыренжаповым О.В.",
        article_image: "http://biik.ru/upload/iblock/d43/img_20231115_110824.jpg",
        article_views: "12K просмотров"
    }
]

const $article = document.querySelector('.articles')

articles.forEach(element => {
    let html = ''
    html += `
    <div class="article-category">
        <p>${element.article_category}</p>
    </div>
    <div class="article-release-time">
        <p>${element.release_time}</p>
    </div>
    <div class="article-title">
        <p>${element.title}</p>
    </div>
    <div class="article-subtitle">
        <p>${element.subtitle}</p>
    </div>
    <div class="article-title">
        <img src="${element.article_image}">
    </div>
    <div class="article-views">
        <p>${element.article_views}</p>
    </div>
    `
    $article?.insertAdjacentHTML('beforeend', html);
})