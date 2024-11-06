package groupproject2.the_physio.entity;




import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "booking_id") 
    private Long id;

    @Column(name = "physio_id")
    private Long physioId;

    @Column(name = "user_id")
    private Long userId;

    @Column(name = "date")
    private Date date;

    @Column(name = "timeslot")
    private String timeslot;

    @Column(name = "payment_status")
    private String paymentStatus;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPhysioId() {
        return physioId;
    }

    public void setPhysioId(Long physioId) {
        this.physioId = physioId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getTimeslot() {
        return timeslot;
    }

    public void setTimeslot(String timeslot) {
        this.timeslot = timeslot;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }
}

