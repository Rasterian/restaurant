import Client from '../class/client.class';

module.exports = function(){
  let brandon = new Client('KIA', 'Sportage', 'gray', 2016, 'Brandon', 22, 84486800, 'Male');
  console.log(brandon.buildClient());
}
