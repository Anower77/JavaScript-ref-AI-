//Students details

var name = 'anower hossain'
var age = 20
var cgpa = 3.92
var lang = ['bangla', 'english','malaiya']


var student1 = {
    name : 'anower hossain',
    age : 20,
    cgpa : 3.92,
    lang : ['bangla', 'english']
}

var student2 = {
    name : 'rohan hossain',
    age : 20,
    cgpa : 3.92,
    lang : ['bangla', 'english']
}

var student3 = {
    name : 'nisan hossain',
    age : 20,
    cgpa : 3.92,
    lang : ['bangla', 'english']
}

var student4 = {
    name : 'shanto hossain',
    age : 20,
    cgpa : 3.92,
    lang : ['bangla', 'english']
}

//simple way 
//using object constuctor
function Students(name,age,cgpa,lang){
    this.name = name
    this.age = age
    this.cgpa = cgpa
    this.lang = lang

    this.display = function(){
                
        console.table(this.name)
        console.table(this.age)
        console.table(this.cgpa)
        console.table(this.lang)

    }
}


var student1 = new Students('anower', 22, 3.92, ['bangla','english','malaiya'])
var student2 = new Students('rohan', 22, 3.92, ['bangla','english','malaiya'])
var student3 = new Students('sahadat', 22, 3.92, ['bangla','english','malaiya'])
var student4 = new Students('shanto', 22, 3.92, ['bangla','english','malaiya'])


student1.display()
student2.display()
student3.display()
student4.display()