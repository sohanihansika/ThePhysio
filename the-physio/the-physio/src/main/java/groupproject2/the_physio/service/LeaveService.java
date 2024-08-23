package groupproject2.the_physio.service;

import groupproject2.the_physio.dto.LeaveDto;
import groupproject2.the_physio.entity.Leave;

import java.util.List;
import java.util.Optional;

public interface LeaveService {

    List<Leave> findAllLeave();
    Optional<Leave> findById(Long id);
    Leave saveLeave(Leave leave);
    Leave updateLeave(Leave leave,Long id);
    void deleteLeave(Long id);

    // Using Request and Response with save and update booking
    LeaveDto.LeaveResponse saveLeave(LeaveDto.LeaveRequest leaveRequest);
    LeaveDto.LeaveResponse updateLeave(LeaveDto.LeaveRequest leaveRequest, Long id);
}
