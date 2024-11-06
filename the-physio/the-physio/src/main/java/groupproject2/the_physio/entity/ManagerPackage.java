//package groupproject2.the_physio.entity;
//
//import jakarta.persistence.*;
//
//
//@Entity
//@Table(name = "manager_package")
//public class ManagerPackage {
//
//    @Id
//    @Column(name ="package_id")
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private int packageId;
//
//    @Column(name = "package_name" , length = 100)
//    private String packageName;
//
//    @Column(name = "package_description" , length = 1000)
//    private String packageDescription;
//
//    @Column(name = "days_per_week", length = 10)
//    private int daysPerWeek;
//
//    @Column(name = "package_price", length = 100)
//    private int packagePrice;
//
//    public ManagerPackage(String packageName, String packageDescription, int daysPerWeek, int packagePrice) {
////        this.packageId = packageId;
//        this.packageName = packageName;
//        this.packageDescription = packageDescription;
//        this.daysPerWeek = daysPerWeek;
//        this.packagePrice = packagePrice;
//
//    }
//
//    public int getPackageId() {
//        return packageId;
//    }
//
//    public void setPackageId(int packageId) {
//        this.packageId = packageId;
//    }
//
//    public String getPackageName() {
//        return packageName;
//    }
//
//    public void setPackageName(String packageName) {
//        this.packageName = packageName;
//    }
//
//    public String getPackageDescription() {
//        return packageDescription;
//    }
//
//    public void setPackageDescription(String packageDescription) {
//        this.packageDescription = packageDescription;
//    }
//
//    public int getDaysPerWeek() {
//        return daysPerWeek;
//    }
//
//    public void setDaysPerWeek(int daysPerWeek) {
//        this.daysPerWeek = daysPerWeek;
//    }
//
//    public int getPackagePrice() {
//        return packagePrice;
//    }
//
//    public void setPackagePrice(int packagePrice) {
//        this.packagePrice = packagePrice;
//    }
//
//}
