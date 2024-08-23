package GroupProjectII.ThePhysio.service.impl;

import GroupProjectII.ThePhysio.dto.EmployeeDto;
import GroupProjectII.ThePhysio.entity.Employee;
import GroupProjectII.ThePhysio.mapper.EmployeeMapper;
import GroupProjectII.ThePhysio.repository.EmployeeRepository;
import GroupProjectII.ThePhysio.service.EmployeeService;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl extends EmployeeService {
    private EmployeeRepository employeeRepository;
    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto){
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee= employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }
}
