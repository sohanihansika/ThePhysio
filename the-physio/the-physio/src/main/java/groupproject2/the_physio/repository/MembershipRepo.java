package groupproject2.the_physio.repository;

import groupproject2.the_physio.entity.Membership;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MembershipRepo extends JpaRepository<Membership, Long> {

    // Custom queries can be added here if needed
}
