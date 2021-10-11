const { Employee, Address } = require('../models');

const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.development);

//// Eager Loading
const findAllEmployee = async () => {
  const employees = await Employee.findAll({
    include: [
      { 
        model: Address, as: 'addresses',
        attributes: { exclude: ['id', 'employeeId'] }
      }],
  });
  // const employees = await Employee.findAll();

  return employees;
};

//// Eager Loading
// const findEmployeeByPk = async (id) => {
//   const employee = await Employee.findOne({
//     where: { id },
//     include: [
//       { 
//         model: Address, as: 'addresses',
//         attributes: { exclude: ['id', 'employeeId'] },
//       },
//     ],
//   });
//   return employee;
// }

//// Lazy Loading
const findEmployeeByPk = async (id) => {
  const employee = await Employee.findOne({
    where: { id },
    // include: [
    //   { 
    //     model: Address, as: 'addresses',
    //     attributes: { exclude: ['id', 'employeeId'] },
    //   },
    // ],
  });

  return employee;
}

const findAllAddressesByPk = async (id) => {
  const addresses = await Address.findAll({ where: { employeeId: id } });
  return addresses;
}

const createEmployee = async (newEmployeeData, newAddressData) => {
  try {
    const t = await sequelize.transaction();
  
    const createdEmployee = await Employee.create(newEmployeeData, { transaction: t });
  
    await Address.create({...newAddressData, employeeId: createdEmployee.id},
      { transaction: t });
  
      await t.commit();
      return createdEmployee;
  } catch (e) {
    console.log(e.message);
    await t.rollback();
  }
}

module.exports = {
  findAllEmployee,
  findEmployeeByPk,
  findAllAddressesByPk,
  createEmployee,
}