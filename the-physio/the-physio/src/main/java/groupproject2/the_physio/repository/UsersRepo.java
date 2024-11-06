package groupproject2.the_physio.repository;

import groupproject2.the_physio.entity.OurUsers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UsersRepo extends JpaRepository<OurUsers ,Integer> {

    Optional<OurUsers> findByEmail(String email);

    Optional<OurUsers> findByName(String name);

    List<OurUsers> findAllByRole(String role);


    Optional<String> findNameById(@Param("id") Long id);
}
