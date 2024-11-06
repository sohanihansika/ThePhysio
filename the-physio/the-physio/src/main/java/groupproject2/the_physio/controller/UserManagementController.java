package groupproject2.the_physio.controller;

import groupproject2.the_physio.dto.ReqRes;
import groupproject2.the_physio.entity.OurUsers;
import groupproject2.the_physio.service.UsersManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserManagementController {

    @Autowired
    private UsersManagementService userManagementService;

    @PostMapping("/auth/userRegister")
    public ResponseEntity<ReqRes> userRegister(@RequestBody ReqRes req) {
        return ResponseEntity.ok(userManagementService.userRegister(req));
    }

    @PostMapping("/owner/empRegister")
    public ResponseEntity<ReqRes> empRegister(@RequestBody ReqRes req) {
        return ResponseEntity.ok(userManagementService.empRegister(req));
    }

    @PostMapping("/auth/login")
    public ResponseEntity<ReqRes> login(@RequestBody ReqRes req) {
        return ResponseEntity.ok(userManagementService.login(req));
    }

    @PostMapping("/auth/refresh")
    public ResponseEntity<ReqRes> refreshToken(@RequestBody ReqRes req) {
        return ResponseEntity.ok(userManagementService.refreshToken(req));
    }

    @GetMapping("/adminowner/get-all-users")
    public ResponseEntity<ReqRes> getAllUsers() {
        return ResponseEntity.ok(userManagementService.getAllUsers());
    }

    @GetMapping("/anyuser/get-physios")
    public ResponseEntity<ReqRes> getPhysios() {
        return ResponseEntity.ok(userManagementService.findAllPhysios());
    }
    @GetMapping("/anyuser/get-coaches")
    public ResponseEntity<ReqRes> getCoaches() {
        return ResponseEntity.ok((ReqRes) userManagementService.findAllCoaches());
    }
    @GetMapping("/anyuser/get-users")
    public ResponseEntity<ReqRes> getUsers() {
        return ResponseEntity.ok(userManagementService.findAllUsers());
    }

    @GetMapping("/anyuser/get-user/{userId}")
    public ResponseEntity<ReqRes> getUserById(@PathVariable Integer userId) {
        return ResponseEntity.ok(userManagementService.getUsersById(userId));
    }

    @GetMapping("/anyuser/get-name/{userId}")
    public ResponseEntity<ReqRes> getUserNameById(@PathVariable Long userId) {
        return ResponseEntity.ok(userManagementService.getUsernameById(userId));
    }

    @PutMapping("/anyuser/update/{userId}")
    public ResponseEntity<ReqRes> updateUser(@PathVariable Integer userId, @RequestBody OurUsers reqres) {
        return ResponseEntity.ok(userManagementService.updateUser(userId, reqres));
    }

    @GetMapping("/anyuser/getMyProfile")
    public ResponseEntity<ReqRes> getMyProfile() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        ReqRes response = userManagementService.getMyProfile(email);
        return ResponseEntity.status(response.getStatusCode()).body(response);
    }

    @DeleteMapping("/adminowner/delete/{userId}")
    public ResponseEntity<ReqRes> deleteUser(@PathVariable Integer userId) {
        return ResponseEntity.ok(userManagementService.deleteUser(userId));
    }

    @PutMapping("/adminowner/empUpdate/{userId}")
    public ResponseEntity<ReqRes> empUpdate(@PathVariable Integer userId, @RequestBody OurUsers reqres) {
        return ResponseEntity.ok(userManagementService.empUpdate(userId, reqres));
    }
}
