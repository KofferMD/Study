const num = 50;

if (num < 49) {
    console.log("bla");
} else if (num > 100) {
    console.log("Too much");
} else {
    console.log("ok");
}

(num === 50) ? console.log("ok"): console.log("bla");


switch (num) {
    case 49:
        console.log("Error");
        break;
    case 100:
        console.log("Error");
        break;
    case 50:
        console.log("Good");
        break;
    default:
        console.log("haha");
        break;
}