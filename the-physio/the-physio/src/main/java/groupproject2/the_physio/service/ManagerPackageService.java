//package groupproject2.the_physio.service;
//
//import groupproject2.the_physio.dto.ManagerPackageDto;
//import groupproject2.the_physio.entity.ManagerPackage;
//import groupproject2.the_physio.exception.ResourceNotFoundException;
//import groupproject2.the_physio.repository.ManagerPackageRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.parameters.P;
//import org.springframework.stereotype.Service;
//
//import java.util.Date;
//import java.util.List;
//import java.util.stream.Collectors;
//
//@Service
//public class ManagerPackageService {
//
//    @Autowired
//    private ManagerPackageRepo managerPackageRepo;
//
//    @Autowired
//    private JWTUtils jwtUtils;
//
//    public ManagerPackageDto addPackage(ManagerPackageDto managerPackageDto) {
//        ManagerPackage managerPackage = new ManagerPackage(
//                managerPackageDto.getPackageName(),
//                managerPackageDto.getPackageDescription(),
//                managerPackageDto.getDaysPerWeek(),
//                managerPackageDto.getPackagePrice()
//        );
//
//        managerPackage = managerPackageRepo.save(managerPackage);
//        managerPackageDto.setPackageId(managerPackage.getPackageId());
//
//        return managerPackageDto;
//    }
//
////    public ManagerPackageDto getPackageById(int id) {
////        ManagerPackage managerPackage = managerPackageRepo.findById(id)
////                .orElseThrow(() -> new ResourceNotFoundException("Package not found with id: " + id));
////
////        ManagerPackageDto managerPackageDto = new ManagerPackageDto();
////        managerPackageDto.setPackageId(managerPackage.getPackageId());
////        managerPackageDto.setPackageName(managerPackage.getPackageName());
////        managerPackageDto.setPackageDescription(managerPackage.getPackageDescription());
////        managerPackageDto.setDaysPerWeek(managerPackage.getDaysPerWeek());
////        managerPackageDto.setPackagePrice(managerPackage.getPackagePrice());
////
////        return managerPackageDto;
////    }
//
//    public ManagerPackageDto getAllPackages() {
//       ManagerPackageDto managerPackageDto = new ManagerPackageDto();
//
//
//           List<ManagerPackage>results = managerPackageRepo.findAll();
//           if(!results.isEmpty()){
//               managerPackageDto.setManagerPackageList(results);
//           }
//           return managerPackageDto;
//
//
////        return managerPackages.stream()
////                .map(managerPackage -> {
////                    ManagerPackageDto managerPackageDto = new ManagerPackageDto();
////                    managerPackageDto.setPackageId(managerPackage.getPackageId());
////                    managerPackageDto.setPackageName(managerPackage.getPackageName());
////                    managerPackageDto.setPackageDescription(managerPackage.getPackageDescription());
////                    managerPackageDto.setDaysPerWeek(managerPackage.getDaysPerWeek());
////                    managerPackageDto.setPackagePrice(managerPackage.getPackagePrice());
////                    return managerPackageDto;
////                })
////                .collect(Collectors.toList());
//    }
//
//
//
////    public void deletePackage(int id) {
////        ManagerPackage managerPackage = managerPackageRepo.findById(id)
////                .orElseThrow(() -> new ResourceNotFoundException("Package is not found with id: " + id));
////
////        managerPackageRepo.delete(managerPackage);
////    }
////
////    public ManagerPackageDto updatePackage(int id, ManagerPackageDto updatedPackage) {
////        ManagerPackage managerPackage = managerPackageRepo.findById(id)
////                .orElseThrow(() -> new ResourceNotFoundException("Package not found with id: " + id));
////
////        managerPackage.setPackageName(updatedPackage.getPackageName());
////        managerPackage.setPackageDescription(updatedPackage.getPackageDescription());
////        managerPackage.setDaysPerWeek(updatedPackage.getDaysPerWeek());
////        managerPackage.setPackagePrice(updatedPackage.getPackagePrice());
////
////        managerPackage = managerPackageRepo.save(managerPackage);
////
////        updatedPackage.setPackageId(managerPackage.getPackageId());
////        return updatedPackage;
////    }
//
//
//}
