const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// return's a new array containing the first two drivers
const returnFirstTwoDrivers = function () {
    let newDrivers = drivers.slice(0,2);
    return newDrivers;
};

returnFirstTwoDrivers(drivers);

// return's a new array containing the last two drivers
const returnLastTwoDrivers = function () {
    let newDrivers2 = drivers.slice(-2);
    return newDrivers2;
};

returnLastTwoDrivers(drivers);

// array of the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// higher-order function 
function createFareMultiplier (num) {
    return function (fare) {
        return fare * num
    }
}

// is a function that doubles fares
const fareDoubler = function (fare) {
    return createFareMultiplier(2)(fare)
}

// is a function that triples fares
const fareTripler = function (fare) {
    return createFareMultiplier(3)(fare)
}


function selectDifferentDrivers(drivers, func) {
    return func(drivers);
};


// you can console.log to confirm
selectDifferentDrivers(drivers, returnFirstTwoDrivers);
selectDifferentDrivers(drivers, returnLastTwoDrivers);