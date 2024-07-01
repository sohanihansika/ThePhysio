package groupproject2.the_physio.service;

import groupproject2.the_physio.dto.EmployeeDto;
import groupproject2.the_physio.dto.LoginDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);

    EmployeeDto getEmployeeById(Long employeeId);

    List<EmployeeDto> getAllEmployees();

    EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee);

    void deleteEmployee(Long employeeId);

    LoginDto loginEmployee(LoginDto loginDto);
}
