//package groupproject2.the_physio.controller;
//
//import groupproject2.the_physio.dto.ManagerPackageDto;
//import groupproject2.the_physio.service.ManagerPackageService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.Optional;
//
//@RestController
//@RequestMapping("/manager/package")
//@CrossOrigin
//public class ManagerPackageController {
//
//    @Autowired
//    private ManagerPackageService managerPackageService;
//
//
//    @PostMapping
//    public ResponseEntity<ManagerPackageDto> addPackage(@RequestBody ManagerPackageDto managerPackageDto) {
//        ManagerPackageDto addPackage = managerPackageService.addPackage(managerPackageDto);
//        return ResponseEntity.ok(addPackage);
//    }
//
//
////    @GetMapping("/{id}")
////    public ManagerPackageDto getPackageById(@PathVariable("id") int id) {
////        return managerPackageService.getPackageById(id);
////    }
//
//    @GetMapping
//    public ResponseEntity<ManagerPackageDto> getAllPackages() {
//        return ResponseEntity.ok(managerPackageService.getAllPackages());
//    }
//
////    @PutMapping("/{id}")
////    public ManagerPackageDto updatePackage(@PathVariable("id") int id, @RequestBody ManagerPackageDto managerPackageDto) {
////        return managerPackageService.updatePackage(id,managerPackageDto);
////    }
////
////    @DeleteMapping("/{id}")
////    public void deletePackage(@PathVariable("id") int id) {
////        managerPackageService.deletePackage(id);
////    }
////
//
//}
