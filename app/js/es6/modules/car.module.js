import Car from '../class/car.class';

module.exports = function(){
  let kia = new Car('KIA', 'Sportage', 'gray', 2016);
  console.log(kia.buildCar());
}
