
        package groupproject2.the_physio.dto;

        import groupproject2.the_physio.entity.MedicalReport;
        import org.mapstruct.Mapper;

        import java.io.Serializable;
        import java.util.Date;
        import java.util.List;

public class MedicalReportDto implements Serializable {

    // Request DTO
    public static class MedicalReportRequest {
        private Long userId;

        public Long getPhysioId() {
            return physioId;
        }

        public void setPhysioId(Long physioId) {
            this.physioId = physioId;
        }

        private  Long physioId;
        private String presentingCondition;
        private String hxPresentingCondition;
        private String bodyChart; // Assuming it's a URL or a path to an image
        private String painAssessment1;
        private String painAssessment2;
        private String investigations;
        private String medication;
        private String previousRx;
        private String pmh;
        private List<String> redFlags;
        private String patientGoals;
        private Integer painSensitivity;

        public Date getDate() {
            return date;
        }

        public void setDate(Date date) {
            this.date = date;
        }

        private  Date date;

        // Getters and Setters
        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }

        public String getPresentingCondition() {
            return presentingCondition;
        }

        public void setPresentingCondition(String presentingCondition) {
            this.presentingCondition = presentingCondition;
        }

        public String getHxPresentingCondition() {
            return hxPresentingCondition;
        }

        public void setHxPresentingCondition(String hxPresentingCondition) {
            this.hxPresentingCondition = hxPresentingCondition;
        }

        public String getBodyChart() {
            return bodyChart;
        }

        public void setBodyChart(String bodyChart) {
            this.bodyChart = bodyChart;
        }

        public String getPainAssessment1() {
            return painAssessment1;
        }

        public void setPainAssessment1(String painAssessment1) {
            this.painAssessment1 = painAssessment1;
        }

        public String getPainAssessment2() {
            return painAssessment2;
        }

        public void setPainAssessment2(String painAssessment2) {
            this.painAssessment2 = painAssessment2;
        }

        public String getInvestigations() {
            return investigations;
        }

        public void setInvestigations(String investigations) {
            this.investigations = investigations;
        }

        public String getMedication() {
            return medication;
        }

        public void setMedication(String medication) {
            this.medication = medication;
        }

        public String getPreviousRx() {
            return previousRx;
        }

        public void setPreviousRx(String previousRx) {
            this.previousRx = previousRx;
        }

        public String getPmh() {
            return pmh;
        }

        public void setPmh(String pmh) {
            this.pmh = pmh;
        }

        public List<String> getRedFlags() {
            return redFlags;
        }

        public void setRedFlags(List<String> redFlags) {
            this.redFlags = redFlags;
        }

        public String getPatientGoals() {
            return patientGoals;
        }

        public void setPatientGoals(String patientGoals) {
            this.patientGoals = patientGoals;
        }

        public Integer getPainSensitivity() {
            return painSensitivity;
        }

        public void setPainSensitivity(Integer painSensitivity) {
            this.painSensitivity = painSensitivity;
        }
    }

    // Response DTO
    public static class MedicalReportResponse {
        private Long id;
        private Long userId;

        public Long getPhysioId() {
            return physioId;
        }

        public void setPhysioId(Long physioId) {
            this.physioId = physioId;
        }

        private Long physioId;
        private String presentingCondition;
        private String hxPresentingCondition;
        private String bodyChart; // Assuming it's a URL or a path to an image
        private String painAssessment1;
        private String painAssessment2;
        private String investigations;
        private String medication;
        private String previousRx;
        private String pmh;
        private List<String> redFlags;
        private String patientGoals;
        private Integer painSensitivity;

        public Date getDate() {
            return date;
        }

        public void setDate(Date date) {
            this.date = date;
        }

        private Date date;

        // Getters and Setters
        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public Long getUserId() {
            return userId;
        }

        public void setUserId(Long userId) {
            this.userId = userId;
        }

        public String getPresentingCondition() {
            return presentingCondition;
        }

        public void setPresentingCondition(String presentingCondition) {
            this.presentingCondition = presentingCondition;
        }

        public String getHxPresentingCondition() {
            return hxPresentingCondition;
        }

        public void setHxPresentingCondition(String hxPresentingCondition) {
            this.hxPresentingCondition = hxPresentingCondition;
        }

        public String getBodyChart() {
            return bodyChart;
        }

        public void setBodyChart(String bodyChart) {
            this.bodyChart = bodyChart;
        }

        public String getPainAssessment1() {
            return painAssessment1;
        }

        public void setPainAssessment1(String painAssessment1) {
            this.painAssessment1 = painAssessment1;
        }

        public String getPainAssessment2() {
            return painAssessment2;
        }

        public void setPainAssessment2(String painAssessment2) {
            this.painAssessment2 = painAssessment2;
        }

        public String getInvestigations() {
            return investigations;
        }

        public void setInvestigations(String investigations) {
            this.investigations = investigations;
        }

        public String getMedication() {
            return medication;
        }

        public void setMedication(String medication) {
            this.medication = medication;
        }

        public String getPreviousRx() {
            return previousRx;
        }

        public void setPreviousRx(String previousRx) {
            this.previousRx = previousRx;
        }

        public String getPmh() {
            return pmh;
        }

        public void setPmh(String pmh) {
            this.pmh = pmh;
        }

        public List<String> getRedFlags() {
            return redFlags;
        }

        public void setRedFlags(List<String> redFlags) {
            this.redFlags = redFlags;
        }

        public String getPatientGoals() {
            return patientGoals;
        }

        public void setPatientGoals(String patientGoals) {
            this.patientGoals = patientGoals;
        }

        public Integer getPainSensitivity() {
            return painSensitivity;
        }

        public void setPainSensitivity(Integer painSensitivity) {
            this.painSensitivity = painSensitivity;
        }
    }

    // Mapper Interface

    @Mapper
    public interface MedicalReportMapper {
        MedicalReportMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(MedicalReportMapper.class);

        MedicalReport fromRequestToEntity(MedicalReportRequest medicalReportRequest);

        MedicalReportResponse fromEntityToResponse(MedicalReport medicalReportEntity);
    }

}

