package groupproject2.the_physio.repository;

import groupproject2.the_physio.entity.Advert;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdvertRepo extends JpaRepository<Advert, Long> {
}
