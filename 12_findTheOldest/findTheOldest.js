const findTheOldest = function(people) {
    people.forEach(person => {
        if (!("yearOfDeath" in person)) {
            const date = new Date()
            person.yearsLived = date.getFullYear() - person.yearOfBirth
        } else {
            person.yearsLived = person.yearOfDeath - person.yearOfBirth
        }
    })
    people.sort((a, b) => (a.yearsLived < b.yearsLived) ? 1 : -1)
    return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
