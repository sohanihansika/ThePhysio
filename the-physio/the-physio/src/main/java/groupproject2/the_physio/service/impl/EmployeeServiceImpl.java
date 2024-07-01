package groupproject2.the_physio.service.impl;

import groupproject2.the_physio.dto.EmployeeDto;
import groupproject2.the_physio.dto.LoginDto;
import groupproject2.the_physio.entity.Employee;
import groupproject2.the_physio.exception.ResourceNotFoundException;
import groupproject2.the_physio.mapper.EmployeeMapper;
import groupproject2.the_physio.repository.EmployeeRepository;
import groupproject2.the_physio.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto){

        // Hash the password before saving
        employeeDto.setPassword(new BCryptPasswordEncoder().encode(employeeDto.getPassword()));


        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);

    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(()->
                        new ResourceNotFoundException("Employee is not exist with given id : " + employeeId));

        return EmployeeMapper.mapToEmployeeDto(employee) ;
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();

        return employees.stream().map((employee) -> EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId, EmployeeDto updatedEmployee) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                ()-> new ResourceNotFoundException("Employee is not exist with given id: " + employeeId)
        );

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());
        employee.setPassword(updatedEmployee.getPassword());

        Employee updatedEmployeeObj = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {

        Employee employee = employeeRepository.findById(employeeId).orElseThrow(
                ()-> new ResourceNotFoundException("Employee is not exist with given id: " + employeeId)
        );

        employeeRepository.deleteById(employeeId);
    }

    @Override
    public LoginDto loginEmployee(LoginDto loginDto) {
        // Retrieve employee by email from database
        Employee employee = employeeRepository.findByEmail(loginDto.getEmail())
                .orElseThrow(() -> new ResourceNotFoundException("Employee not found with email: " + loginDto.getEmail()));

        // Check if the provided password matches the hashed password
        if (!new BCryptPasswordEncoder().matches(loginDto.getPassword(), employee.getPassword())) {
            throw new ResourceNotFoundException("Invalid password");
        }

        // Prepare and return LoginDto response
        return new LoginDto(employee.getEmail(), "Login successful");
    }

}
