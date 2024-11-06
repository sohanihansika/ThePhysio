package groupproject2.the_physio.dto;

import groupproject2.the_physio.dto.PackageDto.PackageMapper;
import groupproject2.the_physio.dto.PackageDto.PackageRequest;
import groupproject2.the_physio.dto.PackageDto.PackageResponse;
import groupproject2.the_physio.entity.Package;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-11-06T10:42:12+0530",
    comments = "version: 1.4.2.Final, compiler: Eclipse JDT (IDE) 3.40.0.z20241023-1306, environment: Java 17.0.13 (Eclipse Adoptium)"
)
public class PackageDto$PackageMapperImpl implements PackageMapper {

    @Override
    public Package fromRequestToEntity(PackageRequest packageRequest) {
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
    public PackageResponse fromEntityToResponse(Package packageEntity) {
        if ( packageEntity == null ) {
            return null;
        }

        PackageResponse packageResponse = new PackageResponse();

        packageResponse.setPackageId( packageEntity.getPackageId() );
        packageResponse.setPackageName( packageEntity.getPackageName() );
        packageResponse.setPackageDescription( packageEntity.getPackageDescription() );
        packageResponse.setDaysPerWeek( packageEntity.getDaysPerWeek() );
        packageResponse.setPackagePrice( packageEntity.getPackagePrice() );

        return packageResponse;
    }
}
