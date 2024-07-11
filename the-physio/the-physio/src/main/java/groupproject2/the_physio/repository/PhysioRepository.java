package groupproject2.the_physio.repository;

import groupproject2.the_physio.entity.Physio;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PhysioRepository extends JpaRepository<Physio,Long> {
    Optional<Physio> findByEmail(String email);
}
