//> < == <= >=  bu operatorlar birinchi ikkala tomonni raqamga ogirib oladi
// console.log(0 == false);
// Boolean ni raqamga ogirganda
// false -> 0
// true -> 1
// '' -> 0
// String ni ichidagi hariflarni raqamga ogira olmidi chunki raqamga ogirganda NaN boladi
// ' ' -> NaN
// "10" -> 10
// null -> 0
// undefined -> NaN
// [] -> true
// {} -> true

// null == undefined // true
// null va undefined faqat bir biriga teng
// console.log(null == undefined);

// null tenglik ishorasi null ni 0 ga ogirmaydi
// console.log(null > -1);// true (null(0) > -1)



// 1. Test
//  console.log((null == undefined) == (null >= 0)); //true
// Answer:
/*
    
    (A). true
    B. false
    C. SyntaxError
*/



// 2. Test
/*
    function base(a = 10, b = base){
        return a + base(10)
    }
    console.log(base(20)); //RangeError
*/
// Answer:
/*
    A. 30
    B. 20
    C. NaN
    (D). RangeError
    E. SyntaxError  
*/



// 3. Test
/* 
    const plus = (a, b) => a * b;
    console.log(plus(14n, 2)); // TypeError
*/
// Answer:
/* 
    A. 28n
    B. 28
    C. NaN
    (D). TypeError
    E. ReferenceError
*/

// sonning oxirida `n` kelsa bu bigInt ga kiradi
// !Number ni eng maximal qiymati: (2 ** 53) - 1 ; ga teng
// BigInt big init da ammallar bajarish uchun har bir sonning raqami oxirida `n` bolishi kerak
// !Number bn BigInt da amallar bajarib bolmidi



// 4. Test
/*
    let i = 0
    let id = setInterval(() => {
        console.log(++i)
        if(i >= 5) clearInterval(id)
    }, 100)
*/
// Answer:
/*
    (A). 1, 2, 3, 4, 5
    B. 0, 1, 2, 3, 4, 5
    C. 0, 1, 2, 3, 4
    D, ReferenceError
    E. TypeError
*/



// 5. Test
/* 
    let object = {
        n1: 25,
        n2: 10,
        n3: 30,
        n4: 5
    }
    Object.defineProperty(object, "n3", {
        enumerable: false
    })

    console.log(object)
*/
// Answer:
/*
    A. 40
    (B). "25105"
    C. 70
    D. ReferenceError
    E. TypeError
*/



// 6. Test
/* 
    let i = 0;
    for(){
        if(i == 3) break;
        console.log(i++)
    }
*/
// Answer:
/*
    A. 0, 1, 2, 3
    B. 0, 1, 2
    (C). SyntaxError
    D. ReferenceError
    E. TypeError
*/



//7. Test
/* 
    if(" "){
        let x = 89;
    };
    (function(n){
        // x degan ozgaruvchi bolmasa global ga this.x ni qoshadi va past da chaqiradigan bolsek x ni qiymatini olib beradi
        this.x = n
    })(56)
    console.log(x)
*/
// Answer:
/*
    A. 89
    (B). 56
    C. ReferenceError
    D. TypeError
    E. SyntaxError
*/



// 7. Test
/* 
    let res = (b => b > (!b >= 1))(!true)//false
    let funcs = [
        (n) => console.log(n * 2),
        (n) => console.log(n + 3)
    ]
    switch(res){
        default: funcs[+res](res)
        case false: funcs[res + 1](res) // 3
        case true: funcs[res - 0](res) // 0 
    }
*/
// Answer:
/*
    (A). 3, 0
    B. 4
    C. NaN
    D. 0, 3
    E. SyntaxError
*/



// 8. Test
/* 
    const parents = () => {
        const x = 10
        return function() {
            x = 25
            return () => {
                let x = 10
                return x
            }
        }
    }
    console.log(parents()()())
*/
// Answer:
/*
    A. 10   
    B. 25
    C. undefined
    (D). TypeError
    E. ReferenceError
*/


