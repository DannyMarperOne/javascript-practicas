for (let i = 1; i <= 100; i++) {
    let divididoTres = i % 3;
    let dividifoCinco = i % 5;
    if (divididoTres  == 0 && dividifoCinco == 0) {
        console.log('Fizz Buzz');
    } else {
        if (divididoTres == 0) {
            console.log('Fizz')
        } else if (dividifoCinco == 0) {
            console.log("Buzz")
        } else {
            console.log('N/A');
        }
    }
}