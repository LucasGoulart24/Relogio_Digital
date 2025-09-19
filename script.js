function updateTime() {
    const timeElement = document.getElementById('time');
    const yearElement = document.getElementById('ano');
    const dateElement = document.getElementById('data');
    const now = new Date;

    // Horaio 
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0'); 
    const timeString = `${hours}:${minutes}:${seconds}`;
    timeElement.textContent = timeString;

    // Ano
    const year = now.getFullYear();
    yearElement.textContent = year;

    // Data
    const day = now.getDate().toString().padStart(2, '0');
    const mouth = (now.getMonth() + 1).toString().padStart(2, '0');
    const dataString = `${day}/${mouth}/${year}`;
    dateElement.textContent = dataString;
}

setInterval(updateTime, 1000);
updateTime();