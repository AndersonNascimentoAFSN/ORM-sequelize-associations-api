const { Employee, Address } = require('../models');

const findAllEmployee = async () => {
  const employees = await Employee.findAll({
    include: { model: Address, as: 'addresses' },
  });
  // const employees = await Employee.findAll();

  return employees;
};

module.exports = {
  findAllEmployee,
}