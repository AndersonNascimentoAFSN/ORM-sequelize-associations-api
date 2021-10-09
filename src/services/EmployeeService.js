const { Employee, Address } = require('../models');

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

module.exports = {
  findAllEmployee,
  findEmployeeByPk,
  findAllAddressesByPk,
}