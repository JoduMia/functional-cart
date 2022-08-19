// const plus = document.getElementById('plus');
// const parent = document.getElementById('parent');
// const cancel = document.getElementById('cancel');
// const cross = document.getElementById('cross');
// const minus = document.getElementById('minus');
// const count = document.getElementById('count');
// const price1 = document.getElementById('price1');
// const price1Value = parseInt(price1.innerText);
// let countValue = count.value;
// let sum = price1Value * countValue



// plus.addEventListener('click', function () {
//     countValue++;
//     count.value = countValue;
//     sum = price1Value * countValue
//     price1.innerText = sum;
// })

// minus.addEventListener('click',function () {
//     if(countValue>1){
//     countValue--;
//     count.value = countValue;
//     sum = price1Value * countValue
//     price1.innerText = sum;
//     }
// })

// count.addEventListener('keyup', function (event) {
//     let getvalue = event.target.value;
//     const sum = price1Value * getvalue;
//     price1.innerText = sum;
// })


// cross.addEventListener('click', function () {
//     parent.removeChild(cancel);
// })





// const plus2 = document.getElementById('plus2');
// const cancel2 = document.getElementById('cancell');
// const cross2 = document.getElementById('cross2');
// const minus2 = document.getElementById('minus2');
// const count2 = document.getElementById('count2');
// const price2 = document.getElementById('price2');
// const price1Value2 = parseInt(price2.innerText);
// let countValue2 = count2.value;
// let sum2 = price1Value2 * countValue2;



// plus2.addEventListener('click', function () {
//     countValue2++;
//     count2.value = countValue2;
//     sum2 = price1Value2 * countValue2
//     price2.innerText = sum2;
// })

// minus2.addEventListener('click',function () {
//     if(countValue2>1){
//     countValue2--;
//     count2.value = countValue2;
//     sum2 = price1Value2 * countValue2
//     price2.innerText = sum2;
//     }
// })

// count2.addEventListener('keyup', function (event) {
//     let getvalue2 = event.target.value;
//     const sum2 = price1Value2 * getvalue2;
//     price2.innerText = sum2;
// })


// cross2.addEventListener('click', function () {
//     parent.removeChild(cancell);
// })

function addOrRemove(elementId, isIncrease) {
    const element = document.getElementById(elementId);
    const elementPreviousValue = element.value;
    let elementNum = parseInt(elementPreviousValue);
    if(isIncrease){
        elementNum++;
        element.value = elementNum;
    } else {
        if(elementNum>1){
            elementNum--;
            element.value = elementNum;
        } else {
            alert('Carting number must be greater than or equal to 1.')
        }
    }
    return elementNum;
}

// const price = document.getElementById('price1');
// const priceValue = parseInt(price.innerText);
// document.getElementById('plus').addEventListener('click', function () {
//     const itemNum = addOrRemove('count', true);
//     const finalPrice = itemNum * priceValue;
//     price.innerText = finalPrice;
// });

// document.getElementById('minus').addEventListener('click', function () {
//     const itemNum = addOrRemove('count', false);
//     const finalPrice = itemNum * priceValue;
//     price.innerText = finalPrice;
// });




// document.getElementById('minus2').addEventListener('click', function () {
//     const itemNum = addOrRemove('count', false);
//     const finalPrice = itemNum * priceValue2;
//     price2.innerText = finalPrice;
// });



function calPrice(listenid, innertextid, countingId, isIncrease) {
    const price = document.getElementById(innertextid);
    const priceValue = parseInt(price.innerText);
    document.getElementById(listenid).addEventListener('click', function () {
        if(isIncrease) {
            const itemNum = addOrRemove(countingId, true);
            const finalPrice = itemNum * priceValue;
            price.innerText = finalPrice;
        } else {
            const itemNum = addOrRemove(countingId, false);
            const finalPrice = itemNum * priceValue;
            price.innerText = finalPrice;
        }
    });
}
calPrice('plus', 'price1', 'count', true);
calPrice('minus', 'price1', 'count', false);

calPrice('plus2', 'price2', 'count2', true);
calPrice('minus2', 'price2', 'count2', false);


