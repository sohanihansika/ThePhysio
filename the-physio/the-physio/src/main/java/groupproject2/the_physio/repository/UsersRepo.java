package groupproject2.the_physio.repository;

import groupproject2.the_physio.entity.OurUsers;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepo extends JpaRepository<OurUsers ,Integer> {

    Optional<OurUsers> findByEmail(String email);

    Optional<OurUsers> findByName(String name);
}
