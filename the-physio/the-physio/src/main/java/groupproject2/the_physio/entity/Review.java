package groupproject2.the_physio.entity;

        import jakarta.persistence.*;

        import java.util.Date;

@Entity
@Table(name = "review")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "review_id")
    private Long id;

    @Column(name = "category")
    private String category; // e.g., Physio, GymCoach, Company

    @Column(name = "physio_id")
    private Long physioId; // Nullable based on category

    @Column(name = "coach_id")
    private Long coachId; // Nullable based on category

    @Column(name = "rate")
    private Integer rate; // Rating value, e.g., 1 to 5

    @Column(name = "comment")
    private String comment;

    @Column(name = "created_date")
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate; // When the review was created

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public Long getPhysioId() {
        return physioId;
    }

    public void setPhysioId(Long physioId) {
        this.physioId = physioId;
    }

    public Long getCoachId() {
        return coachId;
    }

    public void setCoachId(Long coachId) {
        this.coachId = coachId;
    }

    public Integer getRate() {
        return rate;
    }

    public void setRate(Integer rate) {
        this.rate = rate;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }
}

