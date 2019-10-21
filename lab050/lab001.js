function randomNum(minNum, maxNum) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            //或者 Math.floor(Math.random()*( maxNum - minNum + 1 ) + minNum );
            break;
        default:
            return 0;
            break;
    }
}

//测试
function getNextWaitTime() {
    //20%的几率会停顿5-10分钟
    //60%的几率会停顿2-5分钟
    //20%的几率会停顿30秒-2分钟

    var waitSecond = 30;
    var rate = randomNum(1, 100);
    if (rate >= 1 && rate <= 20) {//5-10分钟
        waitSecond = randomNum(5 * 60, 10 * 60)
    } else if (rate > 20 && rate <= 80) {//2-5分钟
        waitSecond = randomNum(2 * 60, 5 * 60)
    } else {//30秒-2分钟
        waitSecond = randomNum(30, 2 * 60)
    }

    waitSecond = waitSecond * 1000;
    //再加上一个随机数
    waitSecond += randomNum(1, 1000);
    return waitSecond;
}
console.log(getNextWaitTime());
