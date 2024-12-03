package groupproject2.the_physio.dto;

import groupproject2.the_physio.entity.Membership;
import javax.annotation.processing.Generated;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-12-03T17:14:00+0530",
    comments = "version: 1.5.5.Final, compiler: Eclipse JDT (IDE) 3.40.0.z20241112-1021, environment: Java 17.0.13 (Eclipse Adoptium)"
)
public class MembershipDto$MembershipMapperImpl implements MembershipDto.MembershipMapper {

    @Override
    public Membership fromRequestToEntity(MembershipDto.MembershipRequest membershipRequest) {
        if ( membershipRequest == null ) {
            return null;
        }

        Membership membership = new Membership();

        membership.setUserId( membershipRequest.getUserId() );
        membership.setType( membershipRequest.getType() );
        membership.setDaysPerWeek( membershipRequest.getDaysPerWeek() );
        membership.setTimeSlots( membershipRequest.getTimeSlots() );
        membership.setPrice( membershipRequest.getPrice() );

        return membership;
    }

    @Override
    public MembershipDto.MembershipResponse fromEntityToResponse(Membership membershipEntity) {
        if ( membershipEntity == null ) {
            return null;
        }

        MembershipDto.MembershipResponse membershipResponse = new MembershipDto.MembershipResponse();

        membershipResponse.setMembershipId( membershipEntity.getMembershipId() );
        membershipResponse.setUserId( membershipEntity.getUserId() );
        membershipResponse.setType( membershipEntity.getType() );
        membershipResponse.setDaysPerWeek( membershipEntity.getDaysPerWeek() );
        membershipResponse.setTimeSlots( membershipEntity.getTimeSlots() );
        membershipResponse.setPrice( membershipEntity.getPrice() );
        membershipResponse.setStartedDate( membershipEntity.getStartedDate() );
        membershipResponse.setEndDate( membershipEntity.getEndDate() );
        membershipResponse.setAttendance( membershipEntity.getAttendance() );

        return membershipResponse;
    }
}
