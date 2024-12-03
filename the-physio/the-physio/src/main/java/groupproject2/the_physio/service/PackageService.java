package groupproject2.the_physio.service;

import groupproject2.the_physio.dto.PackageDto;
import groupproject2.the_physio.entity.Package;

import java.util.List;
import java.util.Optional;

public interface PackageService {

    List<Package> findAllPackages();

    Optional<Package> findById(Long id);

    Package savePackage(Package packageEntity);

    Package updatePackage(Package packageEntity, Long packageId);

    void deletePackage(Long packageId);

    // Using Request and Response with save and update package
    PackageDto.PackageResponse savePackage(PackageDto.PackageRequest packageRequest);

    PackageDto.PackageResponse updatePackage(PackageDto.PackageRequest packageRequest, Long packageId);

}
