package groupproject2.the_physio.controller;

import groupproject2.the_physio.dto.EmployeeDto;
import groupproject2.the_physio.dto.LoginDto;
import groupproject2.the_physio.dto.PhysioDto;
import groupproject2.the_physio.service.PhysioService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@AllArgsConstructor
@RestController
@RequestMapping("api/physios")
@CrossOrigin(origins = "http://localhost:3000")
public class PhysioController {
    private PhysioService physioService;
    @PostMapping
    public ResponseEntity<PhysioDto> createEmployee(@RequestBody PhysioDto physioDto){
        PhysioDto savedPhysio = physioService.createPhysio(physioDto);
        return new ResponseEntity<>(savedPhysio, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<PhysioDto> getPhysioById(@PathVariable("id") Long physioId){
        PhysioDto physioDto = physioService.getPhysioById(physioId);
        return ResponseEntity.ok(physioDto);
    }

    @GetMapping
    public ResponseEntity<List<PhysioDto>> getAllPhysios(){
        List<PhysioDto> physios = physioService.getAllPhysios();
        return ResponseEntity.ok(physios);
    }

    @PutMapping("{id}")
    public ResponseEntity<PhysioDto> updatePhysio(@PathVariable("id") Long physioId ,
                                                      @RequestBody PhysioDto updatedPhysio){
        PhysioDto physioDto = physioService.updatePhysio(physioId , updatedPhysio);
        return ResponseEntity.ok(physioDto);
    }

    //build delete employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deletePhysio(@PathVariable("id") Long physioId){
        physioService.deletePhysio(physioId);
        return ResponseEntity.ok("Employee delete successfully!.");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginPhysio(@RequestBody LoginDto loginDto){
        LoginDto loginDto1 = physioService.loginPhysio(loginDto);
        return ResponseEntity.ok(loginDto1);
    }
}
