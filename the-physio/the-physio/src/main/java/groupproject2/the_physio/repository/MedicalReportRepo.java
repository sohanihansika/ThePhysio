package groupproject2.the_physio.repository;

        import groupproject2.the_physio.entity.MedicalReport;
        import org.springframework.data.jpa.repository.JpaRepository;
        import java.util.Optional;

public interface MedicalReportRepo extends JpaRepository<MedicalReport, Long> {

    // Custom query methods can be defined here if needed
    Optional<MedicalReport> findByUserId(Long userId);
}
