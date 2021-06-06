// Создаем переменные
const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "http://aws.random.cat//meow";
//Создаем функцию для ассинхронного запроса и отлова ссылки на изображение
async function fetchHandler() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        image.src = data.file;
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
//Задаем событие для клика на кнопку => замена картинки
button.addEventListener("click", () => {
    let isLoaded = image.complete;

    if (isLoaded) {
    fetchHandler();
    }
});