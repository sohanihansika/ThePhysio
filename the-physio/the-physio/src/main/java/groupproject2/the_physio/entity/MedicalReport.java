
        package groupproject2.the_physio.entity;

        import jakarta.persistence.*;
        import java.util.Date;
        import java.util.List;

@Entity
@Table(name = "medical_report")
public class MedicalReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "report_id")
    private Long id;

    @Column(name = "user_id")
    private Long userId;

    public Long getPhysioId() {
        return physioId;
    }

    public void setPhysioId(Long physioId) {
        this.physioId = physioId;
    }

    @Column(name = "physio_id")
    private Long physioId;

    @Column(name = "presenting_condition")
    private String presentingCondition;

    @Column(name = "hx_presenting_condition")
    private String hxPresentingCondition;

    @Column(name = "body_chart")
    private String bodyChart; // Assuming it's a URL or a path to an image

    @Column(name = "pain_assessment_1")
    private String painAssessment1;

    @Column(name = "pain_assessment_2")
    private String painAssessment2;

    @Column(name = "investigations")
    private String investigations;

    @Column(name = "medication")
    private String medication;

    @Column(name = "previous_rx")
    private String previousRx;

    @Column(name = "pmh")
    private String pmh;

    @Column(name = "red_flag")
    private List<String> redFlags;

    @Column(name = "patient_goals")
    private String patientGoals;

    @Column(name = "pain_sensitivity")
    private Integer painSensitivity;

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    @Column(name="Issue_date")
    private  Date date;



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

