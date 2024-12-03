package groupproject2.the_physio.controller;

import groupproject2.the_physio.entity.Booking;
import groupproject2.the_physio.entity.Leave;
import groupproject2.the_physio.service.BookingService;
import groupproject2.the_physio.service.LeaveService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/leave")
public class LeaveController {

    private LeaveService leaveService;
    public LeaveController(LeaveService leaveService) {
        this.leaveService = leaveService;
    }
    @GetMapping
    public List<Leave> findAllLeave() {
        return leaveService.findAllLeave();
    }

    @GetMapping("/{id}")
    public Optional<Leave> findBookingById(@PathVariable("id") Long id) {
        return leaveService.findById(id);
    }

    @PostMapping
    public ResponseEntity<Leave> saveLeave(@RequestBody Leave leave) {
        try {
            Leave savedLeave = leaveService.saveLeave(leave);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedLeave);
        } catch (RuntimeException ex) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }



    @PutMapping("/{id}")
    public Leave updateLeave(@PathVariable Long id, @RequestBody Leave leave) {
        return leaveService.updateLeave(leave, id);
    }

    @DeleteMapping("/{id}")
    public void deleteLeave(@PathVariable("id") Long id) {
        leaveService.deleteLeave(id);
    }



}