// 9. Test
/* 
    let func = (callback, n) => {
        return callback( (n) => n * n)
    }
    func((x) => console.log(typeof x))
*/
// Answer:
/*
    (A). Function
    B. Number
    C. Object
    D. NaN
    E. TypeError
*/



// 11. Test
/* 
    function main({letter: A, word: B }, arr = []){
        let object = {
            [A]: A,
            B: B
        }
        for(let key in object){
            arr[arr.length] = object[A]
            arr[arr.length] = object[B]
        }

        return arr
    }
    console.log(
        main({letter: 'Name', word: 'Surname'})
    )
*/
// Answer:
/*
    A. ['letter', 'word']
    B. ['A', 'B']
    C. ["Name", "Surname"]
    D. ["Name", "Surnaem", "Name", "Surname"]
    (E). ["Name", "undefined", "Name", "undefined"]
*/



//12. Test
/* 
    String.prototype.hasA = function(){
        if("a" in this) return true
        else return false
    }

    let str = "olma"
    console.log(str.hasA())
    //console.log(1 in [1, 0])//Array da in orqali indeksini olishimiz mumkin yani 1 [1, 0] ni ichida bormi degande boladi true yoki false qaytaradi
    //console.log(x in {x: 10}) //Object da in orqali key ni olishimiz mumkin yani x {x: 10} ni ichida bormi degande boladi true yoki false qaytaradi
*/
// Answer:
/* 
    A. ReferenceError
    B. TypeError
    C. undefined
    D. true
    (E). false
*/



//13. Test
/* 
    let arr1 = [1,2,3]
    let arr2 = [1,2,3]

    let copiedArr1 = arr1
    let copiedArr2 = [...arr2]

    copiedArr1[1] = 25
    copiedArr2[1] = 10
    console.log(arr1, arr2)
*/
// Answer:
/*
    (A). [1, 25, 3] [1, 2, 3]
    B. [1, 25, 3] [1, 10, 3]
    C. [1, 2, 3] [1, 2, 3]
    D. SyntaxError
    E. TypeError
*/



//14. Test
/* 
    //Bu yerda hato berilgan chunki map letters ni topa olmayabdi
    let mapped = letters.map((el, i, arr) => {
        arr[arr.length - i - 1] 
    })

    const letters = ["A", "B", "C", "D", "E"]
    console.log(mapped)
*/
// Answer:
/*
    A. ["D", "C", "B", "A"]
    B. [undefined, undefined, undefined, undefined]
    C. ["A", "B", "C", "D"]
    D. SyntaxError
    (E). ReferenceError    
*/



// 15. Test
/* 
    let result = Array.from("h|a|c|k|e|r").filter( function(x, y, z) {
        if(x == '|') return x + y
    })
    console.log(result)
*/
// Answer:
/* 
    A. ["|", "|", "|", "|", "|"]
    B. ["h|", "a|", "c|", "k|", "e|", "r|"]
    c. ["h|", "a|", "c|", "k|", "e|"]
    D. TypeError
*/



// 16. Test
/* 
    global.meva = "gilos"
    const main = () => {
        //Arrow funciton ni ozini scope boladi va shuning uchunham bu yerda this ishlamidi
        this.meva = "shoptoli"
    }

    function base(){
        this.meva = "anor"
    }

    base()
    main()

    console.log(meva)
*/
// Answer:
/*
    A. gilos
    B. shoptoli
    (C). anor
    D. ReferenceError
*/


//17. Test
/*
    let person = {
        firstName: "Ali",
        lastName: "Holiqov",
        getName (x) {
            return this.firstName
        }
    }
    console.log(person.getName())
*/
// Answer:
/*
    A. undefined
    (B). Ali
    C. {}
    D. SyntaxError
    E. TypeError
*/



// 18. Test
/* 
    let person = {
        firstName: "Ali",
        lastName: "Holiqov",
        set getName (x){
            this.lastName = x
            //set hardoim return da undefined qaytaradi va qaytarmidi!
            return this.firstName
        }
    }
    person.getName = "Nosir"

    console.log(person.lastName)
*/
// Answer:
/*
    A. undefined
    B. Ali
    C. Nosir
    D. SyntaxError
    E. TypeError
*/



