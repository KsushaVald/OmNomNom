# OmNomNom
Test React application 

Тестовое приложение, реализованное на React. Представляет собой страницу с карточкми товаров (кошачий корм). При клике на активную карточку происходит выбор товара, карточка меняет цвет. Если товара нет, то карточка отображается, как неактивная. 

Ссылка на хостинг: http://omnomnom.kvald.tw1.ru/

Структура приложения:
В папке src содержится главный файл index.jsx - реализует рендеринг приложения, так же в нём находится основной компонент приложения OmNomNom.
Для удобства реализации приложение было разделено на следующие React-копоненты:
  * Layout - основнной контейнер приложения;
  * Header - заголовок приложения;
  * CardList - реализуется список карточек, так же в даннном компоненте находится компонент: 
    * Card - Карточка товара с функционалом.  

Так же в паке src назходится папка fonts,  в которой содержаться все необходимый шрифты, 
папка img - содержит изображения, и файл main.global.css - файл основных стилей.

Сборка проекта для дальнейшей разработки/корректировок: npm run dev.
Сборка конечного продукта: npm run build:prod.

Результат сборки будет находиться в папке dist.

Проект реализован по макету Figma (pixelPerfect).
