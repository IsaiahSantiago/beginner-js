
/
function checkResolution(width, height) {
  // Return "landscape" if width is greater than height
  // Return "portrait" if height is greater than or equal to width

// let width = 15;
// let height = 10;  

// const landscape = resolution(1920,1080);


if (width > height)
{

console.log('landscape'); 
}

else if (height >= width){
  // let width = 500;
  // let height = 500;  
  
  console.log('portrait');

}

// else{

// }

// return width && height;

}

// console.log(resolution);


///////////////////

// const numOfMonitors = monitorCount(5,4);

// function monitorCount(rows, columns){

// return rows * columns;

// };

// console.log(numOfMonitors);

// // monitorCount();

///////

// const totalCost = costOfMonitors(5, 4); 

// function monitorCount(rows, columns) {
//   return rows * columns;


// }

// function costOfMonitors (rows , columns) {

// return monitorCount(rows, columns) * 200;

// };

// console.log(totalCost);








  // console.log(Math.ceil());

  // console.log(width.isInteger(10));
  
  // console.log(height.isInteger(10));

  





// }

module.exports = checkResolution;








