package groupproject2.the_physio.entity;

import jakarta.persistence.*;
import java.util.Date;
import java.util.Calendar;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Membership")
public class Membership {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "membership_id")
    private Long membershipId;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "type", nullable = false)
    private int type;

    @Column(name = "days_per_week", nullable = false)
    private int daysPerWeek;

    @Column(name = "time_slots", nullable = false)
    private String timeSlots; // Comma-separated string like "6:00 AM-7:00 AM, 5:00 PM-6:00 PM"

    @Column(name = "price", nullable = false)
    private int price;

    @Column(name = "started_date", nullable = false)
    private Date startedDate;

    @Column(name = "end_date", nullable = false)
    private Date endDate;

    @Column(name = "attendance", columnDefinition = "TEXT")
    private String attendance; // Serialized attendance string (e.g., "F,F,T,F,F,...")

    // Getters and Setters
    public Long getMembershipId() {
        return membershipId;
    }

    public void setMembershipId(Long membershipId) {
        this.membershipId = membershipId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public int getDaysPerWeek() {
        return daysPerWeek;
    }

    public void setDaysPerWeek(int daysPerWeek) {
        this.daysPerWeek = daysPerWeek;
    }

    public String getTimeSlots() {
        return timeSlots;
    }

    public void setTimeSlots(String timeSlots) {
        this.timeSlots = timeSlots;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Date getStartedDate() {
        return startedDate;
    }

    public void setStartedDate(Date startedDate) {
        this.startedDate = startedDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getAttendance() {
        return attendance;
    }

    public void setAttendance(String attendance) {
        this.attendance = attendance;
    }

    // Automatically set the startedDate, calculate the endDate, and initialize attendance before persisting the entity
    @PrePersist
    protected void onCreate() {
        this.startedDate = new Date();
        this.endDate = calculateEndDate(this.type);
        this.attendance = initializeAttendance();
    }

    // Helper method to calculate endDate based on membership type
    private Date calculateEndDate(int type) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(this.startedDate);
        switch (type) {
            case 1: // 1-month membership
                calendar.add(Calendar.MONTH, 1);
                break;
            case 3: // 3-month membership
                calendar.add(Calendar.MONTH, 3);
                break;
            case 6: // 6-month membership
                calendar.add(Calendar.MONTH, 6);
                break;
            case 12: // 12-month membership
                calendar.add(Calendar.MONTH, 12);
                break;
            default:
                throw new IllegalArgumentException("Invalid membership type: " + type);
        }
        return calendar.getTime();
    }

    // Helper method to initialize attendance
    private String initializeAttendance() {
        int weeks = calculateWeeksBetween(this.startedDate, this.endDate);
        List<String> attendanceList = new ArrayList<>();

        for (int i = 0; i < weeks; i++) {
            // Add a group of "F" based on the number of days per week
            String weeklyAttendance = "F".repeat(this.daysPerWeek);
            attendanceList.add(weeklyAttendance);
        }
        return String.join(",", attendanceList); // Serialize the list into a comma-separated string
    }

    // Helper method to calculate the number of weeks between two dates
    private int calculateWeeksBetween(Date startDate, Date endDate) {
        Calendar start = Calendar.getInstance();
        start.setTime(startDate);
        Calendar end = Calendar.getInstance();
        end.setTime(endDate);

        int weeks = 0;
        while (start.before(end)) {
            start.add(Calendar.WEEK_OF_YEAR, 1);
            weeks++;
        }
        return weeks;
    }
}
