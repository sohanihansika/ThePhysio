package groupproject2.the_physio.dto;

import groupproject2.the_physio.entity.Package;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-03T17:14:00+0530",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.40.0.z20241112-1021, environment: Java 17.0.13 (Eclipse Adoptium)"
)
public class PackageDto$PackageMapperImpl implements PackageDto.PackageMapper {

    @Override
    public Package fromRequestToEntity(PackageDto.PackageRequest packageRequest) {
        if ( packageRequest == null ) {
            return null;
        }

        Package package1 = new Package();

        package1.setPackageName( packageRequest.getPackageName() );
        package1.setDaysPerWeek( packageRequest.getDaysPerWeek() );
        package1.setPackageDescription( packageRequest.getPackageDescription() );
        package1.setPackagePrice( packageRequest.getPackagePrice() );

        return package1;
    }

    @Override
    public PackageDto.PackageResponse fromEntityToResponse(Package packageEntity) {
        if ( packageEntity == null ) {
            return null;
        }

        PackageDto.PackageResponse packageResponse = new PackageDto.PackageResponse();

        packageResponse.setPackageId( packageEntity.getPackageId() );
        packageResponse.setPackageName( packageEntity.getPackageName() );
        packageResponse.setPackageDescription( packageEntity.getPackageDescription() );
        packageResponse.setDaysPerWeek( packageEntity.getDaysPerWeek() );
        packageResponse.setPackagePrice( packageEntity.getPackagePrice() );

        return packageResponse;
    }
}
