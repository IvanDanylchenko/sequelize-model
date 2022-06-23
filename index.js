const {
  Phone,
  sequelize,
  Sequelize: { Op },
} = require('./models');

(async () => {
  const phone = {
    model: 'S6',
    brand: 'Samsung',
    yearOfproduction: '2017',
    ramSize: 3,
    cpu: 'Exynos 7420',
    displaySize: 6,
    moduleNFC: false,
  };

  // программно добавление нового телефона

  // const createdPhone = await Phone.create(phone);
  // console.log('createdPhone', createdPhone.get());

  // получение списка телефонов (* 3-я страница при просмотре по 4 телефона на странице, упорядоченных по году издания)

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   limit: 4,
  //   offset: 8,
  //   order: [['id'],'yearOfproduction'],
  // });

  // console.log('foundPhones', foundPhones)

  // получение списка телефонов определенного года издания,

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   where: { yearOfproduction: '2020' },
  // });

  // console.log('foundPhones', foundPhones)

  // получение списка телефонов старее 2020 года выпуска

  // const foundPhones = await Phone.findAll({
  //   raw: true,
  //   where: {
  //     yearOfproduction: {
  //       [Op.lt]: '2020',
  //     },
  //   },
  // });
  // console.log('foundPhones', foundPhones);

  // обновление: добавить нфс всем телефонам 2021 года выпуска

  // const updatedPhones = await Phone.update(
  //   { moduleNFC: true },
  //   { where: { yearOfproduction: '2021' }, returning: true, raw: true }
  // );

  // console.log('updatedPhones', updatedPhones);

  // удаление телефонов 2010 года выпуска.

  // const deletedPhonesCount = await Phone.destroy({ where:{yearOfproduction: '2010'} });
  // console.log('deletedPhonesCount', deletedPhonesCount)
})();
