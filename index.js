// Code your solution in this file!

function distanceFromHqInBlocks(streetNumber) {
    const hqLocation = 42;
    return Math.abs(streetNumber - hqLocation);
}


function distanceFromHqInFeet(streetNumber) {
    const blocks = distanceFromHqInBlocks(streetNumber);
    const feetPerBlock = 264;
    return blocks * feetPerBlock;
}

{
    function distanceTravelledInFeet(start, destination) {
        const startDistance = distanceFromHqInFeet(start);
        const destinationDistance = distanceFromHqInFeet(destination);
        return Math.abs(startDistance - destinationDistance);
    }
    
}


function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const distanceInFeet = Math.abs(destination - start) * feetPerBlock;

    if (distanceInFeet === 0) {
        return 0;
    } else if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        const chargeableDistance = distanceInFeet - 400;
        return Number((chargeableDistance * 0.02).toFixed(2));
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

