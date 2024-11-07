package groupproject2.the_physio.controller;

        import groupproject2.the_physio.dto.MedicalReportDto;
        import groupproject2.the_physio.entity.MedicalReport;
        import groupproject2.the_physio.service.MedicalReportService;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.*;

        import java.util.List;
        import java.util.Optional;

@RestController
@RequestMapping("/medical-report")
public class MedicalReportController {

    private final MedicalReportService medicalReportService;

    public MedicalReportController(MedicalReportService medicalReportService) {
        this.medicalReportService = medicalReportService;
    }

    @GetMapping
    public List<MedicalReport> findAllReports() {
        return medicalReportService.findAllReports();
    }

    @GetMapping("/{id}")
    public ResponseEntity<MedicalReport> findReportById(@PathVariable("id") Long id) {
        Optional<MedicalReport> medicalReport = medicalReportService.findById(id);
        return medicalReport.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<MedicalReportDto.MedicalReportResponse> saveReport(@RequestBody MedicalReportDto.MedicalReportRequest medicalReportRequest) {
        MedicalReportDto.MedicalReportResponse response = medicalReportService.saveReport(medicalReportRequest);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MedicalReportDto.MedicalReportResponse> updateReport(@PathVariable("id") Long id, @RequestBody MedicalReportDto.MedicalReportRequest medicalReportRequest) {
        try {
            MedicalReportDto.MedicalReportResponse response = medicalReportService.updateReport(medicalReportRequest, id);
            return ResponseEntity.ok(response);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReport(@PathVariable("id") Long id) {
        try {
            medicalReportService.deleteReport(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<MedicalReport> findReportByUserId(@PathVariable("userId") Long userId) {
        Optional<MedicalReport> medicalReport = medicalReportService.findByUserId(userId);
        return medicalReport.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}

