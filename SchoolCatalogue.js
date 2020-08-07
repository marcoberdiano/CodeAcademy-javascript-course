class School {
    constructor(name,level,numberOfStudents,averageTestScores, schoolOverview){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
        this._averageTestScores = averageTestScores;
        this._schoolOverview = schoolOverview;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    get averageTestScores(){
        return this._averageTestScores;
    }
    get schoolOverview(){
        return this._schoolOverview;
    }
    set numberOfStudents(newNumberOfStudents){
        if(Number.isInteger(newNumberOfStudents)){
            this._numberOfStudents = newNumberOfStudents;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.');
        }
    }
    quickFacts(){
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers){
      const randomTeacher = Math.floor(Math.random()*substituteTeachers.length);
      return substituteTeachers[randomTeacher];
    }
}

class PrimarySchool extends School{
    constructor(name, level, numberOfStudents, pickUpPolicy){
        super(name,level,numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }
    get pickUpPolicy(){
        return this._pickUpPolicy;
    }
    set pickUpPolicy(policy){
      this._pickUpPolicy = policy;
    }
}

class MiddleSchool extends School {
    constructor(name, level, numberOfStudents){
        super(name,level,numberOfStudents);
    }
}

class HighSchool extends School {
    constructor(name, level, numberOfStudents, sportsTeams){
        super(name,level,numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams(){
        return this._sportsTeams;
    }
}

class SchoolCatalog {
  constructor(schools){
    this._schools = [schools];
  }
  get schools(){
    return this._schools;
  }
  addSchools(school){
      this._schools.push(school);
  }
}

lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 'primary',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

alSmith = new HighSchool('Al E. Smith','high', 415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

console.log(alSmith.sportsTeams);

const primarySchools = new SchoolCatalog(lorraineHansbury);
const middleSchools = new SchoolCatalog();
const higthSchools = new SchoolCatalog(alSmith);

console.log(primarySchools.schools);