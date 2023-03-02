
class Student {
    firstName = undefined;
    lastName = undefined;
    yearBirth = undefined;
    /**
     * создание переменных для класса
     * @type {[]}
     */
    grades = [];
    /**
     * @type {[]}
     */
    attendance = [];
    /**
     * счетчик для посещений
     * @type {{absent: number, present: number}}
     */
    count = {present: 0, absent: 0};

    constructor() {
        this.generateGrades();
        this.generateAttendance();
    }
    /**
     * выводим возраст по году рождения
     * @returns {number}
     */
    getAge(){
        let currentYear = new Date().getFullYear()
        return currentYear - this.yearBirth;
    }
    /**
     * считаем рандомный вывод оценок
     */
    generateGrades(){
        for(let i = 0; i <= 10; i++) {
            this.grades[i] = this.getRandom(70, 100);
        }
    }
    /**
     * округление оценок
     * @param min
     * @param max
     * @returns {number}
     */
    getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    /**
     * заполняет пустой массив
     */
    generateAttendance(){
        for(let i = 0; i < 25; i++) {
            this.attendance[i] = undefined;
        }
    }
    /**
     * проверка ключей посещения-отсутсвия
     * @param value
     */
    addToAttendance(value){
        let key = this.getEmptyKey();
        if(key) {
            this.attendance[key] = value;
        }else {
            this.attendance.push(value);
        }
    }
    /**
     * провепка посещений
     * @returns {Student}
     */
    present(){
        this.addToAttendance(true);
        this.count.present++;
        return this;
    }
    /**
     * проверка пропусков
     * @returns {Student}
     */
    absent(){
        this.addToAttendance(false);
        this.count.absent++;
        return this;
    }
    /**
     * @returns {string}
     */
    getEmptyKey(){
        for(let i in this.attendance) {
            if(!this.attendance[i]){
               return i;
            }
        }
    }

    /**
     * @param value
     * @returns {number}
     */
    getArrayAverage(value){
        return value.reduce((a, b) => (a + b)) / value.length;
    }
    /**
     * возврат сообщнеий по суммарному значению баллов и посещений
     * @returns {string}
     */
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

    /**
     * @param value
     * @returns {Student}
     */
    setFirstName(value) {
        this.firstName = value;
        return this;
    }

    /**
     *
     * @param value
     * @returns {Student}
     */
    setLastName(value){
        this.lastName = value;
        return this;
    }

    /**
     * @param value
     * @returns {Student}
     */
    setYearBirth(value){
        this.yearBirth = value;
        return this;
    }

    /**
     * форма для вывода информации в консоль
     */
    printInfo() {
       console.log(
           'Фамилия: ' + this.firstName + '\n' +
           'Имя: ' + this.lastName + '\n' +
           'Возраст: ' + this.getAge() + '\n' +
           'Итог: ' + this.summary() + '\n' +
           '------------------------------'
       );
    }
}

new Student()
    .setFirstName('Oleg')
    .setLastName('Petrov')
    .setYearBirth(2007)
    .absent().absent().absent()
    .present().present().present().present().present().present().present()
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
    .absent().absent()
    .present().present().present().present().present().present()
    .printInfo()