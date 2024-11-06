package groupproject2.the_physio.controller;

import groupproject2.the_physio.dto.PackageDto;
import groupproject2.the_physio.entity.Package;
import groupproject2.the_physio.service.PackageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/manager/packages")
public class PackageController {

    private final PackageService packageService;

    public PackageController(PackageService packageService) {
        this.packageService = packageService;
    }

    @GetMapping
    public ResponseEntity<List<Package>> findAllPackages() {
        List<Package> packages = packageService.findAllPackages();
        return ResponseEntity.ok(packages);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Package> findPackageById(@PathVariable("id") Long packageId) {
        Optional<Package> packageOpt = packageService.findById(packageId);
        return packageOpt.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<PackageDto.PackageResponse> savePackage(@RequestBody PackageDto.PackageRequest packageRequest) {
        PackageDto.PackageResponse packageResponse = packageService.savePackage(packageRequest);
        return ResponseEntity.ok(packageResponse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PackageDto.PackageResponse> updatePackage(
            @PathVariable("id") Long packageId,
            @RequestBody PackageDto.PackageRequest packageRequest) {
        try {
            PackageDto.PackageResponse packageResponse = packageService.updatePackage(packageRequest, packageId);
            return ResponseEntity.ok(packageResponse);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePackage(@PathVariable("id") Long packageId) {
        try {
            packageService.deletePackage(packageId);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
