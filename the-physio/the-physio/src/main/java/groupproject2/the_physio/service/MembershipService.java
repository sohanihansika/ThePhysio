package groupproject2.the_physio.service;

import groupproject2.the_physio.dto.MembershipDto;
import groupproject2.the_physio.entity.Membership;

import java.util.List;
import java.util.Optional;

public interface MembershipService {

    List<Membership> findAllMemberships();

    Optional<Membership> findById(Long id);

    Membership saveMembership(Membership membership);

    Membership updateMembership(Membership membership, Long membershipId);

    void deleteMembership(Long membershipId);

    // Using Request and Response with save and update membership
    MembershipDto.MembershipResponse saveMembership(MembershipDto.MembershipRequest membershipRequest);

    MembershipDto.MembershipResponse updateMembership(MembershipDto.MembershipRequest membershipRequest, Long membershipId);

    // New method for updating attendance
    void updateAttendance(Long membershipId, String attendance);
}
