// https://leetcode.com/problems/watering-plants

/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function(plants, capacity) {
    let i;
    let totalStep=0;
    let currentStep=0;
    let cap = capacity;
    
    for(i=0; i<plants.length ; i++){
        if(cap<plants[i]){
            totalStep+=currentStep;
            currentStep+=1;
            cap=capacity;
            totalStep+=currentStep;
            cap=cap-plants[i];
        }   
        else {
            cap = cap-plants[i];
            currentStep+=1;
            totalStep+=1;
        }
    }
    return totalStep;
};