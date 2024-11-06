package groupproject2.the_physio.service.impl;

        import groupproject2.the_physio.dto.ReqRes;
        import groupproject2.the_physio.service.EmailService;
        import groupproject2.the_physio.service.UsersManagementService;
        import org.springframework.mail.MailException;
        import org.springframework.stereotype.Service;
        import groupproject2.the_physio.dto.MedicalReportDto;
        import groupproject2.the_physio.entity.MedicalReport;
        import groupproject2.the_physio.repository.MedicalReportRepo;
        import groupproject2.the_physio.service.MedicalReportService;

        import java.util.List;
        import java.util.Optional;

@Service
public class MedicalReportServiceImpl implements MedicalReportService {

    private final MedicalReportRepo medicalReportRepository;
    private UsersManagementService usersManagementService;
    private  MedicalReportService medicalReportService;
    private EmailService emailService;
    public MedicalReportServiceImpl(MedicalReportRepo medicalReportRepository) {
        this.medicalReportRepository = medicalReportRepository;
    }

    @Override
    public List<MedicalReport> findAllReports() {
        return medicalReportRepository.findAll();
    }

    @Override
    public Optional<MedicalReport> findById(Long id) {
        return medicalReportRepository.findById(id);
    }

    @Override
    public MedicalReport saveReport(MedicalReport medicalReportEntity) {
        return medicalReportRepository.save(medicalReportEntity);
    }

    @Override
    public MedicalReport updateReport(MedicalReport medicalReportEntity) {
        return medicalReportRepository.save(medicalReportEntity);
    }

    @Override
    public void deleteReport(Long id) {
        medicalReportRepository.deleteById(id);
    }

    @Override
    public MedicalReportDto.MedicalReportResponse saveReport(MedicalReportDto.MedicalReportRequest medicalReportRequest) {
        // Convert DTO to Entity
        MedicalReport medicalReportEntity = MedicalReportDto.MedicalReportMapper.INSTANCE.fromRequestToEntity(medicalReportRequest);

        // Fetch patient details using userId from the medicalReportRequest
        String to = "nivo@gmail.com"; // Get patient's email address
        String patientName = "hasini"; // Get patient's name
        String[] cc = new String[]{"hasini@gmail.com"};


        // Compose Email
        String subject = "Medical Report - The Physio Clinic";
        String body = patientName + ",\n\n" +
                "Your medical report has been generated with the following details:\n\n" +
                "Presenting Condition: " + medicalReportRequest.getPresentingCondition() + "\n" +
                "Investigations: " + medicalReportRequest.getInvestigations() + "\n" +
                "Medication: " + medicalReportRequest.getMedication() + "\n" +
                "Previous Treatment: " + medicalReportRequest.getPreviousRx() + "\n" +
                "Past Medical History: " + medicalReportRequest.getPmh() + "\n" +
                "Pain Assessment: Severity: " + medicalReportRequest.getPainAssessment1() +
                ", Aggravating Factors: " + medicalReportRequest.getPainAssessment2() +
                "Please let us know if you have any questions.\n\n" +
                "Best regards,\n" +
                "The Physio Clinic Team";

        try {
            // Log before sending email
            System.out.println("Attempting to send medical report email to: " + to);

            // Send Email
//            emailService.sendMail(to, cc, subject, body);
//            System.out.println("Email sent successfully");

            // If email is sent successfully, proceed to save the medical report
            MedicalReport savedEntity = medicalReportRepository.save(medicalReportEntity);

            // Prepare the response DTO
            MedicalReportDto.MedicalReportResponse medicalReportResponse = MedicalReportDto.MedicalReportMapper.INSTANCE.fromEntityToResponse(savedEntity);

            // Return the response
            System.out.println("Medical report saved successfully");
            return medicalReportResponse;

        } catch (MailException mailException) {
            // Handle email sending failure
            System.out.println("Failed to send medical report email: " + mailException.getMessage());

            // Throw an exception to notify the caller that the report was not saved
            throw new RuntimeException("Medical report was not saved because the email could not be sent.");
        }
    }


    @Override
    public MedicalReportDto.MedicalReportResponse updateReport(MedicalReportDto.MedicalReportRequest medicalReportRequest, Long id) {
        Optional<MedicalReport> existingReport = findById(id);
        if (!existingReport.isPresent()) {
            throw new RuntimeException("Medical Report Id " + id + " Not Found!");
        }

        MedicalReport medicalReportEntity = MedicalReportDto.MedicalReportMapper.INSTANCE.fromRequestToEntity(medicalReportRequest);
        medicalReportEntity.setId(id); // Ensure the ID is set for updating
        MedicalReport updatedEntity = medicalReportRepository.save(medicalReportEntity);
        return MedicalReportDto.MedicalReportMapper.INSTANCE.fromEntityToResponse(updatedEntity);
    }

    @Override
    public Optional<MedicalReport> findByUserId(Long userId) {
        return medicalReportRepository.findByUserId(userId);
    }
}
