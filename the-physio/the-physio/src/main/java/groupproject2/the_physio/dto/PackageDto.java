package groupproject2.the_physio.dto;

import groupproject2.the_physio.entity.Package;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.io.Serializable;
import java.util.Date;


public class PackageDto implements Serializable {

    //Request dto
    public static class PackageRequest{

        private String packageName;

        private String packageDescription;

        private int daysPerWeek;

        private int PackagePrice;

        public int getTimeDue() {
            return TimeDue;
        }

        public void setTimeDue(int timeDue) {
            TimeDue = timeDue;
        }

        private  int TimeDue;



        //getters and setters

        public String getPackageName() {
            return packageName;
        }

        public void setPackageName(String packageName) {
            this.packageName = packageName;
        }

        public String getPackageDescription() {
            return packageDescription;
        }

        public void setPackageDescription(String packageDescription) {
            this.packageDescription = packageDescription;
        }

        public int getPackagePrice() {
            return PackagePrice;
        }

        public void setPackagePrice(int packagePrice) {
            PackagePrice = packagePrice;
        }

        public int getDaysPerWeek() {
            return daysPerWeek;
        }

        public void setDaysPerWeek(int daysPerWeek) {
            this.daysPerWeek = daysPerWeek;
        }


    }

    //Response dto
    public static class PackageResponse{

        private Long packageId;

        private String packageName;

        private String packageDescription;

        private int daysPerWeek;

        private int PackagePrice;

        private Date added_date;

        public Long getPackageId() {
            return packageId;
        }

        public void setPackageId(Long packageId) {
            this.packageId = packageId;
        }

        public String getPackageName() {
            return packageName;
        }

        public void setPackageName(String packageName) {
            this.packageName = packageName;
        }

        public String getPackageDescription() {
            return packageDescription;
        }

        public void setPackageDescription(String packageDescription) {
            this.packageDescription = packageDescription;
        }

        public int getDaysPerWeek() {
            return daysPerWeek;
        }

        public void setDaysPerWeek(int daysPerWeek) {
            this.daysPerWeek = daysPerWeek;
        }

        public int getPackagePrice() {
            return PackagePrice;
        }

        public void setPackagePrice(int packagePrice) {
            PackagePrice = packagePrice;
        }

        public Date getAdded_date() {
            return added_date;
        }

        public void setAdded_date(Date added_date) {
            this.added_date = added_date;
        }
    }
@Mapper
    //Mapper interface
    public interface PackageMapper{
        PackageMapper INSTANCE = org.mapstruct.factory.Mappers.getMapper(PackageMapper.class);


    Package fromRequestToEntity(PackageRequest packageRequest);

        PackageResponse fromEntityToResponse(Package packageEntity);
    }

//    @Mapper
//    public interface PackageMapper {
//        PackageMapper INSTANCE = Mappers.getMapper(PackageMapper.class);
//
//        @Mapping(target = "timeDue", defaultValue = "0")  // Ensure default value for timeDue
//        Package fromRequestToEntity(PackageRequest packageRequest);
//
//        @Mapping(target = "timeDue", defaultValue = "0")  // Ensure default value for timeDue
//        PackageResponse fromEntityToResponse(Package packageEntity);
//    }


}
