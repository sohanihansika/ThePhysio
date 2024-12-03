package groupproject2.the_physio.service.impl;

import groupproject2.the_physio.dto.MembershipDto;
import groupproject2.the_physio.entity.Membership;
import groupproject2.the_physio.repository.MembershipRepo;
import groupproject2.the_physio.service.MembershipService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MembershipServiceImpl implements MembershipService {

    private final MembershipRepo membershipRepo;

    public MembershipServiceImpl(MembershipRepo membershipRepo) {
        this.membershipRepo = membershipRepo;
    }

    @Override
    public List<Membership> findAllMemberships() {
        return membershipRepo.findAll();
    }

    @Override
    public Optional<Membership> findById(Long membershipId) {
        return membershipRepo.findById(membershipId);
    }

    @Override
    public Membership saveMembership(Membership membership) {
        return membershipRepo.save(membership);
    }

    @Override
    public Membership updateMembership(Membership membership, Long membershipId) {
        membership.setMembershipId(membershipId); // Ensure the ID is set for updating
        return membershipRepo.save(membership);
    }

    @Override
    public void deleteMembership(Long membershipId) {
        membershipRepo.deleteById(membershipId);
    }

    @Override
    public MembershipDto.MembershipResponse saveMembership(MembershipDto.MembershipRequest membershipRequest) {
        Membership membershipEntity = MembershipDto.MembershipMapper.INSTANCE.fromRequestToEntity(membershipRequest);
        Membership savedEntity = membershipRepo.save(membershipEntity);
        return MembershipDto.MembershipMapper.INSTANCE.fromEntityToResponse(savedEntity);
    }

    @Override
    public MembershipDto.MembershipResponse updateMembership(MembershipDto.MembershipRequest membershipRequest, Long membershipId) {
        Optional<Membership> existingMembership = findById(membershipId);
        if (!existingMembership.isPresent()) {
            throw new RuntimeException("Membership Id " + membershipId + " Not Found!");
        }


        Membership membershipEntity = MembershipDto.MembershipMapper.INSTANCE.fromRequestToEntity(membershipRequest);
        membershipEntity.setMembershipId(membershipId); // Ensure the ID is set for updating
        Membership updatedEntity = membershipRepo.save(membershipEntity);
        return MembershipDto.MembershipMapper.INSTANCE.fromEntityToResponse(updatedEntity);
    }
    @Override
    public void updateAttendance(Long membershipId, String attendance) {
        Membership membership = membershipRepo.findById(membershipId)
                .orElseThrow(() -> new RuntimeException("Membership Id " + membershipId + " Not Found!"));
        membership.setAttendance(attendance); // Assuming `attendance` is a field in the `Membership` entity
        membershipRepo.save(membership);
    }

}
