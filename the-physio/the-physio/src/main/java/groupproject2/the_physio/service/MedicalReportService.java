
package groupproject2.the_physio.service;

        import groupproject2.the_physio.dto.MedicalReportDto;
        import groupproject2.the_physio.entity.MedicalReport;

        import java.util.List;
        import java.util.Optional;

public interface MedicalReportService {

    // Basic CRUD operations
    List<MedicalReport> findAllReports();
    Optional<MedicalReport> findById(Long id);
    MedicalReport saveReport(MedicalReport medicalReport);
    MedicalReport updateReport(MedicalReport medicalReport);
    void deleteReport(Long id);

    // Using Request and Response DTOs for save and update operations
    MedicalReportDto.MedicalReportResponse saveReport(MedicalReportDto.MedicalReportRequest medicalReportRequest);
    MedicalReportDto.MedicalReportResponse updateReport(MedicalReportDto.MedicalReportRequest medicalReportRequest, Long id);

    // Additional methods if needed
    Optional<MedicalReport> findByUserId(Long userId);
}

