package groupproject2.the_physio.repository;

import groupproject2.the_physio.entity.Leave;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface LeaveRepo extends JpaRepository<Leave,Long> {
    List<Leave> findByPhysioIdAndDateBetween(Long physioId, Date startDate, Date endDate);
    List<Leave> findByPhysioIdAndDate(Long physioId, Date date);

}
