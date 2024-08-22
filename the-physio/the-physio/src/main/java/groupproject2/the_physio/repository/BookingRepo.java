package groupproject2.the_physio.repository;

import groupproject2.the_physio.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepo extends JpaRepository<Booking,Long> {
}
