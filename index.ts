
//Arrays  - collection of things

// indexing start 0

let students:string[] = ['John', 'jane', 'Mary', 'noman'];
let ids:number[] = [1,2,3,4];

//iterate over array
// for loop

console.log(students.length)

for (let i=0; i<students.length; i++){
    
    if(i % 2 ===0){
        console.log(students[i])
    }
}



//forEach

 students.forEach((stu,index)=>{
    if(index % 2 ===0){
        console.log(stu)
    }
})



//map



console.log("map")


let showSudents = (stu:string, index:number) => {
    return stu + " " + index
};


 let values = students.map(showSudents)
 console.log(values)



 // filter method 

    console.log("filter")
 let filterStudents = students.filter((stu,index)=>{
    return index %2!==0
 })


 console.log(filterStudents)


 let data = [1,2 ,3, 4,5 ,6,8,9,4,7,12,16,17,19]

 let filterData =  data.filter((index)=>{
    return index %2!==0
 })

console.log(filterData)

//reduce method 

console.log("reduce")

let sum = data.reduce((result, index)=>{
    console.log(result, index)
    return result + index
})

console.log(sum)

let avg = data.reduce(
    (result, index, array)=>{

        let len = data.length

        result += index
        if(len-1 === index){
            return result/len
        }
        return result

    }
)
console.log("avg",avg)

//unshift method

// data.unshift(0)
// data.push(0)


// console.log(data.shift());
// console.log(data.pop());

//splice method 

let result =  data.splice(3,8)
console.log(result)

//include method

let students1:string[] = ['John', 'jane', 'Mary', 'noman', 'ali','khan'];

let isExist = students1.includes('Ali')

//findIndex

let index = students1.findIndex(stu=>{

    return stu === 'ali'
})

console.log(index)

let newData = [1, 2, 4, 5, 20, 8, 9, 4, 7, 12, 16, 23, 19,3];
let sortedData = newData.sort((a,b)=>a-b)

//reverse method
let reverseData = sortedData.reverse()
console.log(sortedData)

















