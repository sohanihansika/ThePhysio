package groupproject2.the_physio.controller;

import groupproject2.the_physio.dto.MembershipDto;
import groupproject2.the_physio.entity.Membership;
import groupproject2.the_physio.service.MembershipService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/memberships")
public class MembershipController {

    private final MembershipService membershipService;

    public MembershipController(MembershipService membershipService) {
        this.membershipService = membershipService;
    }

    @GetMapping
    public ResponseEntity<List<Membership>> findAllMemberships() {
        List<Membership> memberships = membershipService.findAllMemberships();
        return ResponseEntity.ok(memberships);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Membership> findMembershipById(@PathVariable("id") Long membershipId) {
        Optional<Membership> membershipOpt = membershipService.findById(membershipId);
        return membershipOpt.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<MembershipDto.MembershipResponse> saveMembership(@RequestBody MembershipDto.MembershipRequest membershipRequest) {
        MembershipDto.MembershipResponse membershipResponse = membershipService.saveMembership(membershipRequest);
        return ResponseEntity.ok(membershipResponse);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MembershipDto.MembershipResponse> updateMembership(
            @PathVariable("id") Long membershipId,
            @RequestBody MembershipDto.MembershipRequest membershipRequest) {
        try {
            MembershipDto.MembershipResponse membershipResponse = membershipService.updateMembership(membershipRequest, membershipId);
            return ResponseEntity.ok(membershipResponse);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{id}/attendance")
    public ResponseEntity<Void> updateAttendance(
            @PathVariable("id") Long membershipId,
            @RequestBody String attendance) {
        try {
            membershipService.updateAttendance(membershipId, attendance);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMembership(@PathVariable("id") Long membershipId) {
        try {
            membershipService.deleteMembership(membershipId);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
