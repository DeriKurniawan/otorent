'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Cars', [{
      name: 'Avansa',
      manufacture: 'Toyota',
      color: 'Silver',
      price: 500000,
      status: false,
      description: 'Mobil gaya baru untuk keluarga dengan kenyamanan dan ruang yang lega, dan merupakan design terbaik dari Toyota',
      image: 'https://upload.wikimedia.org/wikipedia/id/thumb/c/c2/Avanza_1.3_G.jpg/250px-Avanza_1.3_G.jpg',
      category_id: 2,
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Agya',
      manufacture: 'Toyota',
      color: 'White',
      price: 250000,
      status: false,
      description: 'Design yang sporty dan dengan interior yang modern akan menjadikan anda nyaman dalam menikmati perjalanan dan dengan bahan bakar yang irit akan membuat uang anda irit juga.',
      image: 'http://assets.kompas.com/data/photo/2014/01/29/1105390Agya-TRD780x390.jpg',
      category_id: 3,
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Yaris',
      manufacture: 'Toyota',
      color: 'Brown',
      price: 300000,
      status: false,
      description: 'Designbakar yang irit akan membuat uang anda irit juga.',
      image: 'http://image.priceprice.k-img.com/global/images/product/cars/Toyota_Yaris/Toyota_Yaris_L_1.jpg',
      category_id: 3,
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Alphard',
      manufacture: 'Toyota',
      color: 'White',
      price: 800000,
      status: false,
      description: 'Merupakan mance yang baik anda akan membuat perjalanan anda menyenangkan',
      image: 'http://www.nararentcar.com/wp-content/gallery/Mobil-kami/sewa-rental-alphard-jakarta.jpg',
      category_id: 2,
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'New Fortuner',
      manufacture: 'Toyota',
      color: 'White',
      price: 650000,
      status: false,
      description: 'Merupakan sebuah design premium dari Toyota, dan merupakan varian palinnce yang baik anda akan membuat perjalanan anda menyenangkan',
      image: 'https://news.hargatop.com/wp-content/uploads/2016/01/Toyota-All-New-Fortuner-terbaru-2016.jpg',
      category_id: 4,
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Rush',
      manufacture: 'Toyota',
      color: 'Black',
      price: 550000,
      status: false,
      description: 'Merupakan sebuah design premium dari Toyota, dan mermance yang baik anda akan membuat perjalanan anda menyenangkan',
      image: 'http://www.nararentcar.com/wp-content/gallery/Mobil-kami/sewa-rental-alphard-jakarta.jpg',
      category_id: 4,
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Corolla Altis',
      manufacture: 'Toyota',
      color: 'White',
      price: 700000,
      status: false,
      description: 'Merupakan sebuah design premium dari Toyotaance yang baik anda akan membuat perjalanan anda menyenangkan',
      image: 'https://www.semisena.com/wp-content/uploads/2017/01/Toyota-Corolla.jpg?x56163',
      category_id: 1,
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Camry',
      manufacture: 'Toyota',
      color: 'Black',
      price: 700000,
      status: false,
      description: 'Merupakan sebuah design premium dari Toyota, dan merupakan varian paling mewah yang ada di Toyota, nikmati nuansa mirip rumah anda dalam mobil, dengan performance yang baik anda akan membuat perjalanan anda menyenangkan',
      image: 'https://toyota.com.my/ToyotaOfficialWebsite/media/ToyotaMedia/model/Camry%202.0/2016/colors_camry_grey.jpg',
      category_id: 1,
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Alphard',
      manufacture: 'Toyota',
      color: 'White',
      price: 800000,
      status: false,
      description: 'Merupakan sebuah design premium dari Toyota, dan merupakan varian paling mewah yang ada di Toyota, nikmati nuansa mirip rumah anda dalam mobil, dengan performance yang baik anda akan membuat perjalanan anda menyenangkan',
      image: 'http://www.nararentcar.com/wp-content/gallery/Mobil-kami/sewa-rental-alphard-jakarta.jpg',
      category_id: 2,
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Toyota 86',
      manufacture: 'Toyota',
      color: 'red',
      price: 7160000,
      status: false,
      description: 'Merupakan sebuah design premium dari Toyota, dan merupakan varian sport yang memadukan bukan hanya kecepatan tapi juga kemewahan, bagi pencinta kecepatan toyota 86 merupakan pilihan terbik',
      image: 'https://www.toyota.com/content/vehicle-landing/2017/86/features/img/refresh/desktop/086_MY17_0024_V001.jpg',
      category_id: 6,
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Camry Hybrid',
      manufacture: 'Toyota',
      color: 'Metalic',
      price: 7740000,
      status: false,
      description: 'Merupakan sebuah design premium dari Toyota, dan merupakan varian yang memadukan tecknologi dan design kecepatan, nikmati mobil nyaman dengan tecknologi ramah lingkungan terbaik, dengan performance yang baik dan kenyamanan',
      image: 'http://behindthewheel.com.au/wp-content/uploads/2016/10/2017-toyota-camry-678x381.jpg',
      category_id: 7,
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }, {
      name: 'Alphard Hybrid',
      manufacture: 'Toyota',
      color: 'White',
      price: 8000000,
      status: false,
      description: 'Merupakan sebuah design premium dari Toyota, dan merupakan varian paling mewah yang ada di Toyota, nikmati nuansa mirip rumah anda dalam mobil juga teknologi ramah lingkungan terbaik',
      image: 'https://cdn.rentalmobilbali.net/wp-content/uploads/2015/03/All-New-Alphard-Indonesia.jpg',
      category_id: 7,
      createdAt:new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
