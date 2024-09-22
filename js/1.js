let car = {
    manufacturer: "Rolls-Royse",
    model: "Ghost",
    year: 2009,
    AverageSpeed: 150,
};

function Info(obj) {
    let INF = "Производитель: " + obj.manufacturer + "\n"
        + "Модель: " + obj.model + "\n"
        + "Год выпуска: " + obj.year + " г\n"
        + "Средняя скорость: " + obj.averageSpeed + " км/ч";
    alert(INF);
}

function Travel() {

    let distance = prompt("Введите расстояние (км): ");

    let time = Time(distance)

    alert("Средняя скорость: " + car.AverageSpeed + " км/ч\n"
        + "Расстояние: " + distance + " км\n"
        + "Время для преодоления: " + time + " ч");
}

function Time(distance) {
    let t = Math.round(
        (distance / car.AverageSpeed) * 100
        ) / 100;
    let ost = t % 1;

    ost = ost * 0.6;

    t = Math.floor(t) + ost;
    
    var BreakTime = Math.floor(t / 4);
    return (t + BreakTime).toFixed(2);
}
