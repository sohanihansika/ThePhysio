package GroupProjectII.ThePhysio.repository;

import GroupProjectII.ThePhysio.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
