package groupproject2.the_physio.service.impl;

import groupproject2.the_physio.dto.PackageDto;
import groupproject2.the_physio.entity.Package;
import groupproject2.the_physio.repository.PackageRepo;
import groupproject2.the_physio.service.PackageService;
import org.springframework.stereotype.Service;

import java.security.PublicKey;
import java.util.List;
import java.util.Optional;

@Service
public class PackageServiceImpl implements PackageService {

    private final PackageRepo packageRepo;

    public PackageServiceImpl(PackageRepo packageRepo) {
        this.packageRepo = packageRepo;
    }

    @Override
    public List<Package> findAllPackages(){
        return packageRepo.findAll();
    }

    @Override
    public Optional<Package> findById(Long packageId){
        return packageRepo.findById(packageId);
    }

    @Override
    public Package savePackage(Package packageEntity){
        return packageRepo.save(packageEntity);
    }

    @Override
    public Package updatePackage(Package packageEntity , Long packageId){
        packageEntity.setPackageId(packageId);
        return packageRepo.save(packageEntity);
    }

    @Override
    public void deletePackage(Long packageId){
        packageRepo.deleteById(packageId);
    }

    @Override
    public PackageDto.PackageResponse savePackage(PackageDto.PackageRequest packageRequest){
        Package packageEntity = PackageDto.PackageMapper.INSTANCE.fromRequestToEntity(packageRequest);
        Package savedEntity = packageRepo.save(packageEntity);
        return PackageDto.PackageMapper.INSTANCE.fromEntityToResponse(savedEntity);
    }

    @Override
    public PackageDto.PackageResponse updatePackage(PackageDto.PackageRequest packageRequest, Long packageId) {
        Optional<Package> existingPackage = findById(packageId);
        if (!existingPackage.isPresent()) {
            throw new RuntimeException("Package Id " + packageId + " Not Found!");
        }

        Package packageEntity = PackageDto.PackageMapper.INSTANCE.fromRequestToEntity(packageRequest);
        packageEntity.setPackageId(packageId); // Ensure the ID is set for updating
        Package updatedEntity = packageRepo.save(packageEntity);
        return PackageDto.PackageMapper.INSTANCE.fromEntityToResponse(updatedEntity);
    }
}
