
let hivesForChoose = [];

// Используем цикл for для заполнения массива числами от 1 до 13
for (let i = 1; i <= 13; i++) {
    hivesForChoose.push({
        id: i,
        img: "src/assets/apiary" + i + ".png",
        info: ""

    });
}

export default hivesForChoose 