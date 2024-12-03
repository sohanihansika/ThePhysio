package groupproject2.the_physio.entity;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Package")

public class Package {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "package_id")
        private Long packageId;

        @Column(name = "added_date")
        private Date addedDate;

        @Column(name = "package_name")
        private String packageName;

        @Column(name = "package_description" )
        private String packageDescription;

        @Column(name = "days_per_week")
        private int daysPerWeek;

        @Column(name = "package_price")
        private int packagePrice;




    public Long getPackageId() {
        return packageId;
    }

    public void setPackageId(Long packageId) {
        this.packageId = packageId;
    }

    public Date getAddedDate() {
        return addedDate;
    }

    public void setAddedDate(Date addedDate) {
        this.addedDate = addedDate;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public int getDaysPerWeek() {
        return daysPerWeek;
    }

    public void setDaysPerWeek(int daysPerWeek) {
        this.daysPerWeek = daysPerWeek;
    }

    public String getPackageDescription() {
        return packageDescription;
    }

    public void setPackageDescription(String packageDescription) {
        this.packageDescription = packageDescription;
    }

    public int getPackagePrice() {
        return packagePrice;
    }

    public void setPackagePrice(int packagePrice) {
        this.packagePrice = packagePrice;
    }



    // Automatically set the added_date before persisting the entity
    @PrePersist
    protected void onCreate() {
        this.addedDate = new Date();
    }

}
