class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        return this._name;
    }

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(num) {
        if (typeof num === 'number') {
            this.numberOfStudents = num;
        } else {
            console.log('Invalid input, numberOfStudents must be set to a number.');
        }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`);
    }

    static pickSubstituteTeachers(substituteTeachers) {
        const num = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[num];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeam) {
        super(name, 'high', numberOfStudents);
        this._sportsTeam = sportsTeam;
    }

    get sportsTeam() {
        return this._sportsTeam;
    }
}

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 11.');
const alSmith = new HighSchool('Al E. Smith', 415, ['Basketball', 'Baseball', 'Volleyball']);
console.log(alSmith.sportsTeam);