// 19. Test
/*
    let person = {}
    Object.defineProperties(person, {
        name: {
            value:"Halil",
            writable: true
        },
        surname: {
            value: "Hikmatov",
            enumerable: true
        }
    })
    person.surname = "Nosirov"
    console.log(person)
*/
// Answer:
/*
    A. {}
    B. {name: "Halil", surname: "Nosirov"}
    C. {name: "Halil", surname: "Hikmatov"}
    D. {surname: Hikmatov}
    E. SyntaxError
*/



// 20. Test
/* 
    let letters = ["A", "B", "C", "D"]
    let index = letters.some(el => el == "C")
    let newLetters = letters.slice(index).reverse().join("")
    console.log(newLetters)
*/
// Answer:
/* 
    A. CD
    B. BCD
    C. DC
    (D). DCB
    E. ["D", "C", "B"]
    F. TypeError
*/



//21 Test
/* 
    let letters =["A", "B", "C", "D"]
    let mapped = letters.map((...elements) => {
        return elements[0] + elements[1]
    })
    console.log(mapped)
*/
// Answer:
/* 
    (A). ["A0", "B1", "C2", "D3"]
    B. ["AB", "AB", "AB", "AB"]
    C. [undefined, undefined, undefined, undefined]
    D. TypeError
    E. SyntaxError
*/



//22 Test
// console.log([5] - [2] === 3);
// Answer:
/*
    A. true
    B. false
    C. SyntaxError
*/



//23. Test
/* 
    let array = [4, 5, 6]
    let object = {x:4, y:5, z:6}
    let string  = "Hello world"

    delete array[2]
    delete string[2]
    delete object["z"]

    console.log(
        array.length,
        string.length,
        Object.keys(object).length
    )
*/
// Answer:
/* 
    A. 3 11 3
    B. 2 10 2
    (C). 3 11 2
    D. SyntaxError
    E. TypeError
*/



//24 Test
/* 
function main(call, n){
    return call((x) => x * (n + 1))
}
let result = main((hello) => hello(5), 10)

console.log(result);
*/

/* 
    A. 55
    B. 50
    C. 555
    D. TypeError
    E. ReferenceError
*/



//25. Test
/* 
let meva = "olma"
if(true){
    var meva = "gilos"
}
console.log(meva)
*/
// Answer:
/* 
    A. olma
    B. gilos
    (C). SyntaxError
    D. TypeError
    E. ReferenceError
*/



// 26. Test
/* 
    let obj = {}
    Object.defineProperty(obj, "x", {
        value: 10,
        enumerable: true
    })

    //Bu yerda hato qaytaradi chunki x ni ikkimarta elon qilyabdi shunga object dagi keylarni 2 marta 
    Object.defineProperty(obj, "x", {
        value: 25,
        enumerable: false
    })

    console.log(obj)
*/
// Answer:
/*
    A. {}
    B. {x: 25}
    C. {x: 10}
    (D). TypeError
    E. ReferenceError
*/

//26, Test
/* 
    let data = "olma" && true || null
    let anotherData = data && [8, 9] || 3
    console.log(anotherData)
*/
// Answer:
/* 
    A. null
    B. 3
    (C). [8, 9]
    D. true
    E. olma
*/



//27. Test
/* 
    let nums = [7, 8, 9, 10]
    let sum = nums.reverse().splice(true).reduce((x, y, z, w) => {
        return x * nums[nums.length - 1]
    })

    console.log(630 * 10)
*/
// Answer:
/*
    A. 900
    B. 5040
    (C). 6900
    D. NaN
    E. TypeError
*/



//28. Test
/* 
let x = null ?? 20
let y = null || 20

console.log(x, y)
*/
// Answer:
/* 
    A. null, 20
    B. null, null
    C. 20, null
    (D). 20, 20
*/



//29. Test
// console.log(+null >= !!' ') //false
// Answer:
/* 
    A. true
    B. false
    C. SyntaxError
*/
