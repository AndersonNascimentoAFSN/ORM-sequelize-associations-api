const EmployeeService = require('../services/EmployeeService');

const findAllEmployee = async (_req, res) => {
  try {
    const employees = await EmployeeService.findAllEmployee();

    return res.status(200).json(employees);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro'});
  };
};

const findEmployeeByPk = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await EmployeeService.findEmployeeByPk(id);

    if (!employee) return res.status(404).json({ message: 'Funcionário não encontrado'});

    if (req.query.includeAddresses === 'true') {
      const addresses = await EmployeeService.findAllAddressesByPk(id);
      return res.status(200).json({ employee, addresses });
    }

    return res.status(200).json(employee);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro'});
  }
}

//// Create sem transação:

// const createEmployee = async (req, res) => {
//   try {
//     const { firstName, lastName, age, city, street, number } = req.body;

//     const employee = await EmployeeService.createEmployee({ firstName, lastName, age }, { city, street, number });

//     return res.status(201).json(employee.dataValues);
//   } catch (e) {
//     console.log(e.message);
//     res.status(500).json({ message: e.message });
//   }
// }

//// create com transação:

const createEmployee = async (req, res) => {
  try {
    const { firstName, lastName, age, city, street, number } = req.body;

    const employee = await EmployeeService.createEmployee({ firstName, lastName, age }, { city, street, number });

    return res.status(201).json(employee.dataValues);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: e.message });
  }
}


module.exports = {
  findAllEmployee,
  findEmployeeByPk,
  createEmployee,
}