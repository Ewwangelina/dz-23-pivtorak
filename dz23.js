
class Student {
    firstName = undefined;
    lastName = undefined;
    yearBirth = undefined;
    /**
     * создание переменных для класса
     * @type {[]}
     */
    grades = [];
    attendance = [];
    count = {present: 0, absent: 0}; // счетчик для посещений


    constructor() {
        this.generateGrades();
        this.generateAttendance();
    }
    // выводим возраст по году рождения
    getAge(){
        let currentYear = new Date().getFullYear()
        return currentYear - this.yearBirth;
    }
    // считаем рандомный вывод оценок
    generateGrades(){
        for(let i = 0; i <= 10; i++) {
            this.grades[i] = this.getRandom(70, 100);
        }
    }
    getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    // заполняет пустой массив
    generateAttendance(){
        for(let i = 0; i < 25; i++) {
            this.attendance[i] = undefined;
        }
    }
    // проверка ключей посещения-отсутсвия
    addToAttendance(value){
        let key = this.getEmptyKey();
        if(key) {
            this.attendance[key] = value;
        }else {
            this.attendance.push(value);
        }
    }
    present(){
        this.addToAttendance(true);
        this.count.present++;
        return this;
    }
    absent(){
        this.addToAttendance(false);
        this.count.absent++;
        return this;
    }
    getEmptyKey(){
        for(let i in this.attendance) {
            if(!this.attendance[i]){
               return i;
            }
        }
    }
    getArrayAverage(value){
        return value.reduce((a, b) => (a + b)) / value.length;
    }
    // возврат сообщнеий по суммарному значению баллов и посещений
    summary(){
        let aGrade = this.getArrayAverage(this.grades);
        let aPresent = this.count.present / this.attendance.length;
        if(aGrade >= 90 && aPresent > 0.9) {
            return 'Молодец!';
        }else if(aGrade < 90 && aPresent < 0.9){
            return 'Хорошо, но можно лучше';
        }
        else if(aGrade >= 90 || aPresent > 0.9) {
            return 'Редиска!';
        }
    }
    setFirstName(value) {
        this.firstName = value;
        return this;
    }
    setLastName(value){
        this.lastName = value;
        return this;
    }
    setYearBirth(value){
        this.yearBirth = value;
        return this;
    }
    printInfo() {
       console.log(
           'Фамилия: ' + this.firstName + '\n\r'
           + 'Имя: ' + this.lastName + '\n\r'
           + 'Возраст: ' + this.getAge() + '\n\r'
           + 'Итог: ' + this.summary() + '\n\r'
           + '------------------------------'
       );
    }
}

new Student()
    .setFirstName('Oleg')
    .setLastName('Petrov')
    .setYearBirth(2007)
    .absent().absent().absent()
    .present().present().present().present().present()
    .printInfo()

new Student()
    .setFirstName('Marta')
    .setLastName('Kolesnikova')
    .setYearBirth(1998)
    .absent().absent().absent().absent()
    .present().present().present().present().present().present().present().present()
    .printInfo()

new Student()
    .setFirstName('Petr')
    .setLastName('Kovalenko')
    .setYearBirth(1994)
    .absent()
    .present().present().present().present()
    .printInfo()